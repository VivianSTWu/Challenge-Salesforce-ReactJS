// Filename - components/Footer.js

import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
    Logo,
} from "./Footer.style";


const Footer = () => {
    return (
        // <ClickerColector>
            <Box>
                <Logo>
                    <img src="src\assets\logo-salesforce.svg" alt="" />
                </Logo>
                <FooterContainer>
                    <Row>
                        <Column>
                            <Heading>Sobre nós</Heading>
                            <FooterLink href="/Salesforce">
                                O que é a Salesforce?
                            </FooterLink>
                            <FooterLink href="/crm">
                                O que é CRM?
                            </FooterLink>
                        </Column>
                        <Column>
                            <Heading>Produtos</Heading>
                            <FooterLink href="/salescloud">
                                Sales Cloud
                            </FooterLink>
                            <FooterLink href="/einstein-gpt">
                                Einstein GPT
                            </FooterLink>
                        </Column>
                        <Column>
                            <Heading>Contato</Heading>
                            <FooterLink href="/contato">
                                Fale conosco
                            </FooterLink>
                        </Column>
                    </Row>
                </FooterContainer>
            </Box>
        // </ClickerColector>
    );
};
export default Footer;
