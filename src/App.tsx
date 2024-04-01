import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import Salesforce from "./pages/Salesforce/Salesforce.tsx";
import Einstein from "./pages/Product-Einstein-GPT/Einstein.tsx";
import SalesCloud from "./pages/SalesCloud/SalesCloud.tsx";
import CRM from "./pages/CRM/CRM.tsx";

import { Fab, Action } from 'react-tiny-fab';
import './components/Widget/Widget.style.scss'
import { useState } from "react";
import {faEye} from '@fortawesome/free-solid-svg-icons';


function App() {

  const HandleClickProt = () => { document.body.classList.toggle("protanopia") }
  const HandleClickDisl = () => { document.body.classList.toggle("open-dislexic")}


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

      <Fab icon={"☺"} mainButtonStyles={{ backgroundColor: '#e74c3c' }}>
        {/*<Action text="Add Something" style={{ backgroundColor: '#3498db' }} onClick={() => alert('It works!')}>
          &plus;
  </Action>*/}
        <Action text="Protanopia" style={{ backgroundColor: '#3498db' }} onClick={HandleClickProt} >
          P
        </Action>
        <Action text="Dislexia" style={{ backgroundColor: '#3498db' }} onClick={HandleClickDisl} >
          D
        </Action>
      </Fab>
    </>
  )
}

export default App
