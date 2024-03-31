import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import Salesforce from "./pages/Salesforce/Salesforce.tsx";
import Einstein from "./pages/Product-Einstein-GPT/Einstein.tsx";
import SalesCloud from "./pages/SalesCloud/SalesCloud.tsx";
import CRM from "./pages/CRM/CRM.tsx";

import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css'
import { useState } from "react";


function App() {

  const HandleClickProt = () => { document.body.classList.toggle("protanopia") }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Produtos" element={<Products />} />
          <Route path="/Entre-em-contato" element={<Contact />} />
          <Route path="/Salesforce" element={<Salesforce />} />
          <Route path="/Einstein-gpt" element={<Einstein />} />
          <Route path="/Salescloud" element={<SalesCloud />} />
          <Route path="/CRM" element={<CRM />} />
        </Routes>
      </BrowserRouter>

      <Fab icon={<span>+</span>} mainButtonStyles={{ backgroundColor: '#e74c3c' }}>
        {/*<Action text="Add Something" style={{ backgroundColor: '#3498db' }} onClick={() => alert('It works!')}>
          &plus;
  </Action>*/}
        <Action text="Protanopia" style={{ backgroundColor: '#3498db' }} onClick={HandleClickProt} >
          =
        </Action>
      </Fab>
    </>
  )
}

export default App
