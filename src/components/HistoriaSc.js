import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export function HistoriaSc() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <section class="w-full bg-[#f0bc84] pb-10 grid">
            <div class="w-[90%] flex flex-row justify-end pt-4">
                <h1 class="text-4xl text-[#424530] font-lucida pb-2 mr-1 sm: text-5xl">Nuestra</h1>
                <h1 class="text-4xl text-[#636845] font-lucida pb-2 ml-1 sm: text-5xl">Historia</h1>
            </div>

            <div class="flex flex-row justify-center font-lucida mt-10">
                <div class="hidden">
                    <img src="bosque.PNG" />
                </div>
                <div data-aos="fade-up" class="w-[85%]">
                    <div class="bg-[#FFEFCD] shadow-xl w-full p-2 rounded-lg">
                        <h2 class="font-semibold">Lorem Ipsum</h2>
                        <p >
                            Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                        </p>
                    </div>
                </div>

            </div>

        </section>
    )
}