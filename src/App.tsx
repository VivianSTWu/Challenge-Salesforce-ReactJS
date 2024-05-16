import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import Salesforce from "./pages/Salesforce/Salesforce.tsx";
import Einstein from "./pages/Product-Einstein-GPT/Einstein.tsx";
import SalesCloud from "./pages/SalesCloud/SalesCloud.tsx";
import CRM from "./pages/CRM/CRM.tsx";
import FloatingButton from "./components/FAB/FloatingButton.tsx";

function App() {

  const HandleClickDisl = () => { document.body.classList.toggle("open-dislexic") }



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
        <FloatingButton title="Open Dyslexic" icon="OD" onClick={HandleClickDisl}/>
        {/* <FloatingButton title="Protanopia" icon="+" onClick={HandleClickProt}/> */}
    </>
  )
}

export default App
