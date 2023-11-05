
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
import { HistoriaSc } from "./components/HistoriaSc";
import { Productos } from "./components/Productos";
import { Talleres } from "./components/Talleres";
import { GaleriaSc } from "./components/GaleriaSc";
import { Inicio } from "./components/Inicio";

function App() {
  return (
    <>
     <Nav></Nav>
      <Routes>
        <Route path="/" element={<div><Home></Home> <Historia></Historia> <Galeria></Galeria> <Menu></Menu> <Contacto></Contacto> </div>}></Route>
        <Route path="/Contacto" element={<ContactoSc></ContactoSc>}></Route>
        <Route path="/Inicio" element={<Inicio></Inicio>}></Route>
        <Route path="/Nosotros" element={<HistoriaSc></HistoriaSc>}></Route>
        <Route path="/Productos" element={<Productos></Productos>}></Route>
        <Route path="/Talleres" element={<Talleres></Talleres>}></Route>
        <Route path="/Galeria" element={<GaleriaSc></GaleriaSc>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
