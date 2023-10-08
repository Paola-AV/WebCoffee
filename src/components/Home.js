import { useNavigate } from "react-router-dom";
import CoffeeC from "../images/CoffeeC.png";

export function Home() {
    const navigate = useNavigate()
    return (
        <section class="w-full bg-[#FFEFCD] pb-10 lg:flex flex-row justify-center pt-[8rem]">

            <div class="w-full flex flex-col justify-center items-center pt-4 lg:w-[40%] justify-start 2xl:w-[40%] items-end ml-[15%]">
                <div class="w-2/3 font-lucida mt-10 sm:w-[85%] lg:mt-1 flex flex-col justify-start">
                    <h1 class="text-shadow-lg text-3xl text-[#424530] pb-4 font-bold sm:text-4xl pt-5">STAY CAFFEINATED</h1>
                    <p class="font-[450] text-[#424530] sm:text-xl" >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
                </div>
                <div class="w-2/3 flex flex-col items-start font-lucida mt-7 sm:w-[85%]">
                    <button onClick={() => navigate('/Contacto')} class="shadow-lg bg-[#E09132] p-1 font-semibold rounded-xl text-[#FFEFCD] m-1 text-lg sm:text-xl">Contactanos</button>
                    <button class="shadow-lg bg-[#424530] p-1 font-semibold rounded-xl text-[#FFEFCD] m-1 text-lg sm:text-xl mt-2">Talleres</button>
                </div>
            </div>

            <div class="hidden lg:flex w-[40%] 2xl:w-[50%]">
                <div class="flex fex-col items-end justify-center bg-[#e2d3b5] rounded-full shadow-[6px_12px_30px_19px_rgba(0,0,0,0.12)] hover:shadow-[6px_12px_65px_41px_rgba(0,0,0,0.12)] duration-700">
                    <img src={CoffeeC} class="lg:max-w-[80%]"/>
                </div>
            </div>

        </section>
    )
}