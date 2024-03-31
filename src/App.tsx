import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import Salesforce from "./pages/Salesforce/Salesforce.tsx";
import Einstein from "./pages/Product-Einstein-GPT/Einstein.tsx";
import SalesCloud from "./pages/SalesCloud/SalesCloud.tsx";
import CRM from "./pages/CRM/CRM.tsx";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/Produtos" element={<Products />}/>
          <Route path="/Entre-em-contato" element={<Contact/>}/>
          <Route  path="/Salesforce" element={<Salesforce />}/>
          <Route path="/Einstein-gpt" element={<Einstein/>}/>
          <Route path= "/Salescloud" element={<SalesCloud/>}/>
          <Route path= "/CRM" element={<CRM/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
