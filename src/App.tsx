import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import Salesforce from "./pages/Salesforce/Salesforce.tsx";
import Salescloud from "./pages/SalesCloud/SalesCloud.tsx";
import Einstein from "./pages/Product-Einstein-GPT/Einstein.tsx";
import SalesCloud from "./pages/SalesCloud/SalesCloud.tsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/Produtos" element={<Products />}/>
          <Route path="/Contato" element={<Contact/>}/>
          <Route  path="/Salesforce" element={<Salesforce />}/>
          <Route  path="/Salescloud" element={<Salescloud />}/>
          <Route path="/Einstein-gpt" element={<Einstein/>}/>
          <Route path= "/Salescloud" element={<SalesCloud/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
