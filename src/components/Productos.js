import Paquete from '../images/Paquete.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';
import { Nav } from './Nav';

export function Productos() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <><Nav></Nav><section class="grid pt-[10rem] bg-gradient-to-b from-[#FFEFCD] to-[#EDBE86]">
            <div class="w-[90%] flex flex-row justify-end pt-4 mb-[5rem]">
                <h1 class="text-4xl text-[#424530] font-lucida pb-2 mr-1 font-bold sm:text-5xl 2xl:text-6xl">Nuestros Productos</h1>
            </div>

            <div class="justify-self-center w-[90%] md:w-[60%] xl:w-[50%]">

                <div class="bg-transparent md:bg-[#E09132] rounded-full w-[15rem] h-[15rem] mb-[5rem] lg:w-[15rem] h-[15rem] xl:w-[15rem] h-[15rem] 2xl:h-[19rem] 2xl:w-[19rem]">
                    <div data-aos="fade-up" class="flex flex-row absolute items-center">
                        <img class="translate-x-[2.5rem] w-[10.5rem] h-auto drop-shadow-xl 2xl:w-[13rem]" src={Paquete} />
                        <div data-aos="fade-right" class="bg-transparent h-[7rem] w-[50%] flex flex-col justify-center items-start rounded-r-full lg:hadow-lg lg:lg:bg-[#FFEFCD]  lg:max-xl:h-[10rem] 2xl:h-[8rem]">
                            <p class="bg-[#424530] rounded-lg pl-10 w-[90%] pb-1 pr-5 text-[#E09132] font-semibold font-lucida sm:rounded-r-full sm:max-md:h-[10rem] pt-5 lg:max-xl:h-[70%] lg:max-xl:pt-1"> Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                        </div>
                    </div>

                </div>


                <div class="bg-transparent md:bg-[#E09132] rounded-full w-[15rem] h-[15rem] mb-[5rem] lg:w-[15rem] h-[15rem] xl:w-[15rem] h-[15rem] 2xl:h-[19rem] 2xl:w-[19rem]">
                    <div data-aos="fade-up" class="flex flex-row absolute items-center">
                        <img class="w-[10.5rem] h-auto translate-x-[2.5rem] drop-shadow-xl 2xl:w-[13rem]" src={Paquete} />
                        <div data-aos="fade-right" class="bg-transparent h-[7rem] w-[50%] flex flex-col justify-center items-start rounded-r-full lg:shadow-lg lg:bg-[#424530] lg:max-xl:h-[10rem] 2xl:h-[8rem]">
                            <p class="bg-[#FFEFCD] rounded-lg pl-10 w-[90%] pb-1 pr-5 text-[#E09132] font-semibold font-lucida sm:rounded-r-full sm:max-md:h-[10rem] pt-5 lg:max-xl:h-[70%] lg:max-xl:pt-1"> Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                        </div>
                    </div>

                </div>


                <div class="bg-transparent md:bg-[#E09132] rounded-full w-[15rem] h-[15rem] mb-[5rem] lg:w-[15rem] h-[15rem] xl:w-[15rem] h-[15rem] 2xl:h-[19rem] 2xl:w-[19rem]">
                    <div data-aos="fade-up" class="flex flex-row absolute items-center">
                        <img class="w-[10.5rem] h-auto translate-x-[2.5rem] drop-shadow-xl 2xl:w-[13rem]" src={Paquete} />
                        <div class="bg-transparent h-[7rem] w-[50%] flex flex-col justify-center items-start rounded-r-full lg:hadow-lg lg:lg:bg-[#FFEFCD]  lg:max-xl:h-[10rem] 2xl:h-[8rem]">
                            <p class="bg-[#424530] rounded-lg pl-10 w-[90%] pb-1 pr-5 text-[#E09132] font-semibold font-lucida sm:rounded-r-full sm:max-md:h-[10rem] pt-5 lg:max-xl:h-[70%] lg:max-xl:pt-1"> Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                        </div>
                    </div>

                </div>

            </div>

        </section></>
    )
}