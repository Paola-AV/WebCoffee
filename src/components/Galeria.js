import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import slide_image_1 from '../images/slide1.jpg';
import slide_image_2 from '../images/slide2.jpg';
import slide_image_3 from '../images/slide3.jpg';

export function Galeria() {
  return (
    <section class="w-full bg-[#EDBE86] pb-10 grid lg:pt-[10rem]">
      <div class="w-2/3 justify-self-center sm:w-[85%] lg:ml-[10rem] 2xl:w-[70%]">
        <h1 class="text-4xl text-[#424530] font-lucida font-bold pb-2 sm: text-5xl">Galeria</h1>
      </div>
      <div class="w-[85%] justify-self-center lg:ml-[10rem] 2xl:w-[50%]">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}

          className="swiper_container"
        >
          <SwiperSlide>
            <img className='slideImg' src={slide_image_1} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='slideImg' src={slide_image_2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='slideImg' src={slide_image_3} alt="slide_image" />
          </SwiperSlide>


          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
}