"use client";

import Header from "@/containers/Header";
import Footer from "@/containers/Footer";
import ScrollButton from "@/small-component/ScrollButton";
import React, { useState, useEffect } from "react";
import { StyledLayout } from "@/styles";
import { Box, CircularProgress, Typography } from "@mui/material";

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isClient) return null;

  if (loading) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#f0f0f0",
        }}
      >
        <CircularProgress size={50} />
        <Typography mt={2}>Đang tải dữ liệu...</Typography>
      </Box>
    );
  }

  return (
    <StyledLayout>
      <Header />
      {children}
      <Footer />
      <ScrollButton />
    </StyledLayout>
  );
};

export default Layout;
