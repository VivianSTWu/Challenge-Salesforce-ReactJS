import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products.tsx";
import Salesforce from "./pages/Salesforce/Salesforce.tsx";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/Produtos" element={<Products />}/>
          <Route  path="/Salesforce" element={<Salesforce />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
