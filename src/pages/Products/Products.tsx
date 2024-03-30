import "./Products.style.ts";
import { MainPageTitle, FlexSection, Section, SectionConfig } from "../../components/Sections/Sections.style"
import { Layout } from "../../components/Layout/Layout.tsx";


function Products() {
    return(
       <>
        <Layout>
            <MainPageTitle>
                <h1>PRODUTOS</h1>
            </MainPageTitle>
            <FlexSection>
                <SectionConfig>
                <h2>Sales Cloud</h2>
                <p>Com o sistema de vendas da Salesforce, você pode </p>
                <p>expandir suas contas, encontrar novos clientes e fechar </p>
                <p>negócios com mais rapidez e de qualquer lugar.</p>
                </SectionConfig>
                <div>
                <img src="src\assets\images\close-more-deals-4-10 3.png" alt="Notebook e celular com produto da salesforce sendo exibido"/>
                </div>
            </FlexSection>
            <FlexSection>
                <img src="src\assets\images\Quer-ter-experiencias-personalizadas_fb_ig_pt-br 5.png" alt="Monitor exibindo produto da salesforce"/>
                <SectionConfig>
                <h2>EINSTEIN GPT</h2>
                <p>O Einstein GPT se destaca como uma ferramenta essencial para impulsionar os negócios. A Inteligência Artificial da Salesforce oferece experiências personalizadas, aumenta a eficiência operacional e simplifica a inovação, colocando as empresas um passo à frente na busca pelo sucesso.</p>
            </SectionConfig>
            </FlexSection>
        </Layout>
       </>
    )
}

export default Products

