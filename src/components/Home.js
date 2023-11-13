import { useNavigate } from "react-router-dom";
import CoffeeC from "../images/CoffeeC.png";
import HBlancaSR from "../images/HBlancaSR.png";
import HBlancaRR from "../images/HBlancaRR.png";
import HBlancaSL from "../images/HBlancaSL.png";
import HBlancaRL from "../images/HBlancaRL.png";
import logoO from "../images/logoO.PNG";

export function Home() {
    const navigate = useNavigate()
    return (
        <section class="h-[100vh] w-full bg-gradient-to-b from-[#FFEFCD] to-[#EDBE86] pb-10 lg:flex flex-row justify-center pt-[8rem]">
            <div>
                <img src={HBlancaRR} class=" absolute top-0 left-0 rotate-90 translate-y-[-1.5rem] w-[23%] sm:w-[16%] md:w-[20%] lg:w-[12%] z-[1]"></img>
            </div>
            <div>
                <img src={HBlancaSR} class=" absolute bottom-0 left-0 translate-x-[-1rem] md:w-[20%] w-[23%] sm:w-[16%] lg:w-[12%] z-[1000]"></img>
            </div>
            <div>
                <img src={HBlancaSL} class=" absolute top-0 right-0 -rotate-90 translate-y-[-1rem] w-[23%] sm:w-[16%] md:w-[20%] lg:w-[12%] z-[1000]"></img>
            </div>
            <div>
                <img src={HBlancaRL} class=" absolute bottom-0 right-0 translate-x-[1rem] md:w-[20%] w-[23%] sm:w-[16%] lg:w-[12%] z-[1000]"></img>
            </div>
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
                    <button onClick={() => navigate('/Talleres')} class="shadow-lg bg-[#424530] cursor-pointer p-1 pl-[1.5rem] pr-[1.5rem] font-semibold rounded-xl text-[#FFEFCD] m-1 z-[1000] text-lg sm:text-xl mt-2">Talleres</button>
                </div>
            </div>

            <div class="hidden lg:flex w-[40%] 2xl:w-[50%]">
                <div class="h-[50vh] flex fex-col items-end justify-center bg-gradient-to-b from-[#e2cdaa] to-[#d8ba91] rounded-full shadow-[6px_12px_30px_19px_rgba(0,0,0,0.12)] hover:shadow-[6px_12px_65px_41px_rgba(0,0,0,0.12)] duration-700">
                    <img src={CoffeeC} class="lg:max-w-[80%]" />
                </div>
            </div>

        </section>
    )
}