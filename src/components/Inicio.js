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
import {useEffect} from 'react';

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
                    speed={0.03}
                    class="flex items-end">
                    <img src={granos2} class="w-[15%]"></img>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={1}
                    speed={0.01}
                    class="flex items-end justify-end" >
                    <img src={granos2} class="w-[15%] -rotate-45"></img>
                </ParallaxLayer>

            </Parallax>
        </>
    )
}