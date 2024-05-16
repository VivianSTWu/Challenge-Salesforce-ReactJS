import React from "react";
import {Link} from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { MainPageTitle, FlexSection, Section } from "../../components/Sections/Sections.style"
import { Layout } from "../../components/Layout/Layout";
import { Button } from "../../components/Button/Button"



function Home() {

  const title = "Relacionamento\ncom o cliente?\nÉ Salesforce."
  return (
    <>
      <Layout>
        <MainPageTitle>
          <h1>{title}</h1>
          <img src="src\assets\images\what-is-astro-product-family.png" alt="" />
        </MainPageTitle>

        <FlexSection>
          <Card>
            <Link to="/salesforce">
              <h2>O que é a Salesforce?</h2>
            </Link>
            <Link to="/salesforce">
              <img src="src\assets\images\how-to-sell.jpg" alt="" />
            </Link>
            <Link to="/salesforce">
              <Button onClick={() => {}}>Saiba Mais sobre a Salesforce</Button>
            </Link>
          </Card>

          <Card>
            <Link to="/crm">
              <h2>O que é CRM?</h2>
            </Link>
            <Link to="/crm">
              <img src="src\assets\images\php-rc-what-is-crm.jpg" alt="" />
            </Link>
            <Link to="/crm">
              <Button onClick={() => {}}>Saiba Mais sobre CRM</Button>
            </Link>
          </Card>
        </FlexSection>
        <Section>
          <h3>Conheça nossos produtos</h3>
          <FlexSection>

            <Card>
              <Link to="/salescloud">
                <h2>Sales Cloud</h2>
              </Link>
              <Link to="/salescloud">
                <img src="src\assets\images\sales-image-mx.png" alt="" />
              </Link>
              <Link to="/salescloud">
                <Button onClick={() => {}}>Saiba Mais sobre Sales Cloud</Button>
              </Link>
            </Card>

            <Card>
              <Link to="/einstein-gpt">
                <h2>Einstein GPT</h2>
              </Link>
              <Link to="/einstein-gpt">
                <img src="src\assets\images\einsteinpng.png" alt="" />
              </Link>
              <Link to="/einstein-gpt">
                <Button onClick={() => {}}>Saiba Mais sobre o Einstein GPT</Button>
              </Link>
            </Card>
          </FlexSection>
        </Section>
      </Layout>

    </>
  )
}

export default Home
