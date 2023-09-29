
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from "./components/Home";
import { Historia } from "./components/Historia";
import { Galeria } from "./components/Galeria";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { ContactoSc } from "./components/ContactoSc";
import Contacto from "./components/Contacto";

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<div> <Home></Home> <Historia></Historia> <Galeria></Galeria> <Menu></Menu> <Contacto></Contacto> </div>}></Route>
        <Route path="/Contacto" element={<ContactoSc></ContactoSc>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
