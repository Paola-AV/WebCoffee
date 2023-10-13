import Paquete from '../images/Paquete.png'

export function Productos() {
    return (
        <section class="grid pt-[10rem]  bg-[#FFEFCD]">
            <div class="w-[90%] flex flex-row justify-end pt-4">
                <h1 class="text-4xl text-[#424530] font-lucida pb-2 mr-1 font-bold sm:text-5xl 2xl:text-6xl">Nuestros Productos</h1>
            </div>

            <div class="justify-self-center w-[60%]">

                <div class="bg-[#E09132] rounded-full w-[15rem] h-[15rem] mb-[5rem] 2xl:w-[19rem] h-[19rem]">
                    <div class="flex flex-row absolute items-center">
                        <img class="w-[10.5rem] h-auto translate-x-[2.5rem] drop-shadow-xl 2xl:w-[13rem]" src={Paquete} />
                        <div class="bg-[#FFEFCD] h-[7rem] w-[50%] flex flex-col justify-center items-start rounded-r-full shadow-lg 2xl:h-[8rem]">
                            <p class="bg-[#424530] pl-10 w-[90%] pr-5 rounded-r-full text-[#E09132] font-semibold font-lucida"> Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                        </div>
                    </div>

                </div>

                
                <div class="bg-[#E09132] rounded-full w-[15rem] h-[15rem] mb-[5rem] 2xl:w-[19rem] h-[19rem]">
                    <div class="flex flex-row absolute items-center">
                        <img class="w-[10.5rem] h-auto translate-x-[2.5rem] drop-shadow-xl 2xl:w-[13rem]" src={Paquete} />
                        <div class=" bg-[#424530] h-[7rem] w-[50%] flex flex-col justify-center items-start rounded-r-full shadow-lg 2xl:h-[8rem]">
                            <p class="bg-[#FFEFCD] pl-10 w-[90%] pr-5 rounded-r-full text-[#E09132] font-semibold font-lucida"> Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                        </div>
                    </div>

                </div>

                
                <div class="bg-[#E09132] rounded-full w-[15rem] h-[15rem] mb-[5rem] 2xl:w-[19rem] h-[19rem]">
                    <div class="flex flex-row absolute items-center">
                        <img class="w-[10.5rem] h-auto translate-x-[2.5rem] drop-shadow-xl 2xl:w-[13rem]" src={Paquete} />
                        <div class="bg-[#FFEFCD] h-[7rem] w-[50%] flex flex-col justify-center items-start rounded-r-full shadow-lg 2xl:h-[8rem]">
                            <p class="bg-[#424530] pl-10 w-[90%] pr-5 rounded-r-full text-[#E09132] font-semibold font-lucida"> Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}