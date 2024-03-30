import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products.tsx";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/Produtos" element={<Products />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
