
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from "./components/Home";
import { Historia } from "./components/Historia";
import { Galeria } from "./components/Galeria";
import { Menu } from "./components/Menu";
import { Contacto } from "./components/Contacto";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<div> <Home></Home> <Historia></Historia> <Galeria></Galeria> <Menu></Menu> <Contacto></Contacto> </div>}></Route>

      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
