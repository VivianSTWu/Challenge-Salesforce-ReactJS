import { Layout } from "../../components/Layout/Layout"
import { MainPageTitle, SectionConfig, VideoDiv } from "../../components/Sections/Sections.style"
import Video from "../../components/Video/Video.tsx";


function SalesCloud() {
    return(
        <>
            <Layout>
                    <MainPageTitle>
                        <div>
                        <h1>Sales Cloud</h1>
                        <p>Não importa o tamanho de sua empresa, todos os agentes de vendas têm uma meta em comum: o desejo de terem um desempenho superior. No entanto é difícil conseguir isso sozinho, e é por isso que nós vamos ajudar você.</p>
                        </div> 
                   </MainPageTitle>
                   <VideoDiv>
                        <Video embedId="GFv8oxPaUIs?si=iAFU_l88F51vVfoF"></Video>
                   </VideoDiv>
                   <SectionConfig>
                    <p>O Sales Cloud é a base para ter uma equipe de vendas mais ágil, produtiva e informada. Descubra como ir mais longe e dar a sua parte em cada projeto.</p>
                   </SectionConfig>
                   <SectionConfig>
                    <h2>Acelere a produtividade</h2>
                    <p>Todos os negócios. Todos os dias. Veja a seguir seis recursos do Sales Cloud que ajudam a priorizar o mais importante: trabalhar com os clientes para fechar negócios. Em qualquer lugar.</p>
                   </SectionConfig>
            </Layout>
        </>
    )
}

export default SalesCloud