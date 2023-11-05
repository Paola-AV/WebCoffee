import Contacto from "./Contacto";
import { Galeria } from "./Galeria";
import { Historia } from "./Historia";
import { Home } from "./Home";
import { Menu } from "./Menu";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import granos from "../images/granos.png";
import granos2 from "../images/granos2.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Granos } from "./Granos";
import { Granos2 } from "./Granos2";
import { Granos3 } from "./Granos3";
import { Granos4 } from "./Granos4";
import { Granos5 } from "./Granos5";

export function Inicio() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <Parallax pages={5.2}>

                <ParallaxLayer
                    offset={0}
                    speed={0}
                    factor={1}
                    class="h-[2170px]">
                    <Nav class="z-[1000]"></Nav>
                    <Home></Home>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    speed={0}
                    factor={1}>
                    <Historia></Historia>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={0}
                    factor={1}>
                    <Galeria></Galeria>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={3}
                    speed={0}
                    factor={1}>
                    <Menu></Menu>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={4}
                    speed={0}
                    factor={1.2}>
                    <Contacto></Contacto>
                    <Footer></Footer>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={0}
                    speed={0.05}
                    sticky={{ start: 0, end: 0.1 }}>
                    <Granos></Granos>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0}
                    speed={0.03}
                    sticky={{ start: 0, end: 0.1 }} 
                    class="flex items-center justify-center" >
                    <Granos2></Granos2>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0}
                    speed={0.03}
                    sticky={{ start: 0, end: 0.1 }} 
                    class="flex items-start justify-end" >
                    <Granos3></Granos3>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={0.5}
                    speed={0.03}
                    sticky={{ start: 0, end: 0.1 }} 
                    class="flex items-end " >
                    <Granos4></Granos4>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={0.5}
                    speed={0.03}
                    sticky={{ start: 0, end: 0.1 }} 
                    class="flex items-end justify-end" >
                    <Granos5></Granos5>
                </ParallaxLayer>

            </Parallax>
        </>
    )
}

/* <ParallaxLayer
                    offset={0}
                    speed={0.01}
                    sticky={{ start: 0, end: 1 }}
                    class="flex items-end">
                    <img src={granos2} class="w-[15%]"></img>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={1}
                    speed={0.01}
                    sticky={{ start: 1, end: 2 }}
                    class="flex items-end justify-end" >
                    <img src={granos2} class="w-[15%] -rotate-45"></img>
                </ParallaxLayer>
               */