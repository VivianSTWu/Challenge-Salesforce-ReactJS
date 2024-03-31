import ClickerColector from "../../components/ClickRegister/NavigationTracker"
import { Layout } from "../../components/Layout/Layout"
import { FlexColumnSection, FlexSection, MainPageTitle, MainPageTitleDesc, SectionConfig, SectionGridImgLeft, SectionGridImgRight } from "../../components/Sections/Sections.style"

function Einstein() {
    return (
        <>
            <Layout>
                <ClickerColector>
                    <SectionGridImgRight>
                        <MainPageTitleDesc>
                            <h1>Einstein GPT</h1>
                            <p>Um dos maiores diferenciais do Einstein GPT é a habilidade de oferecer experiências personalizadas. Ao analisar padrões de comportamento e interações passadas, a ferramenta pode prever e sugerir ações específicas para atender às necessidades individuais de cada cliente Isso cria um vínculo mais forte entre a marca e o cliente, resultando em maior fidelidade e satisfação.</p>
                        </MainPageTitleDesc>
                            <img src="src\assets\images\image 8.png" />
                    </SectionGridImgRight>
                    <SectionGridImgRight>
                        <SectionConfig>
                                <h2>Funcionalidades e Benefícios</h2>
                                <h3>1. Personalização total</h3>
                                <p>Um dos maiores diferenciais do Einstein GPT é a habilidade de oferecer experiências personalizadas. Ao analisar padrões de comportamento e interações passadas, a ferramenta pode prever e sugerir ações específicas para atender às necessidades individuais de cada cliente Isso cria um vínculo mais forte entre a marca e o cliente, resultando em maior fidelidade e satisfação.</p>
                                <h3>2. Aumento da produtividade</h3>
                                <p>A automação é a chave para aprimorar a produtividade, e o Einstein GPT faz isso de forma excepcional. Ao automatizar tarefas repetitivas e fornecer insights acionáveis, permite que os profissionais de vendas e marketing dediquem mais tempo a atividades estratégicas e menos a processos operacionais. Esse é um movimento essencial para as empresas que querem crescem com foco, uma vez que se traduz em maior eficiência operacional e melhores resultados financeiros.</p>
                        </SectionConfig>
                        <img src="src\assets\images\image 9.png" />
                    </SectionGridImgRight>
                </ClickerColector>
            </Layout>
        </>
    )
}

export default Einstein