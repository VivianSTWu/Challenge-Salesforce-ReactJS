import { Button } from "../../components/Button/Button"
import { Layout } from "../../components/Layout/Layout"
import { BackgroundForm, FormSection, Input, InputBox, ParagraphForm } from "./Contact.style"
import { ConfigDiv, FlexSection, MainPageTitle, SectionConfig } from "../../components/Sections/Sections.style"
import ClickerColector from "../../assets/ClickRegister/NavigationTracker"


function Contact() {
    return(
        <div style={BackgroundForm}>
        <Layout>
        <ClickerColector>
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
                        <input type="text" placeholder="Nome" style={Input}></input>
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
                    <Button>Enviar</Button>
                </FormSection>
            </FlexSection>
            </ClickerColector>
        </Layout>
        </div>
    )
}

export default Contact