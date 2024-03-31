import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import Salesforce from "./pages/Salesforce/Salesforce.tsx";

import Navbar from "./components/Dropdown/Navbar.tsx";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/Produtos" element={<Products />}/>
          <Route path="/Entre-em-contato" element={<Contact/>}/>
          <Route  path="/Salesforce" element={<Salesforce />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
