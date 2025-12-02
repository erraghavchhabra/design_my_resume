import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function HomeLayout({
  children,
  footerTopSpace = false,
  headerClassName = "",
}: {
  children: React.ReactNode;
  footerTopSpace?: boolean;
  headerClassName?: string;
}) {
  return (
    <>
      <Navbar className={headerClassName} />
      {children}
      <Footer topSpace={footerTopSpace} />
    </>
  );
}

export default HomeLayout;
