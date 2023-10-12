import Paquete from '../images/Paquete.png'

export function Productos() {
    return (
        <section class="grid">
            <div class="w-[90%] flex flex-row justify-end pt-4">
                <h1 class="text-4xl text-[#424530] font-lucida pb-2 mr-1 sm: text-5xl">Nuestros Productos</h1>
            </div>

            <div class="justify-self-center w-[60%]">

                <div class="bg-[#E09132] rounded-full w-[15rem] h-[15rem]">
                    <div class="flex flex-row absolute items-center">
                        <img class="w-[10rem] h-auto translate-x-[2.5rem]" src={Paquete} />
                        <div class="bg-[#FFEFCD] h-[7rem] w-[50%] flex flex-col justify-center items-start rounded-r-full">
                            <p class="bg-[#424530] pl-10 w-[80%] pr-5 rounded-r-full"> Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}