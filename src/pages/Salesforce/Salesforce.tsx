import "./Salesforce.style.ts";
import { Section,SectionGridImgRight, MainPageTitleDesc } from "../../components/Sections/Sections.style"
import { Layout } from "../../components/Layout/Layout.tsx";
import Video from "../../components/Video/Video.tsx";


export function Salesforce() {
    return (
        <>
            <Layout>
                    <SectionGridImgRight>
                        <MainPageTitleDesc>
                            <h1>O que é a Salesforce?</h1>
                            <p>A Salesforce é uma empresa de softwares que foca na solução de gerenciamento de relacionamento para aproximar empresas e pessoas. É uma plataforma de CRM integrada que oferece a todos os departamentos uma visão única e compartilhada de cada cliente. Assista à demonstração:</p>
                        </MainPageTitleDesc>
                        <Video embedId="2ZkjhgBNI-Y?si=5zDmul-JKydsA5Ne"></Video>
                    </SectionGridImgRight>
                    <Section>
                        <h4>Juntos, conectamos as empresas aos seus clientes.</h4>
                        <p>Utilizando o Salesforce Customer 360, nossa plataforma de CRM integrada, sua empresa oferece experiências personalizadas para seus clientes. Nossa solução fornece produtos poderosos e conectados para melhorar seu marketing, vendas, commerce, atendimento ao cliente, TI e muito mais.</p>
                    </Section>
            </Layout>
        </>
    )
}

export default Salesforce