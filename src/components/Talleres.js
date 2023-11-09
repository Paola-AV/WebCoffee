import TallerT from '../images/TallerT.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Nav } from './Nav';
import { Footer } from "./components/Footer";

export function Talleres() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <><Nav></Nav>
            <section class="grid pt-[10rem]  bg-[#FFEFCD] flex flex-col items-center bg-gradient-to-b from-[#FFEFCD] to-[#EDBE86]">
                <div class="w-[90%] flex flex-row justify-end pt-4">
                    <h1 class="text-4xl text-[#424530] font-lucida font-bold pb-2 mr-1 sm:text-5xl 2xl:text-6xl">Nuestros Talleres</h1>
                </div>

                <div class="justify-self-center w-[60%] lg:mt-[5rem] lg:ml-[15rem] 2xl:w-[70%]">

                    <div class=" lg:bg-[#E09132] lg:rounded-full lg:w-[20rem] h-[20rem] mb-[10rem] grid items-center 2xl:w-[25rem] 2xl:h-[25rem]">
                        <div class="lg:bg-[#424530] lg:w-[45%] lg:absolute lg:left-[20rem] lg:h-[30%] grid grid-cols-2 lg:grid-cols-1 justify-around lg:left-[25rem] xl:left-[30rem] h-[20%] 2xl:h-[20%] 2xl:w-[35%] 2xl:left-[30rem]">
                            <img src={TallerT} class="w-[10rem] h-auto lg:absolute self-center ml-[3rem] lg:max-xl:ml-[1rem] xl:ml-[2rem] xl:max-2xl:w-[11.5rem] 2xl:w-[12rem]"></img>
                            <div class="flex flex-col bg-[#FFEFCD] font-lucida rounded-lg shadow-xl w-[100%] lg:w-[40%] lg:absolute justify-self-end self-center mr-[3rem] p-4  xl:w-[45%] mr-[2rem] 2xl:w-[40%]">
                                <h1 class="text-2xl font-bold lg:max-xl:text-xl">Lorem ipsum</h1>
                                <p class="text-xl lg:max-xl:text-base">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                            </div>
                        </div>
                    </div>

                    <div class="lg:bg-[#424530] lg:rounded-full lg:w-[20rem] h-[20rem] mb-[10rem] grid items-center 2xl:w-[25rem] 2xl:h-[25rem]">
                        <div class="lg:bg-[#FFEFCD] lg:w-[45%] lg:absolute lg:left-[20rem] lg:h-[30%] grid grid-cols-2 lg:grid-cols-1 justify-around lg:left-[25rem] xl:left-[30rem] h-[20%] 2xl:h-[20%] 2xl:w-[35%] 2xl:left-[30rem]">
                            <img src={TallerT} class="w-[10rem] h-auto lg:absolute self-center ml-[3rem] lg:max-xl:ml-[1rem] xl:ml-[2rem] xl:max-2xl:w-[11.5rem] 2xl:w-[12rem]"></img>
                            <div class="flex flex-col bg-[#E09132] font-lucida rounded-lg shadow-xl w-[100%] lg:w-[40%] lg:absolute justify-self-end self-center mr-[3rem] p-4 xl:w-[45%] mr-[2rem] 2xl:w-[40%]">
                                <h1 class="text-2xl font-bold lg:max-xl:text-xl">Lorem ipsum</h1>
                                <p class="text-xl lg:max-xl:text-base">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                            </div>
                        </div>
                    </div>

                    <div class="lg:bg-[#E09132] lg:rounded-full lg:w-[20rem] h-[20rem] pb-[5rem] grid items-center 2xl:w-[25rem] 2xl:h-[25rem]">
                        <div class="lg:bg-[#424530] lg:w-[45%] lg:absolute lg:left-[20rem] lg:h-[30%] grid grid-cols-2 lg:grid-cols-1 justify-around lg:left-[25rem] xl:left-[30rem] h-[20%] 2xl:h-[20%] 2xl:w-[35%] 2xl:left-[30rem]">
                            <img src={TallerT} class="w-[10rem] h-auto lg:absolute self-center ml-[3rem] lg:max-xl:ml-[1rem] xl:ml-[2rem] xl:max-2xl:w-[11.5rem] 2xl:w-[12rem]"></img>
                            <div class="flex flex-col bg-[#FFEFCD] font-lucida rounded-lg shadow-xl w-[100%] lg:w-[40%] lg:absolute justify-self-end self-center mr-[3rem] p-4 xl:w-[45%] mr-[2rem] 2xl:w-[40%]">
                                <h1 class="text-2xl font-bold lg:max-xl:text-xl">Lorem ipsum</h1>
                                <p class="text-xl lg:max-xl:text-base">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section><Footer></Footer></>
    )
}