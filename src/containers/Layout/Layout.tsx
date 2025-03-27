"use client";

import Header from "@/containers/Header";
import Footer from "@/containers/Footer";
import React from "react";
import { StyledLayout } from "@/styles";

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
        {children}
      <Footer />
    </StyledLayout>
  );
};
export default Layout;
