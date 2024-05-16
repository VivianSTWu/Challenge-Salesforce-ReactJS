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
                                <p>Nossos principais valores ajudam a tornar a Salesforce uma plataforma para mudanças.</p>
                                <p>Preencha o formulário ou ligue para <strong>0800 891 1887.</strong></p>
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
                                <label htmlFor="nm_clie">Nome *</label><br />
                                <input type="text" id="nm_clie" name="nm_clie" value={formData.nm_clie} onChange={handleInputChange} placeholder="Nome" style={Input} required></input>
                            </div>
                            <div>
                                <label htmlFor="sobrenome">Sobrenome *</label><br />
                                <input type="text" id="sobrenome" name="sobrenome" value={formData.sobrenome} onChange={handleInputChange} placeholder="Sobrenome" style={Input} required></input>
                            </div>
                            <div>
                                <label htmlFor="email">Email coorporativo *</label><br/>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email corporativo" style={Input} required></input>
                            </div>
                            <div>
                                <label htmlFor="telefone">Telefone *</label><br/>
                                <input type="tel" id="telefone" name="telefone" value={formData.telefone} onChange={handleInputChange} placeholder="Telefone" style={Input} required></input>
                            </div>
                            <div>
                                <label htmlFor="cargo">Cargo *</label><br/>
                                <input type="text" id="cargo" name="cargo" value={formData.cargo} onChange={handleInputChange} placeholder="Cargo" style={Input} required></input>
                            </div>
                            <div>
                                <label htmlFor="empresa">Empresa *</label><br/>
                                <input type="text" id="empresa" name="empresa" value={formData.empresa} onChange={handleInputChange} placeholder="Empresa" style={Input} required></input>
                            </div>
                            <div>
                                <label htmlFor="seg_empresa">Segmento da empresa *</label><br/>
                                <input type="text" id="seg_empresa" name="seg_empresa" value={formData.seg_empresa} onChange={handleInputChange} placeholder="Segmento" style={Input} required></input>
                            </div>
                            <div>
                                <label htmlFor="tamanho_empresa">Tamanho da empresa *</label><br/>
                                <input type="number" id="tamanho_empresa" name="tamanho_empresa" value={formData.tamanho_empresa} onChange={handleInputChange} placeholder="Tamanho da empresa" style={Input} required></input>
                            </div>
                            <div>
                                <label htmlFor="pais">País/Região *</label><br/>
                                <select id="pais" name="pais" value={formData.pais} onChange={handleInputChange} aria-required="true" required="true" style={Input} required>
                                    <option disabled="" label="-- País/Região --" selected="" value="--País/Região--">País/Região</option>
                                    <option value="US">Estados Unidos</option>
                                    <option value="AF">Afeganistão</option>
                                    <option value="AL">Albânia</option>
                                    <option value="DZ">Argélia</option>
                                    <option value="AS">Samoa Americana</option>
                                    <option value="AD">Andorra</option>
                                    <option value="AI">Anguila</option>
                                    <option value="AQ">Antártica</option>
                                    <option value="AG">Antígua e Barbuda</option>
                                    <option value="AR">Argentina</option>
                                    <option value="AM">Armênia</option>
                                    <option value="AW">Aruba</option>
                                    <option value="AU">Austrália</option>
                                    <option value="AT">Áustria</option>
                                    <option value="AZ">Azerbaijão</option>
                                    <option value="BS">Bahamas</option>
                                    <option value="BH">Bahrein</option>
                                    <option value="BD">Bangladesh</option>
                                    <option value="BB">Barbados</option>
                                    <option value="BY">Belarus</option>
                                    <option value="BZ">Belize</option>
                                    <option value="BE">Bélgica</option>
                                    <option value="BJ">Benin</option>
                                    <option value="BM">Bermudas</option>
                                    <option value="BT">Butão</option>
                                    <option value="BO">Bolívia</option>
                                    <option value="BV">Ilha Bouvet</option>
                                    <option value="BA">Bósnia e Herzegovina</option>
                                    <option value="BW">Botsuana</option>
                                    <option value="BR">Brasil</option>
                                    <option value="IO">Território Britânico no Oceano Índico</option>
                                    <option value="BN">Brunei</option>
                                    <option value="BG">Bulgária</option>
                                    <option value="BF">Burkina Faso</option>
                                    <option value="BI">Burundi</option>
                                    <option value="KH">Camboja</option>
                                    <option value="CM">Camarões</option>
                                    <option value="CA">Canadá</option>
                                    <option value="CV">Cabo Verde</option>
                                    <option value="KY">Ilhas Cayman</option>
                                    <option value="CF">República Centro-africana</option>
                                    <option value="TD">Chade</option>
                                    <option value="CL">Chile</option>
                                    <option value="CN">China</option>
                                    <option value="HK">Hong Kong</option>
                                    <option value="MO">Macau</option>
                                    <option value="CX">Ilhas Christmas</option>
                                    <option value="CC">Ilhas Cocos (Keeling)</option>
                                    <option value="CO">Colômbia</option>
                                    <option value="KM">Comores</option>
                                    <option value="CK">Ilhas Cook</option>
                                    <option value="CR">Costa Rica</option>
                                    <option value="CI">Costa do Marfim</option>
                                    <option value="HR">Croácia</option>
                                    <option value="CY">Chipre</option>
                                    <option value="CZ">República Tcheca</option>
                                    <option value="CD">República Democrática do Congo </option>
                                    <option value="DK">Dinamarca</option>
                                    <option value="DM">Dominica</option>
                                    <option value="DO">República Dominicana</option>
                                    <option value="DJ">Djibuti</option>
                                    <option value="EC">Equador</option>
                                    <option value="EG">Egito</option>
                                    <option value="SV">El Salvador</option>
                                    <option value="GQ">Guiné Equatorial</option>
                                    <option value="ER">Eritréia</option>
                                    <option value="EE">Estônia</option>
                                    <option value="ET">Etiópia</option>
                                    <option value="FK">Ilhas Falkland (Malvinas)</option>
                                    <option value="FO">Ilhas Faroe</option>
                                    <option value="FJ">Ilhas Fiji</option>
                                    <option value="FI">Finlândia</option>
                                    <option value="FR">França</option>
                                    <option value="GF">Guiana Francesa</option>
                                    <option value="PF">Polinésia Francesa</option>
                                    <option value="TF">Territórios Franceses do Sul</option>
                                    <option value="MK">Macedônia, Antiga República Iugoslava da Macedônia</option>
                                    <option value="GA">Gabão</option>
                                    <option value="GM">Gâmbia</option>
                                    <option value="GE">Geórgia</option>
                                    <option value="DE">Alemanha</option>
                                    <option value="GH">Gana</option>
                                    <option value="GI">Gibraltar</option>
                                    <option value="GR">Grécia</option>
                                    <option value="GL">Groenlândia</option>
                                    <option value="GD">Granada</option>
                                    <option value="GP">Guadalupe</option>
                                    <option value="GU">Guam</option>
                                    <option value="GT">Guatemala</option>
                                    <option value="GN">Guiné</option>
                                    <option value="GW">Guiné-Bissau</option>
                                    <option value="GY">Guiana</option>
                                    <option value="HT">Haiti</option>
                                    <option value="HM">Ilhas Heard e McDonald</option>
                                    <option value="HN">Honduras</option>
                                    <option value="HU">Hungria</option>
                                    <option value="IS">Islândia</option>
                                    <option value="IN">Índia</option>
                                    <option value="ID">Indonésia</option>
                                    <option value="IE">Irlanda</option>
                                    <option value="IL">Israel</option>
                                    <option value="IT">Itália</option>
                                    <option value="JM">Jamaica</option>
                                    <option value="JP">Japão</option>
                                    <option value="JO">Jordânia</option>
                                    <option value="KZ">Cazaquistão</option>
                                    <option value="KE">Quênia</option>
                                    <option value="KI">Kiribati</option>
                                    <option value="KR">Coréia do Sul</option>
                                    <option value="KW">Kuwait</option>
                                    <option value="KG">Quirguistão</option>
                                    <option value="LA">Laos</option>
                                    <option value="LV">Letônia</option>
                                    <option value="LB">Líbano</option>
                                    <option value="LS">Lesoto</option>
                                    <option value="LR">Libéria</option>
                                    <option value="LI">Liechtenstein</option>
                                    <option value="LT">Lituânia</option>
                                    <option value="LU">Luxemburgo</option>
                                    <option value="MG">Madagascar</option>
                                    <option value="MW">Malauí</option>
                                    <option value="MY">Malásia</option>
                                    <option value="MV">Maldivas</option>
                                    <option value="ML">Mali</option>
                                    <option value="MT">Malta</option>
                                    <option value="MH">Ilhas Marshall</option>
                                    <option value="MR">Mauritânia</option>
                                    <option value="MU">Maurício</option>
                                    <option value="MQ">Martinica</option>
                                    <option value="YT">Mayotte</option>
                                    <option value="MX">México</option>
                                    <option value="FM">Micronésia</option>
                                    <option value="MD">Moldávia</option>
                                    <option value="MC">Mônaco</option>
                                    <option value="MN">Mongólia</option>
                                    <option value="MS">Montserrat</option>
                                    <option value="MA">Marrocos</option>
                                    <option value="MZ">Moçambique</option>
                                    <option value="MM">Myanmar</option>
                                    <option value="NA">Namíbia</option>
                                    <option value="NR">Nauru</option>
                                    <option value="NP">Nepal</option>
                                    <option value="NL">Holanda</option>
                                    <option value="AN">Antilhas Holandesas</option>
                                    <option value="NC">Nova Caledônia</option>
                                    <option value="NZ">Nova Zelândia</option>
                                    <option value="NI">Nicarágua</option>
                                    <option value="NE">Níger</option>
                                    <option value="NG">Nigéria</option>
                                    <option value="NU">Niue</option>
                                    <option value="NO">Noruega</option>
                                    <option value="NF">Ilha Norfolk</option>
                                    <option value="MP">Ilhas Marianas do Norte</option>
                                    <option value="OM">Omã</option>
                                    <option value="PK">Paquistão</option>
                                    <option value="PW">Palau</option>
                                    <option value="PA">Panamá</option>
                                    <option value="PG">Papua Nova Guiné</option>
                                    <option value="PY">Paraguai</option>
                                    <option value="PE">Peru</option>
                                    <option value="PH">Filipinas</option>
                                    <option value="PN">Ilha Pitcairn</option>
                                    <option value="PL">Polônia</option>
                                    <option value="PT">Portugal</option>
                                    <option value="PR">Porto Rico</option>
                                    <option value="QA">Catar</option>
                                    <option value="CG">República do Congo </option>
                                    <option value="RE">Ilha da Reunião</option>
                                    <option value="RO">Romênia</option>
                                    <option value="RU">Rússia</option>
                                    <option value="RW">Ruanda</option>
                                    <option value="SH">Santa Helena</option>
                                    <option value="KN">São Cristóvão e Névis</option>
                                    <option value="LC">Santa Lúcia</option>
                                    <option value="PM">Saint-Pierre e Miquelon</option>
                                    <option value="VC">São Vicente e Granadinas</option>
                                    <option value="WS">Samoa</option>
                                    <option value="SM">San Marino</option>
                                    <option value="ST">São Tomé e Príncipe</option>
                                    <option value="SA">Arábia Saudita</option>
                                    <option value="SN">Senegal</option>
                                    <option value="rs">Serbia</option>
                                    <option value="SC">Seychelles</option>
                                    <option value="SL">Serra Leoa</option>
                                    <option value="SG">Cingapura</option>
                                    <option value="SK">Eslováquia</option>
                                    <option value="SI">Eslovênia</option>
                                    <option value="SB">Ilhas Salomão</option>
                                    <option value="SO">Somália</option>
                                    <option value="ZA">África do Sul</option>
                                    <option value="GS">Ilhas Geórgia do Sul e Sandwich do Sul Ilhas Sandwich</option>
                                    <option value="ES">Espanha</option>
                                    <option value="LK">Sri Lanka</option>
                                    <option value="SR">Suriname</option>
                                    <option value="SJ">Ilhas Svalbard e Jan Mayen</option>
                                    <option value="SZ">Suazilândia</option>
                                    <option value="SE">Suécia</option>
                                    <option value="CH">Suíça</option>
                                    <option value="TW">Taiwan</option>
                                    <option value="TJ">Tajiquistão</option>
                                    <option value="TZ">Tanzânia</option>
                                    <option value="TH">Tailândia</option>
                                    <option value="TL">Timor-Leste</option>
                                    <option value="TG">Togo</option>
                                    <option value="TK">Tokelau</option>
                                    <option value="TO">Tonga</option>
                                    <option value="TT">Trinidad e Tobago</option>
                                    <option value="TN">Tunísia</option>
                                    <option value="TR">Turquia</option>
                                    <option value="TC">Ilhas Turks e Caicos</option>
                                    <option value="TM">Turcomenistão</option>
                                    <option value="TV">Tuvalu</option>
                                    <option value="UG">Uganda</option>
                                    <option value="UA">Ucrânia</option>
                                    <option value="AE">Emirados Árabes Unidos</option>
                                    <option value="GB">Reino Unido</option>
                                    <option value="UM">Territórios Insulares dos Estados Unidos</option>
                                    <option value="UY">Uruguai</option>
                                    <option value="UZ">Uzbequistão</option>
                                    <option value="VU">Vanuatu</option>
                                    <option value="VA">Cidade do Vaticano (Santa Sé)</option>
                                    <option value="VE">Venezuela</option>
                                    <option value="VN">Vietnã</option>
                                    <option value="VG">Ilhas Virgens Britânicas</option>
                                    <option value="VI">Ilhas Virgens Norte-americanas</option>
                                    <option value="WF">Ilhas Wallis e Futuna</option>
                                    <option value="EH">Saara Ocidental</option>
                                    <option value="YE">Iêmen</option>
                                    <option value="ZM">Zâmbia</option>
                                    <option value="ZW">Zimbábue</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="desc_form">Perguntas/Comentários *</label><br/>
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