import airpress from '../images/airpress.png';
import blockDecor from '../images/blockDecor.png';

export function Historia() {
    return (
        <section class="w-full h-[100vh] bg-[#EDBE86] pb-10 sm:pb-20 lg:pt-[13rem]">
            <div class="w-full flex flex-col items-center">
                <div class="w-[85%] shadow-xl bg-[#FEEBC8] p-2 text-center font-lucida rounded-xl lg:text-start xl:w-[75%] 2xl:w-[60%]">
                    <div class="flex flex-row justify-center">
                        <h2 class="font-semibold text-[#424530] pb-1 text-2xl sm:text-3xl lg:text-4xl pt-4 lg:w-1/2">Nuestra Historia</h2>
                        <div class="hidden lg:flex flex-col w-1/2 justify-center items-end">
                            <img class="lg:absolute translate-x-[3rem] translate-y-[1rem] w-[30%] xl:w-[23%] 2xl:translate-y-[2.5rem]" src={blockDecor}/>
                        </div>
                    </div>

                    <div class=" flex flex-row">
                        <div class="hidden lg:grid w-1/2 ">
                            <img class="max-w-[100%] h-auto translate-x-[-3rem] translate-y-[3rem] xl:max-w-[95%]" src={airpress} />
                        </div>
                        <div class="flex flex-col lg:w-1/2 p-3 justify-center">
                            <p class="pt-2 sm:text-lg mt-4">Mich Cedeño Vargas, de Palmares de Alajuela es el fundador y creador de la Marca y Micro - Tostaduria Olikey Coffee Roasters.
                            </p>
                            <p class="pt-2 sm:text-lg mt-2">5 años en el mundo del café de especialidad como Barista y Tostador de cafés especiales.
                            </p>
                            <p class="pt-2 pb-2 sm:text-lg mt-2 pb-4">Fundamos esta Micro - Tostaduria en un momento de dificultad laboral y Tambien soportando los embates de una pandemia.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}