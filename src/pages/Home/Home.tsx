import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from "../../components/Header/Header";
import { Card } from "../../components/Card/Card";
import { MainPageTitle, FlexSection, Section } from "../../components/Sections/Sections.style"
import { Layout } from "../../components/Layout/Layout";
import ClickerColector from "../../components/ClickRegister/NavigationTracker";



function Home() {

  const title = "Relacionamento\ncom o cliente?\nÉ Salesforce."
  return (
    <>
      <Layout>
        <ClickerColector>
          <MainPageTitle>
            <h1>{title}</h1>
            <img src="src\assets\images\what-is-astro-product-family.png" alt="" />
          </MainPageTitle>

          <FlexSection>
            <Card>
              <Link to="/Salesforce">
                <h2>O que é a Salesforce?</h2>
              </Link>
              <Link to="/Salesforce">
                <img src="src\assets\images\how-to-sell.jpg" alt="" />
              </Link>
            </Card>

            <Card>
              <h2>O que é CRM?</h2>
              <img src="src\assets\images\php-rc-what-is-crm.jpg" alt="" />
            </Card>
          </FlexSection>
          <Section>
            <h3>Conheça nossos produtos</h3>
            <FlexSection>

              <Card>
                <Link to="/Salescloud">
                  <h2>Sales Cloud</h2>
                </Link>
                <Link to="/Salescloud">
                  <img src="src\assets\images\sales-image-mx.png" alt="" />
                </Link>
              </Card>

              <Card>
                <Link to="/Einstein-gpt">
                  <h2>Einstein GPT</h2>
                </Link>
                <Link to="/Einstein-gpt">
                  <img src="src\assets\images\einsteinpng.png" alt="" />
                </Link>

              </Card>
            </FlexSection>
          </Section>
        </ClickerColector>
      </Layout>

    </>
  )
}

export default Home
