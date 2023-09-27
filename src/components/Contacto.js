import { FaUser } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

export function Contacto() {
    return (
        <section class="w-full bg-[#FFEFCD] pb-10 grid">
            <div class="w-2/3 justify-self-center">
                <h1 class="text-4xl text-[#424530] font-lucida font-bold pb-2">Contacto</h1>
            </div>

            <div class="w-[85%] flex flex-row justify-self-center">

                <div class="w-1/3 p-1 m-1 flex flex-col">
                    <h1 class="font-lucida text-semibold">Nombre</h1>
                    <div class="bg-[#FFFFFF] shadow-xl rounded-xl p-1 font-lucida flex flex-row items-center">
                        <FaUser class="ml-[0.2rem]"></FaUser>
                        <input class="w-[80%]"></input>
                    </div>
                </div>

                <div class="w-1/3 p-1 m-1 flex flex-col">
                    <h1 class="font-lucida text-semibold">Correo</h1>
                    <div class="bg-[#FFFFFF] shadow-xl rounded-xl p-1 font-lucida flex flex-row items-center">
                        <FaRegEnvelope class="ml-[0.2rem]"></FaRegEnvelope>
                        <input class="w-[80%]"></input>
                    </div>
                </div>

                <div class="w-1/3 p-1 m-1 flex flex-col">
                    <h1 class="font-lucida text-semibold">Telefono</h1>
                    <div class="bg-[#FFFFFF] shadow-xl rounded-xl p-1 font-lucida flex flex-row items-center">
                        <BsFillTelephoneFill class="ml-[0.2rem]"></BsFillTelephoneFill>
                        <input class="w-[80%]"></input>
                    </div>
                </div>

            </div>

            <div class="w-[85%] flex flex-row justify-self-center">
                <div class="font-lucida text-semibold w-full p-1">
                    <h1>Mensaje</h1>
                    <textarea class="bg-[#FFFFFF] shadow-xl rounded-xl p-1 font-lucida w-full"></textarea>
                </div>
            </div>

        </section>
    )
}