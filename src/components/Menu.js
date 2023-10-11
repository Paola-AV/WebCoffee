import copa1 from '../images/copa1.png';
import menuPouring from '../images/menuPouring.png';
import latte from '../images/latte.png';
import vasoMenu from '../images/vasoMenu.png'

export function Menu() {
    return (
        <section class="w-full bg-[#FFEFCD] pb-10 grid lg:pb-[10rem]">
            <div class="w-2/3 justify-self-center sm:w-[85%] xl:w-[75%] 2xl:w-[68%]">
                <h1 class="text-4xl text-[#424530] font-lucida font-bold pb-2 sm:text-5xl lg:text-6xl pb-[3rem] pt-[5rem]">Menu</h1>
            </div>
            <div class="flex flex-row w-full justify-center">
                <div class="p-1 m-1 sm:w-[45%] xl:w-[40%] 2xl:w-[35%]">
                    <div class="bg-[#FFFFFF] shadow-xl p-2 px-6 rounded-xl m-1 font-lucida lg:flex flex-row pl-0 pr-6 mb-[5rem] 2xl:mb-[7rem]">
                        <div class="hidden lg:flex w-1/3 justify-start relative items-start">
                            <img class="absolute left-0 top-0 translate-y-[-2rem] w-[75%] rounded-full 2xl:translate-y-[-3.5rem]" src={vasoMenu}/>
                        </div>
                        <div class="lg:w-2/3 text-center">
                            <h1 class="font-semibold text-[#424530] lg:text-2xl">Espresso</h1>
                            <p>Lorem ipsum</p>
                        </div>

                    </div>

                    <div class="bg-[#FFFFFF] shadow-xl p-2 px-6 rounded-xl m-1 font-lucida mt-4 lg:flex flex-row pl-0 pr-6">
                        <div class="hidden lg:flex w-1/3 justify-start relative items-start">
                            <img class="absolute left-0 top-0 translate-y-[-2rem] w-[75%] rounded-full 2xl:translate-y-[-3.5rem]" src={copa1}/>
                        </div>
                        <div class="lg:w-2/3 text-center">
                            <h1 class="font-semibold text-[#424530] lg:text-2xl">Infusiones</h1>
                            <p>Lorem ipsum</p>
                        </div>

                    </div>

                </div>

                <div class="p-1 m-1 sm:w-[45%] xl:w-[40%] 2xl:w-[35%]">

                    <div class="bg-[#FFFFFF] shadow-xl p-2 px-6 rounded-xl m-1 font-lucida lg:flex flex-row pl-0 pr-6 mb-[5rem] 2xl:mb-[7rem]">
                        <div class="hidden lg:flex w-1/3 justify-start relative items-start">
                            <img class="absolute left-0 top-0 translate-y-[-2rem] w-[75%] rounded-full 2xl:translate-y-[-3.5rem]" src={latte}/>
                        </div>
                        <div class="lg:w-2/3 text-center">
                            <h1 class="font-semibold text-[#424530] lg:text-2xl">Lattes</h1>
                            <p>Lorem ipsum</p>
                        </div>

                    </div>

                    <div class="bg-[#FFFFFF] shadow-xl p-2 px-6 rounded-xl m-1 font-lucida mt-4 lg:flex flex-row pl-0 pr-6">
                        <div class="hidden lg:flex w-1/3 justify-start relative items-start">
                            <img class="absolute left-0 top-0 translate-y-[-2rem] w-[75%] rounded-full 2xl:translate-y-[-3.5rem]" src={menuPouring}/>
                        </div>
                        <div class="lg:w-2/3 text-center">
                            <h1 class="font-semibold text-[#424530] lg:text-2xl">Metodos</h1>
                            <p>Lorem ipsum</p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}