import { FaWaze } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import Contacto from "./Contacto";

export function ContactoSc() {
    return (
        <section class="w-full bg-[#FFEFCD] pt-[5rem] pb-10 flex flex-col items-center text-center sm:pb-[5rem] pt-[7rem] text-start">
            <Contacto></Contacto>
            <div class="sm:w-[80%] 2xl:w-[70%]">
                <div class="font-lucida sm:text-lg 2xl:text-xl">
                    <div class="flex flex-row">
                        <p class="font-semibold text-[#636845] pr-[0.5rem]">Palmares,</p> <p class="font-semibold text-[#424530]">  Alajuela</p>
                    </div>
                    <div class="flex flex-row">
                        <p>Detras del redondel de </p> <p class="text-[#636845] pl-[0.5rem]"> Palmares,</p>
                    </div>
                    
                    <div class="text-start">
                        <p>200 metros sur.</p>
                    </div>
                </div>
                <div class="pt-6">
                    <div id="mapDiv">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d491.0615224122973!2d-84.43535439670086!3d10.05869746055714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa04539d5d5b5b3%3A0x592a537ebe3dc532!2sOlikey%20Coffee%20Roasters!5e0!3m2!1ses!2scr!4v1684939665538!5m2!1ses!2scr"
                            style={{ border: "0" }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            class="sm:w-[100%] 2xl:h-[40vh]"></iframe>
                    </div>

                    <div class="flex flex-row justify-end pt-2">
                        <a href="https://ul.waze.com/ul?place=ChIJs7XV1TlFoI8RMsU9vn5TKlk&ll=10.05869750%2C-84.43503250&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" target="_blank"><FaWaze class="w-5 h-auto mr-1 text-[#424530] sm:w-7 2xl:w-9"></FaWaze></a>
                        <a href="https://goo.gl/maps/VrF3puzghGjjmSVS6" target="_blank"><FaMapMarkerAlt class="w-5 h-auto ml-1 text-[#424530] sm:w-7 2xl:w-9"></FaMapMarkerAlt></a>
                    </div>
                </div>
            </div>
        </section>
    )
}