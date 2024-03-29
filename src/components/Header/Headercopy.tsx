import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeaderElement, HeaderWrapperElement, LogoElement, MenuIcon, MobileMenu } from "./Header.style";
import Logo from "../../assets/logo-salesforce.svg";
import { MainMenu } from "../MainMenu/MainMenu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import useMediaQuery from "../../hooks/useMediaQuery";

export function Header() {
    const [click, setClick] = useState(true);
    const [isMenuToggled, setIsMenuToggled] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }
    /*const closeMobileMenu = () => setClick(false)*/

    const isAboveMediumScreens = useMediaQuery("(min-width: 767px)");

    return (
        <>
            <HeaderElement>
                <HeaderWrapperElement>
                    <LogoElement to="/">
                        <img src={Logo} alt="Logo Salesforce, uma nuvem azul com Salesforce escrito em branco" />
                    </LogoElement>
                    <MainMenu/>
                </HeaderWrapperElement>
            </HeaderElement>
        </>
    )
}

export default Header
