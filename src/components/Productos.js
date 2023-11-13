import Paquete from '../images/Paquete.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Nav } from './Nav';
import logoO from "../images/logoO.PNG";
import HNaranjaSR from "../images/HNaranjaSR.png";
import HNaranjaRL from "../images/HNaranjaRL.png";
import HNaranjaSL from "../images/HNaranjaSL.png";
import HNaranjaRR from "../images/HNaranjaRR.png";
import { Footer } from './Footer';

export function Productos() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <><Nav></Nav><section class="grid pt-[6rem] lg:pt-[10rem] bg-gradient-to-b from-[#FFEFCD] to-[#EDBE86]">
            <div>
                <img src={HNaranjaSR} class=" absolute top-0 left-0 rotate-90 translate-y-[-1.5rem] w-[23%] sm:w-[16%] md:w-[20%] lg:w-[12%] z-[1]"></img>
            </div>

            <div class="w-full flex flex-col items-center pb-[4rem] lg:hidden">
                <img src={logoO} class="w-[30%] md:w-[20%]"></img>
            </div>
            <div class="relative">
                <img src={HNaranjaRL} class=" absolute object-cover top-0 right-0 rotate-[-80deg] translate-x-[-1.4rem] sm:translate-x-[-2.5rem] md:translate-x-[-3.5rem] translate-y-[-6rem] w-[23%] sm:w-[16%] md:w-[20%] lg:w-[12%] z-[1]"></img>
            </div>

            <div class="w-[90%] flex flex-row z-[100] justify-end pt-4 mb-[5rem]">
                <h1 class="text-3xl z-[100] text-[#424530] font-lucida pb-2 mr-1 font-bold sm:text-5xl 2xl:text-6xl">Nuestros Productos</h1>
            </div>


            <div class="justify-self-center w-[90%] z-[100] md:w-[60%] xl:w-[50%]">

                <div class="bg-transparent z-[100] mb-[7rem] md:bg-[#E09132] rounded-full w-[15rem] h-[15rem] md:mb-[5rem] lg:w-[15rem] h-[15rem] xl:w-[15rem] h-[15rem] 2xl:h-[19rem] 2xl:w-[19rem]">
                    <div data-aos="fade-up" class="flex flex-row absolute items-center">
                        <img class="translate-x-[2.5rem] w-[10.5rem] h-auto drop-shadow-xl 2xl:w-[13rem]" src={Paquete} />
                        <div data-aos="fade-right" class="bg-transparent h-[7rem] w-[50%] flex flex-col justify-center items-start rounded-r-full lg:hadow-lg lg:lg:bg-[#FFEFCD]  lg:max-xl:h-[10rem] 2xl:h-[8rem]">
                            <p class="bg-[#424530] rounded-lg pl-10 w-[90%] pb-1 pr-5 text-[#E09132] font-semibold font-lucida sm:rounded-r-full sm:max-md:h-[10rem] pt-5 lg:max-xl:h-[70%] lg:max-xl:pt-1"> Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                        </div>
                    </div>

                </div>
                <div class="relative">
                    <img src={HNaranjaRR} class=" absolute top-0 left-0  translate-y-[-8rem] translate-x-[-1.4rem] md:translate-x-[-8rem] lg:translate-x-[-12rem] xl:translate-x-[-19rem] w-[23%] sm:w-[16%] md:w-[20%] lg:w-[20%] xl:w-[25%] z-[1]"></img>
                </div>

                <div class="bg-transparent mb-[7rem] z-[1000] md:bg-[#E09132] rounded-full w-[15rem] h-[15rem] md:mb-[5rem] lg:w-[15rem] h-[15rem] xl:w-[15rem] h-[15rem] 2xl:h-[19rem] 2xl:w-[19rem]">
                    <div data-aos="fade-up" class="flex flex-row absolute items-center">
                        <img class="w-[10.5rem] h-auto translate-x-[2.5rem] z-[1000] drop-shadow-xl 2xl:w-[13rem]" src={Paquete} />
                        <div data-aos="fade-right" class="bg-transparent z-[100] h-[7rem] w-[50%] flex flex-col justify-center items-start rounded-r-full lg:shadow-lg lg:bg-[#424530] lg:max-xl:h-[10rem] 2xl:h-[8rem]">
                            <p class="bg-[#FFEFCD] rounded-lg pl-10 w-[90%] pb-1 pr-5 text-[#E09132] font-semibold font-lucida sm:rounded-r-full sm:max-md:h-[10rem] pt-5 lg:max-xl:h-[70%] lg:max-xl:pt-1"> Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                        </div>
                    </div>

                </div>
                <div class="relative">
                    <img src={HNaranjaRL} class=" absolute object-cover top-0 right-0 rotate-[-80deg] translate-x-[-1.4rem] sm:translate-x-[-0.5rem] md:translate-x-[6rem] lg:translate-x-[10rem] xl:translate-x-[17rem] translate-y-[-16rem] w-[23%] sm:w-[16%] md:w-[20%] lg:w-[20%] xl:w-[25%] z-[1]"></img>
                </div>
                <div class="relative">
                    <img src={HNaranjaSR} class=" absolute top-0 left-0 rotate-90 translate-y-[-7rem] translate-x-[-1.4rem] md:translate-x-[-8rem] lg:translate-x-[-12rem] xl:translate-x-[-17rem] xl:translate-y-[3rem] w-[23%] sm:w-[16%] md:w-[20%] lg:w-[20%] xl:w-[25%] z-[1]"></img>
                </div>

                <div class="bg-transparent mb-[7rem] z-[100] md:bg-[#E09132] rounded-full w-[15rem] h-[15rem] md:mb-[5rem] lg:w-[15rem] h-[15rem] xl:w-[15rem] h-[15rem] 2xl:h-[19rem] 2xl:w-[19rem]">
                    <div data-aos="fade-up" class="flex flex-row absolute items-center">
                        <img class="w-[10.5rem] h-auto translate-x-[2.5rem] drop-shadow-xl 2xl:w-[13rem]" src={Paquete} />
                        <div class="bg-transparent h-[7rem] w-[50%] flex flex-col justify-center items-start rounded-r-full lg:hadow-lg lg:lg:bg-[#FFEFCD]  lg:max-xl:h-[10rem] 2xl:h-[8rem]">
                            <p class="bg-[#424530] rounded-lg pl-10 w-[90%] pb-1 pr-5 text-[#E09132] font-semibold font-lucida sm:rounded-r-full sm:max-md:h-[10rem] pt-5 lg:max-xl:h-[70%] lg:max-xl:pt-1"> Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
        <Footer></Footer></>
    )
}