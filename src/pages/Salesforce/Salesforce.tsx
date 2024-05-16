import "./Salesforce.style.ts";
import { Section, SectionGridImgRight, MainPageTitleDesc, ProductImage, SectionGridImgRightSmall } from "../../components/Sections/Sections.style"
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
                <SectionGridImgRightSmall>
                    <Section>
                        <h4>O que a Salesforce representa?</h4>
                        <h4>Nossos principais valores ajudam a tornar a Salesforce uma plataforma para mudanças.</h4>
                        <p>Desde que começamos a operar em um pequeno apartamento em São Francisco em 1999, acreditamos que fazer o bem como empresa significa fazer o bem ao mundo. Por isso, comprometemos nosso tempo, equidade e produtos para melhorar a educação, a igualdade e o meio ambiente para todos. Os principais valores da Salesforce: Confiança, Sucesso do Cliente, Inovação, Igualdade e Sustentabilidade.</p>
                    </Section>
                    <ProductImage>
                        <img src="src\assets\images\core-values-portuguese.png" alt="Brasão com a lista de valores da empresa: confiança, sucesso do cliente, inovação, igualdade, sustentabilidade" />
                    </ProductImage>
                </SectionGridImgRightSmall>
            </Layout>
        </>
    )
}

export default Salesforce