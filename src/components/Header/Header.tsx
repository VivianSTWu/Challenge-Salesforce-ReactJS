import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeaderElement, HeaderWrapperElement, LogoElement, MenuIcon } from "./Header.style";
import Logo from "../../assets/logo-salesforce.svg";
import { MainMenu } from "../MainMenu/MainMenu";

export function Header() {
    const [click, setClick] = useState(false);


    return (
        <>
            <HeaderElement>
                <HeaderWrapperElement>
                    <LogoElement to="/">
                        <img src={Logo} alt="Logo Salesforce, uma nuvem azul com Salesforce escrito em branco" />
                    </LogoElement>
                    <MainMenu />
                </HeaderWrapperElement>
            </HeaderElement>
        </>
    )
}

export default Header
