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
import { useNavigate } from "react-router-dom";
import CoffeeC from "../images/CoffeeC.png";
import { Granos } from "./Granos";
import { Granos2 } from "./Granos2";
import { Granos3 } from "./Granos3";
import { Granos4 } from "./Granos4";
import { Granos5 } from "./Granos5";
import { Granos6 } from "./Granos6";
import { Granos7 } from "./Granos7";
import HBlancaSR from "../images/HBlancaSR.png";
import HBlancaRL from "../images/HBlancaRL.png";
import HVerdeSR from "../images/HVerdeSR.png";
import HVerdeRL from "../images/HVerseRL.png";
import HVerdeRR from "../images/HVerdeRR.png";
import HVerdeSL from "../images/HVerdeSL.png";
import HNaranjaSR from "../images/HNaranjaSR.png";
import HNaranjaRL from "../images/HNaranjaRL.png";
import HNaranjaSL from "../images/HNaranjaSL.png";
import HNaranjaRR from "../images/HNaranjaRR.png";
import gArriba from "../images/gArriba.png";
import gIzquierda from "../images/gIzquierda.png";
import gFrente from "../images/gFrente.png";
import gDerecha from "../images/gDerecha.png";
import gMedio from "../images/gMedio.png";
import { useSpring, useScroll, easings, config, animated } from '@react-spring/web';
import slide_image_1 from '../images/slide1.jpg';
import slide_image_2 from '../images/slide2.jpg';
import slide_image_3 from '../images/slide3.jpg';
import Flecha from "../images/Flecha.png";
import logoO from "../images/logoO.PNG"; 
import { useEffect, useState } from "react";

export function Inicio() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const navigate = useNavigate()
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
            opacity: 0,
            transform: 'translate3d(0px,0px,0px)',
            width: '1%'
        },
        config: { tension: 20, friction: 6 },
        transform: 'translate3d(-80px,80px,0px)',
        opacity: 1,
        width: '5%'
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

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isImageVisible, setIsImageVisible] = useState(true);

    const imagen = [
        slide_image_1,
        slide_image_2,
        slide_image_3,
        // ...agrega más rutas de imágenes según sea necesario
    ];
    const prevImage = () => {
        setIsImageVisible(false); // Ocultar la imagen actual
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? imagen.length - 1 : prevIndex - 1));
    };

    const nextImage = () => {
        setIsImageVisible(false); // Ocultar la imagen actual
        setCurrentImageIndex((prevIndex) => (prevIndex === imagen.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsImageVisible(true); // Mostrar la nueva imagen después de la transición
        }, 500); // Ajusta el tiempo según la duración de la transición en milisegundos
        return () => clearTimeout(timeoutId);
    }, [currentImageIndex]);
    const imageElements = imagen.map((img, index) => (
        <img
            key={index}
            className={`w-[70%] transition-opacity duration-500 ease-in-out shadow-[10px_10px_34px_8px_rgba(0,0,0,0.2)] rounded-xl ${isImageVisible ? 'opacity-100' : 'opacity-0'}`}
            src={img}
            alt={`Image ${index}`}
        />
    ));
    return (
        <>
            <Parallax pages={3.24} class="bg-[#EDBE86]">
                <ParallaxLayer
                    offset={0}
                    speed={0.7}
                    factor={0.5}
                    sticky={{ start: 0, end: 3 }}
                    style={{ height: "auto" }}>
                    <Nav class="z-[1000]"></Nav>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={0}
                    speed={0.7}
                    factor={1}
                    style={{ height: "auto" }}
                    class="" >
                    <Home></Home>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0.4}
                    speed={0.7}
                    factor={0.5}>
                    <div>
                        <img src={HBlancaRL} class=" absolute bottom-0 right-0 translate-x-[1rem] w-[23%] sm:w-[16%] md:w-[20%] lg:w-[12%] z-[1000]"></img>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={0.4}
                    speed={0.7}
                    factor={0.5}>
                    <div>
                        <img src={HBlancaSR} class=" absolute bottom-0 left-0 translate-x-[-1rem] w-[23%] sm:w-[16%] md:w-[20%] lg:w-[12%] z-[1000]"></img>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={0}
                    speed={0.7}
                    factor={1}
                    style={{ height: "auto" }}
                    class="z-[1000] bg-transparent">
                    <section class="h-[100vh] w-full bg-transparent pb-10 lg:flex flex-row justify-center pt-[8rem]">

                        <div class="w-full flex flex-col items-center md:hidden">
                            <img src={logoO} class="w-[30%]"></img>
                        </div>

                        <div class="w-full flex flex-col justify-center items-center pt-4 lg:w-[40%] justify-start 2xl:w-[40%] items-end lg:ml-[15%] 2xl:h-[60%]">
                            <div class="w-2/3 font-lucida mt-10 sm:w-[85%] lg:mt-1 flex flex-col justify-start">
                                <h1 class="text-shadow-lg text-3xl text-[#424530] pb-4 font-bold sm:text-4xl pt-5">STAY CAFFEINATED</h1>
                                <p class="font-[450] text-[#424530] sm:text-xl" >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
                            </div>
                            <div class="w-2/3 flex flex-col items-start font-lucida mt-7 sm:w-[85%]">
                                <button onClick={() => navigate('/Contacto')} class="shadow-lg bg-[#E09132] cursor-pointer p-1 font-semibold rounded-xl text-[#FFEFCD] m-1 text-lg sm:text-xl z-[1000]">Contactanos</button>
                                <button onClick={() => navigate('/Talleres')} class="shadow-lg bg-[#424530] cursor-pointer p-1 pl-[1.6rem] pr-[1.6rem] font-semibold rounded-xl text-[#FFEFCD] m-1 z-[1000] text-lg sm:text-xl mt-2">Talleres</button>
                            </div>
                        </div>

                        <div class="hidden lg:flex w-[40%] 2xl:w-[50%]">
                            <div class="h-[50vh] flex fex-col items-end justify-center bg-transparent rounded-full hover:shadow-[6px_12px_65px_41px_rgba(0,0,0,0.12)] duration-700">
                                <img src={CoffeeC} class="lg:max-w-[80%]" />
                            </div>
                        </div>

                    </section>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0.99}
                    speed={0.7}
                    style={{ height: "auto" }}>
                    <Historia></Historia>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={0.9999}
                    speed={0.7}
                    factor={0.7}>
                    <div>
                        <img src={HVerdeSR} class=" absolute  left-0 translate-x-[-1rem] translate-y-[-2rem] md:translate-y-[12rem]  lg:translate-y-[6rem] rotate-90 w-[23%] sm:w-[16%] md:w-[20%] lg:w-[12%] z-[1000]"></img>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={1}
                    speed={0.7}
                    factor={0.5}>
                    <div>
                        <img src={HVerdeRL} class=" absolute right-0 translate-x-[1rem] translate-y-[-6rem] -rotate-6 w-[23%] sm:w-[16%] md:w-[20%] lg:w-[12%] z-[1000]"></img>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1.2}
                    speed={0.7}
                    style={{ height: "auto" }}>
                    
                </ParallaxLayer>


                <ParallaxLayer
                    offset={1.2}
                    speed={0.7}
                    style={{ height: "auto" }}
                    class="z-[1000] bg-transparent">
                    <section class="w-full bg-transparent pb-[0rem] mb-0 lg:pb-[10rem] grid lg:pt-[10rem]">
                        <div class="w-2/3 justify-self-center sm:w-[85%] lg:ml-[10rem] 2xl:w-[70%]">
                            <h1 class="text-4xl text-[#424530] font-lucida font-bold pb-2 sm: text-5xl">Galeria</h1>
                        </div>
                        <div class="w-[85%] justify-self-center 2xl:w-[50%]">
                            <div className="flex flex-row">
                                <div class="flex flex-col justify-center">
                                    <button onClick={prevImage} class="flex flex-col items-center"><img src={Flecha} className='w-[30%] drop-shadow-2xl h-auto'></img></button>
                                </div>
                                {imageElements[currentImageIndex]}
                                <div class="flex flex-col justify-center">
                                    <button onClick={nextImage} class="flex flex-col items-center"> <img src={Flecha} className='w-[30%] drop-shadow-2xl h-auto rotate-[180deg]'></img></button>
                                </div>

                            </div>
                        </div>
                    </section>
                </ParallaxLayer>


                <ParallaxLayer
                    offset={1.2}
                    speed={0.7}
                    factor={0.7}>
                    <div>
                        <img src={HVerdeRR} class="absolute rotate-[50deg] left-0 translate-x-[-1rem] translate-y-[-6rem] sm:translate-y-[-8rem] md:translate-y-[-12rem] lg:translate-y-[-1rem] md:translate-y-[12rem] lg:flex lg:translate-y-[6rem] rotate-90 w-[23%] sm:w-[16%] md:w-[20%] lg:w-[12%] z-[1]"></img>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={1.5}
                    speed={0.7}
                    factor={1}>
                    <div>
                        <img src={HVerdeSL} class=" absolute right-0 translate-x-[1rem] rotate-[-30deg] translate-y-[11rem] w-[23%] sm:w-[16%] md:w-[20%] lg:w-[12%] z-[1000]"></img>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={1.999}
                    speed={0.7}
                    style={{ height: "auto" }}>
                    <Menu></Menu>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={1.999}
                    speed={0.7}
                    factor={0.7}>
                    <div>
                        <img src={HNaranjaSR} class="absolute left-0 translate-x-[-0.5rem] translate-y-[-5rem] sm:translate-y-[-7rem] md:translate-y-[5rem] lg:translate-y-[-1rem] md:translate-y-[12rem] lg:flex lg:translate-y-[6rem] rotate-90 w-[23%] sm:w-[16%] md:w-[20%] lg:w-[12%] z-[1]"></img>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={2}
                    speed={0.7}
                    factor={1}>
                    <div>
                        <img src={HNaranjaRL} class=" absolute rotate-[-10deg] right-0 translate-x-[1rem] translate-y-[-8.5rem] w-[23%] sm:w-[16%] md:w-[20%] lg:w-[12%] z-[1000]"></img>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={2.2}
                    speed={0.7}
                    style={{ height: "auto" }}>
                    <Contacto></Contacto>
                    <Footer></Footer>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2.3}
                    speed={0.7}
                    factor={0.7}>
                    <div>
                        <img src={HNaranjaRR} class="absolute left-0 translate-x-[-0.5rem] translate-y-[2.5rem] sm:translate-y-[-2rem] md:translate-y-[-2.5rem] lg:translate-y-[-3rem] w-[23%] sm:w-[16%] md:w-[13%] lg:w-[12%] z-[1]"></img>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={2.9}
                    speed={0.7}
                    factor={1}>
                    <div>
                        <img src={HNaranjaSL} class=" absolute rotate-[-30deg] right-0 translate-x-[1rem] translate-y-[-11rem] w-[23%] sm:w-[16%] md:w-[20%] lg:w-[12%] z-[1000]"></img>
                    </div>
                </ParallaxLayer>

                {/*granos 1*/}
                <ParallaxLayer
                    offset={0}
                    speed={0.05}
                    class="hidden lg:flex">
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
                    class="hidden lg:flex items-center justify-center" >
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
                    class="hidden lg:flex items-start justify-end" >
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
                    class="hidden lg:flex items-end" >
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
                    class="hidden lg:flex items-end justify-end" >
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
                    class="hidden lg:flex items-end justify-end" >
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
                    class="hidden lg:flex items-center justify-start" >
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
                    class="hidden lg:flex items-center justify-end pr-[10rem]">
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
                    class="hidden lg:flex items-center justify-start pl-[25rem]" >
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
                    class="hidden lg:flex items-center justify-end">
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