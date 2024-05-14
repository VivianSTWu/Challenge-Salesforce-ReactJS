import { useState } from "react";
import Footer from "../Footer/Footer";
import { Header } from "../Header/Header";
import { LayoutWrapperElement } from "./Layout.style";

interface LayoutProps {
  children: React.ReactNode;
}

import { ColorBlindProvider } from "../../context/ColorBlindContext";



export const Layout = ({ children }: LayoutProps) => {



  return (
    <>
      <ColorBlindProvider>
        <Header />
        <LayoutWrapperElement>{children}</LayoutWrapperElement>
        <Footer />
      </ColorBlindProvider>

    </>
  );
};
