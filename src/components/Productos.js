import Paquete from '../images/Paquete.png'

export function Productos() {
    return(
        <section >
             <div class="w-[90%] flex flex-row justify-end pt-4">
                <h1 class="text-4xl text-[#424530] font-lucida pb-2 mr-1 sm: text-5xl">Nuestros Productos</h1>
            </div>

            <div class="flex flex-row">
                <div class="flex flex-col">
                    <div class="bg-[#E09132] w-[100%] h-[100%] mb-4 p-1 px-4 rounded-full" id="img">
                        <img class="w-[10rem] h-auto -translate-y-9 z-[1000] " src={Paquete}/>
                    </div>
                    
                </div>
                <div class="flex flex-col justify-center w-[40%] absolute ">
                    <div class="rounded-xl bg-[#FFEFCD] h-[50%] flex flex-col justify-center -translate-x-11 z-4">
                        <p class="bg-[#424530] pl-10"> Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                    </div>
                </div>
            </div>

        </section>
    )
}