import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from "../../components/Header/Header";
import { Card } from "../../components/Card/Card";
import { MainPageTitle, FlexSection } from "../../components/Sections/Sections.style"
import { Layout } from "../../components/Layout/Layout";



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
            <h2>O que é a Salesforce?</h2>
            <img src="src\assets\images\how-to-sell.jpg" alt="" />
          </Card>

          <Card>
            <h2>O que é CRM?</h2>
            <img src="src\assets\images\php-rc-what-is-crm.jpg" alt="" />
          </Card>
        </FlexSection>

        <FlexSection>
          <h3>Conheça nossos produtos</h3>

          <Card>
            <h2>Sales Cloud</h2>
            <img src="src\assets\images\sales-image-mx.png" alt="" />
          </Card>

          <Card>
            <h2>Einstein GPT</h2>
            <img src="src\assets\images\einsteinpng.png" alt="" />
          </Card>
        </FlexSection>

      </Layout>

    </>
  )
}

export default Home
