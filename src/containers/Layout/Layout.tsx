"use client";

import Header from "@/containers/Header";
import Footer from "@/containers/Footer";

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
        {children}
      <Footer />
    </div>
  );
};
export default Layout;
