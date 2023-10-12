import TallerT from '../images/TallerT.png'

export function Talleres() {
    return (
        <section class="grid pt-[10rem]  bg-[#FFEFCD]">
            <div class="w-[90%] flex flex-row justify-end pt-4">
                <h1 class="text-4xl text-[#424530] font-lucida pb-2 mr-1 sm: text-5xl">Nuestros Productos</h1>
            </div>

            <div class="justify-self-center w-[60%]">

                <div class="bg-[#E09132] rounded-full w-[20rem] h-[20rem] mb-[5rem] grid items-center">
                    <div class="bg-[#424530] w-[45%] absolute left-[20rem] h-[30%] grid grid-cols-1 justify-around ">
                        <img src={TallerT} class="w-[10rem] h-auto absolute self-center ml-[3rem]"></img>
                        <div class="flex flex-col bg-[#FFEFCD] font-lucida rounded-lg shadow-xl w-[30%] absolute justify-self-end mr-[3rem]">
                            <h1>Lorem ipsum</h1>
                            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}