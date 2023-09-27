import { FaRegEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
    return (
        <section class="w-full bg-[#E09132] pb-10 flex flex-col">

            <div class="w-full flex flex-row p-1 font-lucida text-xs pt-5">
                <div class="pr-1">
                    <p>Palmares, Alajuela</p>
                    <p>Detras del redondel de Palmares,</p>
                    <p>200 metros sur.</p>
                    <div class="flex flex-col pt-4">
                        <div class="flex flex-row items-center">
                            <BsFillTelephoneFill></BsFillTelephoneFill>
                            <p class="ml-1">6140-2482</p>
                        </div>

                        <div  class="flex flex-row items-center">
                            <FaRegEnvelope></FaRegEnvelope>
                            <p class="ml-1">xmichx53@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div class="pl-1">
                    <h1 class="font-semibold">Horario de Apertura</h1>
                    <p>De lunes a viernes 7:00am-6:00pm</p>

                    <p class="pt-7">Sabados</p>
                    <p>9:00am-6:00pm</p>
                </div>
            </div>

            <div class="w-full flex flex-row justify-end pr-4">
                <a class="m-1"><FaFacebookSquare></FaFacebookSquare></a>
                <a class="m-1"><FaInstagram></FaInstagram></a>
                <a class="m-1"><FaWhatsapp></FaWhatsapp></a>
            </div>

        </section>
    )
}