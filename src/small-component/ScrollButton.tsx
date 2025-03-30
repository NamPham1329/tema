"use client";

import { useEffect, useState } from "react";
import { Fab, Box } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import styled from "styled-components";

const StyledIconScroll = styled(Box)`
  & .MuiFab-circular {
    width: 66.67px;
    height: 66.67px;
    background: white;
    & svg {
      width: 40px;
      height: 40px;
      color: #000000;
    }
  }
`;

export default function ScrollButton() {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollUp(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollPage = () => {
    if (showScrollUp) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <StyledIconScroll
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 1000,
      }}
    >
      <Fab color="primary" onClick={scrollPage}>
        {showScrollUp ? (
          <KeyboardArrowUp sx={{ width: "30px" }} />
        ) : (
          <KeyboardArrowDown sx={{ width: "30px" }} />
        )}
      </Fab>
    </StyledIconScroll>
  );
}
