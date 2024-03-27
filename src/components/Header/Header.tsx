import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeaderElement, HeaderWrapperElement, LogoElement } from "./Header.style";
import Logo from "../../assets/logo-salesforce.svg";


export function Header() {

    return (
        <>
            <HeaderElement>
                <HeaderWrapperElement>
                    <LogoElement to="/">
                        <img src={Logo} alt="Logo Salesforce" />
                    </LogoElement>
                </HeaderWrapperElement>
            </HeaderElement>
        </>
    )
}

export default Header
