import { Button } from "@mui/material"
import { Layout } from "../../components/Layout/Layout"
import { BackgroundForm, ConfigDiv, FlexSection, FormContainer, FormSection, Input, InputBox, MainPageTitle, ParagraphForm, SectionConfig, SpecialInput } from "../../components/Sections/Sections.style"


function Contact() {
    return(
        <div style={BackgroundForm}>
        <Layout>
            <MainPageTitle>
            </MainPageTitle>
            <FlexSection style={BackgroundForm}>
                <SectionConfig>
                <ConfigDiv>
                <div>
                    <h2>
                        Fale Conosco
                    </h2>
                    <p>Gostou do que viu? Ficou com alguma dúvida?</p>
                    <p>Podemos te ajudar!</p>
                </div>
                <div>
                    <img src="src\assets\images\Group 26.png"></img>
                </div>
                </ConfigDiv>
                </SectionConfig>
                <FormSection>
                    <ParagraphForm>
                    <p>
                    Preencha o formulário abaixo e um especialista entrará em contato com você o mais rápido possível. 
                    </p>
                    </ParagraphForm>
                    <div>
                        <input type="text" placeholder="NOME" style={Input}></input>
                    </div>    
                    <div>
                        <input type="text" placeholder="Sobrenome" style={Input}></input> 
                    </div>
                    <div>
                        <input type="email" placeholder="Email corporativo" style={Input}></input>
                    </div>
                    <div>
                        <input type="tel" placeholder="Telefone" style={Input}></input>
                    </div>
                    <div>
                        <input type="text" placeholder="Cargo" style={Input}></input> 
                    </div>
                    <div>
                        <input type="text" placeholder="Empresa" style={Input}></input>
                    </div>
                    <div>
                        <input type="text" placeholder="Segmento" style={Input}></input>
                    </div>
                <   div>
                        <input  type="number" placeholder="Tamanho da empresa" style={Input}></input>
                    </div>
                    <div>
                        <input type="text" placeholder="País/Região" style={Input}></input>
                    </div>
                    <div>
                        <input type="text" placeholder="Perguntas/Comentários" style={InputBox}></input>
                    </div>
                </FormSection>
            </FlexSection>
        </Layout>
        </div>
    )
}

export default Contact