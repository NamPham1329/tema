import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Typography,
  Box,
  Grid,
  MenuList,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import LanguageSwitcher from "@/small-component/SelectLanguage";
import ClearIcon from "@mui/icons-material/Clear";
import styled from "styled-components";
import { useTranslations } from "next-intl";

const MenuMobileStyled = styled(Box)`
  padding-top: 1rem;
  height: 0;
  overflow: hidden;
  transition: height 1s ease-in-out;
  &.open {
    height: 100vh;
  }
  & .language {
    background-color: #f6f6f6;
    border: 1px solid #afafaf;
    border-radius: 8px;
    & button {
      padding: 5px 12px;
      & svg {
        color: black;
      }
    }
  }

  & li {
    cursor: pointer;
  }

  & .MuiListItemText-root > span {
    text-align: center;
    font-family: Montserrat;
    font-weight: 700;
    font-size: 14px;
    line-height: 17.5px;
    letter-spacing: 0px;
    text-transform: uppercase;
  }
`;
interface MobileHeaderProps {
  scrolled: boolean;
}

const MobileHeader = ({ scrolled }: MobileHeaderProps) => {
  const t = useTranslations();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <AppBar position="static" sx={{
        backgroundColor: scrolled ? "bg-sky-500/100" : "transparent",
        position: 'absolute',
        top: 0,
    }}>
      <MenuMobileStyled
        sx={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
          background: "white",
          zIndex: openMenu ? "999" : '0',
          px: 2,
          color: "black",
          marginTop: openMenu ? '0' : '-100px'
        }}
        className={openMenu ? "open" : ""}
      >
        <Grid
          container
          size={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid className="language">
            <LanguageSwitcher />
          </Grid>
          <Grid>
            <div onClick={() => setOpenMenu(false)}>
              <ClearIcon
                sx={{
                  color: "black",
                  width: "40px",
                  height: "40px",
                  cursor: "pointer",
                }}
              />
            </div>
          </Grid>
        </Grid>
        <Box sx={{ marginTop: "40px" }}>
          <MenuList>
            <MenuItem>
              <ListItemText>{t("common.about_us")}</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemText>{t("common.games")}</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemText>{t("common.partner")}</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemText>{t("common.contact_us")}</ListItemText>
            </MenuItem>
          </MenuList>
        </Box>
      </MenuMobileStyled>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Image
            src="/images/White_logo.svg"
            width={68}
            height={40}
            alt="logo"
          />
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          onClick={() => setOpenMenu(true)}
        >
          <MenuIcon sx={{ width: "40px", height: "40px" }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default MobileHeader;
