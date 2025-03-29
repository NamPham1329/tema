import { useEffect, useState } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Image from "next/image";
import { StyledInputLang } from "@/styles";
import { useRouter } from "next/navigation";
import DoneIcon from "@mui/icons-material/Done";

const languages = [
  { code: "en", label: "English", flag: "/images/united-states.svg" },
  { code: "vi", label: "Vietnamese", flag: "/images/vietnam.svg" },
];

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 8,
    minWidth: 150,
    padding: "5px 0",
    background: "white",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
  "& .MuiMenuItem-root": {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "8px 16px",
    fontSize: "14px",
  },
  "& .MuiMenuItem-root:hover": {
    backgroundColor: "#f0f0f0",
  },
}));

const LanguageSwitcher = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lang) => {
    if (lang) setSelectedLang(lang);
    document.cookie = `locale=${lang?.code};`;
    router.refresh();
    setAnchorEl(null);
  };

  useEffect(() => {
    const cookieLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("locale="))
      ?.split("=")[1];
    if (cookieLocale) {
      const lang = languages.filter((item) => item?.code === cookieLocale);
      setSelectedLang(lang[0]);
    } else {
      const browserLocale = navigator.language.slice(0, 2);
      const lang = languages.filter((item) => item?.code === browserLocale);
      setSelectedLang(lang?.code);
      document.cookie = `locale=${browserLocale};`;
      router.refresh();
    }
  }, [router]);

  return (
    <StyledInputLang style={{ position: "relative" }}>
      <IconButton onClick={handleClick}>
        <Image
          src={selectedLang.flag}
          alt={selectedLang.label}
          width={24}
          height={16}
        />
        <ArrowDropDownIcon sx={{ color: "white" }}/>
      </IconButton>

      <StyledMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
      >
        {languages.map((lang) => (
          <MenuItem key={lang.code} onClick={() => handleClose(lang)}>
            <div style={{ minWidth: '24px'}}>{selectedLang?.code === lang.code && <DoneIcon />}</div>
            <Image src={lang.flag} alt={lang.label} width={24} height={16} />
            {lang.label}
          </MenuItem>
        ))}
      </StyledMenu>
    </StyledInputLang>
  );
};

export default LanguageSwitcher;
