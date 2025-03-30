import LanguageSwitcher from "@/small-component/SelectLanguage";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box, Grid } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import MobileHeader from "./HeaderMobile";

const Header = () => {
  const t = useTranslations("common");
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const pages = [t("about_us"), t("games"), t("partner"), t("contact_us")];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
  return (
    <div
      className={`header w-full top-0 left-0 ${
        scrolled ? "bg-sky-500/100" : ""
      }`}
    >
      {isMobile ? (
        <MobileHeader scrolled={scrolled}/>
      ) : (
        <Grid
          container
          style={{ padding: "20px 80px" }}
          sx={{ justifyContent: "space-between" }}
        >
          <Grid
            size={3}
            className="flex"
            sx={{ justifyContent: "flex-start", alignItems: "center" }}
          >
            <Image
              src="/images/White_logo.svg"
              width={108}
              height={64}
              alt="logo"
            />
          </Grid>
          <Grid
            size={9}
            className="menu flex"
            sx={{ justifyContent: "center" }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", justifyContent: "flex-end" },
              }}
            >
              {pages.map((page, index) => (
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    fontSize: "14px",
                    mx: "42px",
                    color: "white",
                    cursor: "pointer",
                  }}
                  key={index}
                >
                  {page}
                </Typography>
              ))}
              <LanguageSwitcher />
            </Box>
          </Grid>
        </Grid>
      )}
    </div>
  );
};
export default Header;
