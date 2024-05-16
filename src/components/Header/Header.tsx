import React from "react";
import { HeaderElement, HeaderWrapperElement, LogoElement } from "./Header.style";
import Logo from "../../assets/logo-salesforce.svg";
import { MainMenu } from "../MainMenu/MainMenu";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";



export function Header() {

    /* const HandleClickProt = () => {
        const images = document.getElementsByTagName("img");
        let i;

        for (i = 0; i < images.length; i++) {
            images[i].classList.toggle("deuteranopia");
        }
    } */

    // const HandleClickDisl = () => { document.body.classList.toggle("open-dislexic")}

    return (
        <>
            <HeaderElement>
                {/* <ClickerColector> */}
                <HeaderWrapperElement>
                    <LogoElement to="/">
                        <img src={Logo} alt="Logo Salesforce, uma nuvem azul com Salesforce escrito em branco" />
                    </LogoElement>
                    <Link to="https://www.salesforce.com/br/form/signup/freetrial-sales-pe/?d=70130000000EqoPAAS">
                    <Button onClick={() => {}}>Teste nosso sistema de CRM e vendas grátis</Button>
                    </Link>
                    <MainMenu />
                </HeaderWrapperElement>
                {/* </ClickerColector> */}
            </HeaderElement>
        </>
    )
}

export default Header
