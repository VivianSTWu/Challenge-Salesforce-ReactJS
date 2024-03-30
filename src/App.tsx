import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products.tsx";
import Contact from "./pages/Contact/Contact.tsx";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/Produtos" element={<Products />}/>
          <Route path="/Entre-em-contato" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
