import "./Products.style.ts";
import { MainPageTitle,SectionConfig, ProductImage,SectionGridImgRight, SectionGridImgLeft } from "../../components/Sections/Sections.style"
import { Layout } from "../../components/Layout/Layout.tsx";
import { Button } from "../../components/Button/Button.tsx";
import { Link } from "react-router-dom";


export function Products() {
    return (
        <>
            <Layout>
                <MainPageTitle>
                    <h1>PRODUTOS</h1>
                </MainPageTitle>

                
                <SectionGridImgLeft>
                    <SectionConfig>
                    <Link to="/Salescloud">
                        <h2>Sales Cloud</h2>
                    </Link>
                        <p>Com o sistema de vendas da Salesforce, você pode
                        expandir suas contas, encontrar novos clientes e fechar
                        negócios com mais rapidez e de qualquer lugar.</p>
                        <Link to="/Salescloud">
                        <Button onClick={() => {}}>Saiba mais</Button>
                        </Link>
                    </SectionConfig>

                    <Link to="/Salescloud">
                    <ProductImage>
                        <img src="src\assets\images\close-more-deals-4-10 3.png" alt="Notebook e celular com produto da salesforce sendo exibido" />
                    </ProductImage>
                    </Link>
                </SectionGridImgLeft>

                <SectionGridImgRight>
                    <Link to="/Einstein-gpt"> 
                    <ProductImage>
                        <img src="src\assets\images\Quer-ter-experiencias-personalizadas_fb_ig_pt-br 5.png" alt="Monitor exibindo produto da salesforce" />
                    </ProductImage>
                    </Link>
                    <SectionConfig>
                    <Link to="/Einstein-gpt">
                        <h2>Einstein GPT</h2>
                    </Link>
                        <p>O Einstein GPT se destaca como uma ferramenta essencial para impulsionar os negócios. A Inteligência Artificial da Salesforce oferece experiências personalizadas, aumenta a eficiência operacional e simplifica a inovação, colocando as empresas um passo à frente na busca pelo sucesso.</p>
                        <Link to="/Einstein-gpt">
                            <Button onClick={() => {}}>Saiba mais</Button>
                        </Link>
                    </SectionConfig>
                </SectionGridImgRight>
            </Layout>
        </>
    )
}

export default Products