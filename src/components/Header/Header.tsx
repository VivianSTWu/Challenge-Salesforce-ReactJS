import React from "react";
import { HeaderElement, HeaderWrapperElement, LogoElement } from "./Header.style";
import Logo from "../../assets/logo-salesforce.svg";
import { MainMenu } from "../MainMenu/MainMenu";
import { Button } from "../Button/Button";

export function Header() {

    return (
        <>
            <HeaderElement>
                <HeaderWrapperElement>
                    <LogoElement to="/">
                        <img src={Logo} alt="Logo Salesforce, uma nuvem azul com Salesforce escrito em branco" />
                    </LogoElement>
                    <Button>Teste nosso sistema de CRM e vendas grátis</Button>
                    <MainMenu />
                </HeaderWrapperElement>
            </HeaderElement>
        </>
    )
}

export default Header
