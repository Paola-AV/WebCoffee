import TallerT from '../images/TallerT.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';

export function Talleres() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <section class="grid pt-[10rem]  bg-[#FFEFCD] flex flex-col items-center bg-gradient-to-b from-[#FFEFCD] to-[#EDBE86]">
            <div class="w-[90%] flex flex-row justify-end pt-4">
                <h1 class="text-4xl text-[#424530] font-lucida font-bold pb-2 mr-1 sm:text-5xl 2xl:text-6xl">Nuestros Talleres</h1>
            </div>

            <div class="justify-self-center w-[60%] mt-[5rem] ml-[15rem] 2xl:w-[70%]">

                <div class="bg-[#E09132] rounded-full w-[20rem] h-[20rem] mb-[10rem] grid items-center 2xl:w-[25rem] 2xl:h-[25rem]">
                    <div class="bg-[#424530] w-[45%] absolute left-[20rem] h-[30%] grid grid-cols-1 justify-around lg:max-xl:left-[17rem] h-[25%] 2xl:h-[20%] 2xl:w-[35%] left-[30rem]">
                        <img src={TallerT} class="w-[10rem] h-auto absolute self-center ml-[3rem] lg:max-xl:ml-[1rem] xl:ml-[2rem] xl:max-2xl:w-[11.5rem] 2xl:w-[12rem]"></img>
                        <div class="flex flex-col bg-[#FFEFCD] font-lucida rounded-lg shadow-xl w-[40%] absolute justify-self-end self-center mr-[3rem] p-4 xl:w-[45%] mr-[2rem] 2xl:w-[40%]">
                            <h1 class="text-2xl font-bold lg:max-xl:text-xl">Lorem ipsum</h1>
                            <p class="text-xl lg:max-xl:text-base">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                        </div>
                    </div>
                </div>

                <div class="bg-[#424530] rounded-full w-[20rem] h-[20rem] mb-[10rem] grid items-center 2xl:w-[25rem] 2xl:h-[25rem]">
                    <div class=" bg-[#FFEFCD] w-[45%] absolute left-[20rem] h-[30%] grid grid-cols-1 justify-around lg:max-xl:left-[17rem] h-[25%] 2xl:h-[20%] 2xl:w-[35%] left-[30rem]">
                        <img src={TallerT} class="w-[10rem] h-auto absolute self-center ml-[3rem] lg:max-xl:ml-[1rem] xl:ml-[2rem] xl:max-2xl:w-[11.5rem] 2xl:w-[12rem]"></img>
                        <div class="flex flex-col bg-[#E09132] font-lucida rounded-lg shadow-xl w-[40%] absolute justify-self-end self-center mr-[3rem] p-4 xl:w-[45%] mr-[2rem] 2xl:w-[40%]">
                            <h1 class="text-2xl font-bold lg:max-xl:text-xl">Lorem ipsum</h1>
                            <p class="text-xl lg:max-xl:text-base">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                        </div>
                    </div>
                </div>

                <div class="bg-[#E09132] rounded-full w-[20rem] h-[20rem] mb-[5rem] grid items-center 2xl:w-[25rem] 2xl:h-[25rem]">
                    <div class="bg-[#424530] w-[45%] absolute left-[20rem] h-[30%] grid grid-cols-1 justify-around lg:max-xl:left-[17rem] h-[25%] 2xl:h-[20%] 2xl:w-[35%] left-[30rem]">
                        <img src={TallerT} class="w-[10rem] h-auto absolute self-center ml-[3rem] lg:max-xl:ml-[1rem] xl:ml-[2rem] xl:max-2xl:w-[11.5rem] 2xl:w-[12rem]"></img>
                        <div class="flex flex-col bg-[#FFEFCD] font-lucida rounded-lg shadow-xl w-[40%] absolute justify-self-end self-center mr-[3rem] p-4 xl:w-[45%] mr-[2rem] 2xl:w-[40%]">
                            <h1 class="text-2xl font-bold lg:max-xl:text-xl">Lorem ipsum</h1>
                            <p class="text-xl lg:max-xl:text-base">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}