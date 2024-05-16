//import "./Salesforce.style.ts";
import { Section, ProductImage,  SectionGridImgRight, MainPageTitleDesc, SectionGridImgLeftSmall, ProdDesc } from "../../components/Sections/Sections.style"
import { Layout } from "../../components/Layout/Layout.tsx";
import Video from "../../components/Video/Video.tsx";


export function CRM() {
    return (
        <>
            <Layout>
                    <SectionGridImgRight>
                        <MainPageTitleDesc>
                            <h1>O que é CRM?</h1>
                            <p>CRM é a sigla em inglês que significa Gestão de Relacionamento com o Cliente. O CRM é um software que visa automatizar tarefas, integrar e apoiar a gestão das áreas de vendas, marketing e atendimento ao cliente. Formando uma estratégia de negócios focada em conhecer o cliente, possibilitando um atendimento totalmente personalizado, antecipando as necessidades e desejos dos consumidores.</p>
                        </MainPageTitleDesc>
                        <Video embedId="vGMPc2Z5NJU?si=St4CksUuYU_loWr7"></Video>
                    </SectionGridImgRight>
                    <SectionGridImgLeftSmall>
                        <ProductImage>
                            <img src="src\assets\images\smb-sfstartups-hero1x.png" alt="" />
                        </ProductImage>
                        <ProdDesc>
                            <h2>O que sua pequena empresa precisa saber sobre CRM?</h2>
                            <p>Criamos esse espaço para ajudar os profissionais de áreas diferentes a desenvolver seus conhecimentos de negócios. Confira os conteúdos que preparamos para você aprender sobre CRM e entender os conceitos básicos de vendas, atendimento ao cliente e tecnologia com foco em melhorar a experiência do cliente e, consequentemente, ajudar a sua empresa a vender mais.</p>
                        </ProdDesc>
                    </SectionGridImgLeftSmall>
                    <Section>
                            <h2>O que sua pequena empresa precisa saber sobre CRM?</h2>
                            <p>Criamos esse espaço para ajudar os profissionais de áreas diferentes a desenvolver seus conhecimentos de negócios. Confira os conteúdos que preparamos para você aprender sobre CRM e entender os conceitos básicos de vendas, atendimento ao cliente e tecnologia com foco em melhorar a experiência do cliente e, consequentemente, ajudar a sua empresa a vender mais.</p>
                        
                    </Section>
            </Layout>
        </>
    )
}

export default CRM;