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
import { Granos6 } from "./Granos6";
import { Granos7 } from "./Granos7";
import gArriba from "../images/gArriba.png";
import gIzquierda from "../images/gIzquierda.png";
import gFrente from "../images/gFrente.png";
import gDerecha from "../images/gDerecha.png";
import gMedio from "../images/gMedio.png";
import { useSpring, useScroll, easings, config, animated } from '@react-spring/web'

export function Inicio() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    //funcion para granos1
    const mover1 = useSpring({
        from: {
            opacity: 0,
            transform: 'translate3d(0px,0px,0px)',
            width: '1%'
        },
        config: { tension: 20, friction: 6 },
        transform: 'translate3d(200px,100px,0px)',
        opacity: 1,
        width: '9%'
    })
    //funcion para granos2
    const mover2 = useSpring({
        from: {
            opacity: 0,
            transform: 'translate3d(0px,-400px,0px)',
            width: '1%'
        },
        config: { tension: 20, friction: 6 },
        transform: 'translate3d(0px,-80px,0px)',
        opacity: 1,
        width: '6%'
    });
    //funcion para granos 3
    const mover3 = useSpring({
        from: {
            opacity: 0,
            transform: 'translate3d(0px,0px,0px)',
            width: '1%'
        },
        config: { tension: 20, friction: 6 },
        transform: 'translate3d(-380px,80px,0px)',
        opacity: 1,
        width: '5%'
    })
    //funcion para granos 4
    const mover4 = useSpring({
        from: {
            opacity: 0,
            transform: 'translate3d(0px,0px,0px)',
            width: '1%'
        },
        config: { tension: 20, friction: 6 },
        transform: 'translate3d(300px,-200px,0px)',
        opacity: 1,
        width: '6%'
    })
    //funcion para granos 5
    const mover5 = useSpring({
        from: {
            opacity: 0,
            transform: 'translate3d(0px,0px,0px)',
            width: '1%'
        },
        config: { tension: 20, friction: 6 },
        transform: 'translate3d(-100px,-220px,0px)',
        opacity: 1,
        width: '5%'
    })
    //funcion para granos 6
    const mover6 = useSpring({
        from: {
            opacity: 0,
            transform: 'translate3d(0px,0px,0px)',
            width: '1%'
        },
        config: { tension: 20, friction: 6 },
        transform: 'translate3d(100px,-200px,0px)',
        opacity: 1,
        width: '6%'
    })
    //funcion para granos 7
    const mover7 = useSpring({
        from: {
            opacity:0,
            transform: 'translate3d(0px,0px,0px)',
            width:'1%'
        },
        config: { tension: 20, friction: 6},
        transform: 'translate3d(-80px,80px,0px)',
        opacity:1,
        width:'5%'
    })
    //funcion para granos 8
    //funcion para granos2
    const mover8 = useSpring({
        from: {
            opacity: 0,
            transform: 'translate3d(0px,-400px,0px)',
            width: '1%'
        },
        config: { tension: 20, friction: 6 },
        transform: 'translate3d(0px,-80px,0px)',
        opacity: 1,
        width: '9%'
    });
    return (
        <>
            <Parallax pages={3.24}>
            <ParallaxLayer
                    offset={0}
                    speed={0.7}
                    factor={0.5}
                    sticky={{ start: 0, end: 3 }}
                    class="h-[2170px]">
                    <Nav class="z-[1000]"></Nav>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={0}
                    speed={0.7}
                    factor={1}
                    class="h-[2170px] ">
                    <Home></Home>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0.99}
                    speed={0.7}
                    factor={1}>
                    <Historia></Historia>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1.2}
                    speed={0.7}
                    factor={1.5}>
                    <Galeria></Galeria>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1.999}
                    speed={0.7}
                    factor={1.5}>
                    <Menu></Menu>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2.2}
                    speed={0.7}
                    factor={1.2}>
                    <Contacto></Contacto>
                    <Footer></Footer>
                </ParallaxLayer>
                {/*granos 1*/}
                <ParallaxLayer
                    offset={0}
                    speed={0.05}
                    /*sticky={{ start: 0, end: 0.05 }}*/>
                    <animated.div
                        style={mover1}
                    >
                        <img src={gArriba} class="blur-[2px]" alt="Granos de café" />
                    </animated.div>
                </ParallaxLayer>
                {/*granos 2*/}
                <ParallaxLayer
                    offset={0}
                    speed={0.03}
                    /*sticky={{ start: 0, end: 0.05 }}*/
                    class="flex items-center justify-center" >
                    <animated.div
                        style={mover2}
                    >
                        <img src={gIzquierda} class="blur-[3px]" alt="Granos de café" />
                    </animated.div>
                </ParallaxLayer>
                {/*granos3*/}
                <ParallaxLayer
                    offset={0}
                    speed={0.03}
                    /*sticky={{ start: 0, end: 0.3 }}*/
                    class="flex items-start justify-end" >
                    <animated.div
                        style={mover3}
                    >
                        <img src={gFrente} class="blur-[3px]" alt="Granos de café" />
                    </animated.div>
                </ParallaxLayer>
                {/*granos 4*/}
                <ParallaxLayer
                    offset={0}
                    speed={0.03}
                    /*sticky={{ start: 0, end: 0.4 }}*/
                    class="flex items-end " >
                    <animated.div
                        style={mover4}
                    >
                        <img src={gDerecha} class="blur-[3px]" alt="Granos de café" />
                    </animated.div>
                </ParallaxLayer>
                {/*Granos 5 */}
                <ParallaxLayer
                    offset={0}
                    speed={0.03}
                    /*sticky={{ start: 0, end: 0.1 }}*/
                    class="flex items-end justify-end" >
                    <animated.div
                        style={mover5}
                    >
                        <img src={gMedio} class="blur-[3px]" alt="Granos de café" />
                    </animated.div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0.7}
                    speed={0.03}
                    /*sticky={{ start: 0.7, end: 1 }}*/
                    class="flex items-end justify-end" >
                    <animated.div
                        style={mover5}
                    >
                        <img src={gMedio} class="blur-[3px]" alt="Granos de café" />
                    </animated.div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    speed={0.03}
                   /* sticky={{ start: 1, end: 1.6 }}*/
                    class="flex items-center justify-start" >
                    <animated.div
                        style={mover8}
                    >
                        <img src={gIzquierda} class="blur-[3px] w-[100%]" alt="Granos de café" />
                    </animated.div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1.5}
                    speed={0.05}
                    /*sticky={{ start: 1.5, end: 2 }}*/
                    class="flex items-center justify-end pr-[10rem]">
                     <animated.div
                        style={mover1}
                    >
                        <img src={gArriba} class="blur-[2px]" alt="Granos de café" />
                    </animated.div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1.8}
                    speed={0.03}
                    /*sticky={{ start: 1.8, end: 2.5 }}*/
                    class="flex items-center justify-start pl-[25rem]" >
                    <animated.div
                        style={mover3}
                    >
                        <img src={gFrente} class="blur-[3px]" alt="Granos de café" />
                    </animated.div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2.6}
                    speed={0.03}
                    /*sticky={{ start: 2.6, end: 3 }}*/
                    class="flex items-center justify-end">
                    <animated.div
                        style={mover2}
                    >
                        <img src={gIzquierda} class="blur-[3px]" alt="Granos de café" />
                    </animated.div>
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

                /*Granos 6 
                <ParallaxLayer
                offset={3}
                speed={0.05}
                sticky={{ start: 3, end: 4 }}
                class="flex items-center justify-start">
                <animated.div
                    style={mover6}
                >
                    <img src={gDerecha} class="blur-[3px]" alt="Granos de café" />
                </animated.div>
            </ParallaxLayer>
            Granos 7 
            <ParallaxLayer
                offset={3.5}
                speed={0.03}
                sticky={{ start: 3.5, end: 4.5 }}
                class="flex items-center justify-end" >
                <animated.div
                    style={mover7}
                >
                    <img src={gFrente} class="blur-[3px]" alt="Granos de café" />
                </animated.div>
            </ParallaxLayer> */