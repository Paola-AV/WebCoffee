import { useNavigate } from "react-router-dom";

export function Home() {
    const navigate = useNavigate()
    return (
        <section class="w-full bg-[#FFEFCD] pb-10">

            <div class="w-full flex flex-col justify-center items-center pt-4">
                <div class="w-2/3 font-lucida mt-10 sm:w-[85%]">
                    <h1 class="text-shadow-lg text-3xl text-[#424530] pb-4 font-bold sm:text-4xl pt-5">STAY CAFFEINATED</h1>
                    <p class="font-[450] text-[#424530] sm:text-xl" >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
                </div>
                <div class="w-2/3 flex flex-col items-start font-lucida mt-7 sm:w-[85%]">
                    <button onClick={() => navigate('/Contacto')} class="shadow-lg bg-[#E09132] p-1 font-semibold rounded-xl text-[#FFEFCD] m-1 text-lg sm:text-xl">Contactanos</button>
                    <button class="shadow-lg bg-[#424530] p-1 font-semibold rounded-xl text-[#FFEFCD] m-1 text-lg sm:text-xl mt-2">Talleres</button>
                </div>
            </div>

            <div></div>

        </section>
    )
}