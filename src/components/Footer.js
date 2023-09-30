import { FaRegEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import logoO from '../images/logoO.PNG';

export function Footer() {
    return (
        <section class="w-full bg-[#E09132] pb-10 flex flex-col sm:pb-5">

            <div class="w-full flex flex-row p-1 font-lucida text-xs pt-5 justify-evenly">

                <div class="hidden sm:flex m-1">
                    <img src={logoO} class="w-[7rem] h-auto translate-y-[-5rem]"/>
                </div>

                <div class="pr-1">
                    <p class="sm:text-sm">Palmares, Alajuela</p>
                    <p class="sm:text-sm">Detras del redondel de Palmares,</p>
                    <p class="sm:text-sm">200 metros sur.</p>
                    <div class="flex flex-col pt-4">
                        <div class="flex flex-row items-center">
                            <BsFillTelephoneFill></BsFillTelephoneFill>
                            <p class="ml-1 sm:text-sm">6140-2482</p>
                        </div>

                        <div class="flex flex-row items-center">
                            <FaRegEnvelope></FaRegEnvelope>
                            <p class="ml-1 sm:text-sm">xmichx53@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div class="pl-1">
                    <h1 class="font-semibold sm:text-sm">Horario de Apertura</h1>
                    <p class="sm:text-sm">De lunes a viernes 7:00am-6:00pm</p>

                    <p class="pt-7 sm:text-sm">Sabados</p>
                    <p class="sm:text-sm">9:00am-6:00pm</p>
                </div>
            </div>

            <div class="w-full flex flex-row justify-end pr-4">
                <a class="m-1" href="https://www.facebook.com/Olikeycoffeeroasters"><FaFacebookSquare class="sm:w-[1.5rem] h-auto"></FaFacebookSquare></a>
                <a class="m-1" href="https://www.instagram.com/olikeycoffeeroasters/"><FaInstagram class="sm:w-[1.5rem] h-auto"></FaInstagram></a>
                <a class="m-1"><FaWhatsapp class="sm:w-[1.5rem] h-auto"></FaWhatsapp></a>
            </div>

        </section>
    )
}