import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Nbarista from '../images/Nbarista.png';
import NchemexPouring from '../images/NchemexPouring.png';
import NgranosTostadora from '../images/NgranosTostadora.png';
import NtoastGaleria from '../images/NtoastGaleria.png';
import Nchemex from '../images/Nchemex.png';
import { Nav } from './Nav';

export function HistoriaSc() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <><Nav></Nav>
        <section class="w-full bg-[#f0bc84] pb-10 grid ">
            <div class="w-[90%] flex flex-row justify-end pt-[7rem]">
                <h1 class="text-4xl text-[#424530] font-lucida pb-2 mr-1 sm: text-5xl">Nuestra</h1>
                <h1 class="text-4xl text-[#636845] font-lucida pb-2 ml-1 sm: text-5xl">Historia</h1>
            </div>

            <div class="flex flex-col justify-center items-center justify-self-center font-lucida mt-10 p-3 mb-10 lg:flex-row xl:w-[80%]">
                <div class="flex flex-col items-center lg: z-[1000]">
                    <img src={Nbarista} class="w-[60%] mb-[2rem] lg:w-auto lg:mb-0 rounded-full border-8 border-[#424530]" />
                </div>
                <div data-aos="fade-up" class="w-[85%] flex flex-col justify-center items-center">
                    <div class="bg-[#FFEFCD] shadow-xl w-full p-2 rounded-xl lg:rounded-none lg:rounded-br-[4rem] lg:pl-[5rem] lg:translate-x-[-4rem]">
                        <h2 class="font-semibold">Lorem Ipsum</h2>
                        <p >
                            Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                        </p>
                    </div>
                </div>

            </div>

            <div class="flex flex-col justify-center items-center font-lucida mt-10 p-3 mb-10 justify-self-center lg:flex-row xl:w-[80%]">

                <div data-aos="fade-up" class="w-[85%] flex flex-col justify-center">
                    <div class="bg-[#FFEFCD] shadow-xl w-full p-2 rounded-xl lg:rounded-none lg:rounded-tl-[4rem] lg:pr-[3rem] lg:translate-x-[2rem]">
                        <h2 class="font-semibold pt-4 pl-1">Lorem Ipsum</h2>
                        <p >
                            Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                        </p>
                    </div>
                </div>

                <div class="flex flex-col items-center lg:flex z-[1000]">
                    <img src={NgranosTostadora} class="w-[90%] mb-[2rem] mt-[2rem] lg:mt-0 lg:w-[100%] lg:mb-0 rounded-full border-8 border-[#424530]" />
                </div>

            </div>

            <div class="flex flex-col justify-center items-center font-lucida mt-10 p-3 mb-10 justify-self-center lg:flex-row xl:w-[80%]">
                <div data-aos="fade-up" class="w-[85%] flex flex-col justify-center">
                    <div class="bg-[#FFEFCD] shadow-xl w-full rounded-xl lg:rounded-none lg:rounded-bl-[4rem] lg:pr-[10rem] lg:pl-1">
                        <h2 class="font-semibold pt-4 pl-[1rem]">Lorem Ipsum</h2>
                        <p class="pb-[1rem] pl-[1rem]">
                            Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                        </p>
                    </div>
                </div>
                
                <div class="flex flex-col mt-[2rem] items-center lg:mt-0 lg:grid z-[1000]">
                    <img src={NchemexPouring}  class="w-[90%] mb-[2rem] lg:mb-0 rounded-full border-8 border-[#424530] justify-self-center lg:w-[17rem] lg:absolute self-center lg:translate-x-[-2rem]" />
                </div>

                <div data-aos="fade-up" class="w-[85%] flex flex-col justify-center">
                    <div class="bg-[#FFEFCD] shadow-xl w-full p-2 rounded-xl lg:rounded-none lg:rounded-tr-[4rem] lg:pl-[10rem] lg:translate-x-[-2rem]">
                        <h2 class="font-semibold pt-4 pl-1">Lorem Ipsum</h2>
                        <p >
                            Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. 
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex flex-col justify-center items-center font-lucida mt-10 p-3 mb-10 justify-self-center lg:flex-row xl:w-[80%]">
                <div class="flex flex-col items-center lg:flex z-[1000]">
                    <img src={NtoastGaleria} class="w-[60%] mb-[2rem] lg:w-[80%] lg:mb-0 rounded-full border-8 border-[#424530]" />
                </div>
                <div data-aos="fade-up" class="w-[85%] flex flex-col justify-center">
                    <div class="bg-[#FFEFCD] shadow-xl w-full p-2 rounded-xl lg:rounded-none lg:rounded-br-[4rem] lg:pl-[5rem] lg:translate-x-[-4.5rem]">
                        <h2 class="font-semibold">Lorem Ipsum</h2>
                        <p >
                            Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                        </p>
                    </div>
                </div>

            </div>

            <div class="flex flex-col-reverse justify-center items-center font-lucida mt-10 p-3 mb-10 justify-self-center lg:flex-row xl:w-[80%]">

                <div data-aos="fade-up" class="w-[85%] flex flex-col justify-center">
                    <div class="bg-[#FFEFCD] shadow-xl w-full p-2 rounded-xl lg:rounded-none lg:rounded-tl-[4rem] lg:pr-[3rem] lg:translate-x-[5.5rem]">
                        <h2 class="font-semibold pt-4 pl-1">Lorem Ipsum</h2>
                        <p >
                            Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                        </p>
                    </div>
                </div>

                <div class="flex flex-col mt-[2rem] items-center lg:mt-0 lg:flex z-[1000]">
                    <img src={Nchemex} class="w-[55%] mb-[2rem] lg:w-[75%] lg:mb-0 rounded-full border-8 border-[#424530]" />
                </div>

            </div>

        </section></>
    )
}