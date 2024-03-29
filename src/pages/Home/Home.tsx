import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../../components/Header/Header";
import { Card } from "../../components/Card/Card";



function Home() {

  return (
    <>
    <Header/>
    <Card>IISI</Card>
    </>
  )
}

export default Home
