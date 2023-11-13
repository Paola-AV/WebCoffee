import { FaUser } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

function Contacto() {
    return (
        <section class="h-[100vh] w-full bg-[#EDBE86] pb-10 grid sm:pb-20">
            <div class="w-2/3 flex justify-self-center items-center sm:w-[85%] xl:w-[80%] 2xl:w-[70%]">
                <h1 class="text-6xl text-[#424530] font-lucida font-bold sm:text-5xl">Contacto</h1>
            </div>

            <div class="w-[85%] h-[50%] flex flex-row justify-self-center justify-end xl:w-[80%] 2xl:w-[70%]">

                <div class="w-1/3 p-1 m-1 flex flex-col justify-end">
                    <h1 class="font-lucida text-semibold">Nombre</h1>
                    <div class="bg-[#FFFFFF] shadow-xl rounded-xl p-1 font-lucida flex flex-row items-center lg:p-3">
                        <FaUser class="ml-[0.2rem]"></FaUser>
                        <input class="w-[80%]"></input>
                    </div>
                </div>

                <div class="w-1/3 p-1 m-1 flex flex-col justify-end" >
                    <h1 class="font-lucida text-semibold">Correo</h1>
                    <div class="bg-[#FFFFFF] shadow-xl rounded-xl p-1 font-lucida flex flex-row items-center lg:p-3">
                        <FaRegEnvelope class="ml-[0.2rem]"></FaRegEnvelope>
                        <input class="w-[80%]"></input>
                    </div>
                </div>

                <div class="w-1/3 p-1 m-1 flex flex-col justify-end">
                    <h1 class="font-lucida text-semibold">Telefono</h1>
                    <div class="bg-[#FFFFFF] shadow-xl rounded-xl p-1 font-lucida flex flex-row items-center lg:p-3">
                        <BsFillTelephoneFill class="ml-[0.2rem]"></BsFillTelephoneFill>
                        <input class="w-[80%]"></input>
                    </div>
                </div>

            </div>

            <div class="w-[85%] flex flex-row justify-self-center xl:w-[80%] 2xl:w-[70%]">
                <div class="font-lucida text-semibold w-full p-1">
                    <h1>Mensaje</h1>
                    <textarea class="bg-[#FFFFFF] h-[60%] shadow-xl rounded-xl p-1 font-lucida w-full lg:p-3"></textarea>
                </div>
            </div>

        </section>
    )
}

export default Contacto;