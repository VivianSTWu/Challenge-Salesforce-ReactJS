import React, { useState } from 'react';
import { Button } from "../../components/Button/Button"
import { Layout } from "../../components/Layout/Layout"
import { BackgroundForm, FormSection, Input, InputBox, ParagraphForm } from "./Contact.style"
import { ConfigDiv, FlexSection, MainPageTitle, SectionConfig } from "../../components/Sections/Sections.style"


function Contact() {

    const [formData, setFormData] = useState({
        nm_clie: '',
        sobrenome: '',
        email: '',
        empresa: '',
        tamanho_empresa: '',
        pais: '',
        cargo: '',
        telefone: '',
        desc_form: '',
        seg_empresa: ''
    });

    // Função para lidar com a mudança nos inputs do formulário
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            // Envia os dados do formulário para a API
            const response = await fetch('http://127.0.0.1:5000/contatenos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Dados enviados com sucesso
                console.log('Dados enviados com sucesso!');
            } else {
                // Se ocorrer um erro ao enviar os dados
                console.error('Erro ao enviar os dados.');
            }
        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
        }
    };

    return (
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
                    <form>
                        <FormSection>
                            <ParagraphForm>
                                <p>
                                    Preencha o formulário abaixo e um especialista entrará em contato com você o mais rápido possível.
                                </p>
                            </ParagraphForm>
                            <div>
                                <input type="text" id="nm_clie" name="nm_clie" value={formData.nm_clie} onChange={handleInputChange} placeholder="Nome" style={Input}></input>
                            </div>
                            <div>
                                <input type="text" id="sobrenome" name="sobrenome" value={formData.sobrenome} onChange={handleInputChange} placeholder="Sobrenome" style={Input}></input>
                            </div>
                            <div>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email corporativo" style={Input}></input>
                            </div>
                            <div>
                                <input type="tel" id="telefone" name="telefone" value={formData.telefone} onChange={handleInputChange} placeholder="Telefone" style={Input}></input>
                            </div>
                            <div>
                                <input type="text" id="cargo" name="cargo" value={formData.cargo} onChange={handleInputChange} placeholder="Cargo" style={Input}></input>
                            </div>
                            <div>
                                <input type="text" id="empresa" name="empresa" value={formData.empresa} onChange={handleInputChange} placeholder="Empresa" style={Input}></input>
                            </div>
                            <div>
                                <input type="text" id="seg_empresa" name="seg_empresa" value={formData.seg_empresa} onChange={handleInputChange} placeholder="Segmento" style={Input}></input>
                            </div>
                            <   div>
                                <input type="number" id="tamanho_empresa" name="tamanho_empresa" value={formData.tamanho_empresa} onChange={handleInputChange} placeholder="Tamanho da empresa" style={Input}></input>
                            </div>
                            <div>
                                <input type="text" id="pais" name="pais" value={formData.pais} onChange={handleInputChange} placeholder="País/Região" style={Input}></input>
                            </div>
                            <div>
                                <input type="text" id="desc_form" name="desc_form" value={formData.desc_form} onChange={handleInputChange} placeholder="Perguntas/Comentários" style={InputBox}></input>
                            </div>
                            <Button onClick={handleSubmit} type="submit">Enviar</Button>
                        </FormSection>
                        </form>
                </FlexSection>
            </Layout>
        </div>
    )
}

export default Contact