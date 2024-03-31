import "./CRM.style.ts";
import { MainPageTitle, FlexSection, Section, SectionConfig, ProductImage, SectionGrid, SectionGridImgRight, SectionGridImgLeft, MainPageTitleDesc } from "../../components/Sections/Sections.style"
import { Layout } from "../../components/Layout/Layout.tsx";
import ClickerColector from "../../components/ClickRegister/NavigationTracker.tsx";
import Video from "../../components/Video/Video.tsx";


export function CRM() {
    return (
        <>
            <Layout>
                <ClickerColector>
                    <SectionGridImgRight>
                        <MainPageTitleDesc>
                            <h1>O que é CRM?</h1>
                            <p>CRM é a sigla em inglês que significa Gestão de Relacionamento com o Cliente. O CRM é um software que visa automatizar tarefas, integrar e apoiar a gestão das áreas de vendas, marketing e atendimento ao cliente. Formando uma estratégia de negócios focada em conhecer o cliente, possibilitando um atendimento totalmente personalizado, antecipando as necessidades e desejos dos consumidores.</p>
                        </MainPageTitleDesc>
                        <Video embedId="2ZkjhgBNI-Y?si=5zDmul-JKydsA5Ne"></Video>
                    </SectionGridImgRight>
                    <Section>
                        <h4>Juntos, conectamos as empresas aos seus clientes.</h4>
                        <p>Utilizando o Salesforce Customer 360, nossa plataforma de CRM integrada, sua empresa oferece experiências personalizadas para seus clientes. Nossa solução fornece produtos poderosos e conectados para melhorar seu marketing, vendas, commerce, atendimento ao cliente, TI e muito mais.</p>
                    </Section>
                </ClickerColector>
            </Layout>
        </>
    )
}

export default CRM;