"use client";

import { useEffect, useState } from "react";
import { Fab, Box } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

export default function ScrollButton() {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 10;
        console.log(isBottom, 'isBottom123')
      setAtBottom(isBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [atBottom]);

  const scrollPage = () => {
    if (atBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 1000,
      }}
    >
      <Fab color="primary" onClick={scrollPage}>
        {atBottom ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
      </Fab>
    </Box>
  );
}
