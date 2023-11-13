import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Flecha from "../images/Flecha.png";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import slide_image_1 from '../images/slide1.jpg';
import slide_image_2 from '../images/slide2.jpg';
import slide_image_3 from '../images/slide3.jpg';

export function Galeria() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageVisible, setIsImageVisible] = useState(true);

  const imagen = [
    slide_image_1,
    slide_image_2,
    slide_image_3,
    // ...agrega más rutas de imágenes según sea necesario
  ];
  const prevImage = () => {
    setIsImageVisible(false); // Ocultar la imagen actual
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? imagen.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setIsImageVisible(false); // Ocultar la imagen actual
    setCurrentImageIndex((prevIndex) => (prevIndex === imagen.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsImageVisible(true); // Mostrar la nueva imagen después de la transición
    }, 500); // Ajusta el tiempo según la duración de la transición en milisegundos
    return () => clearTimeout(timeoutId);
  }, [currentImageIndex]);
  const imageElements = imagen.map((img, index) => (
    <img
      key={index}
      className={`w-[70%] transition-opacity duration-500 ease-in-out ${isImageVisible ? 'opacity-100' : 'opacity-0'}`}
      src={img}
      alt={`Image ${index}`}
    />
  ));
  return (
    <section class="w-full bg-[#EDBE86] pb-[0rem] mb-0 lg:pb-[10rem] grid lg:pt-[10rem]">
      <div class="w-2/3 justify-self-center sm:w-[85%] lg:ml-[10rem] 2xl:w-[70%]">
        <h1 class="text-4xl text-[#424530] font-lucida font-bold pb-2 sm: text-5xl">Galeria</h1>
      </div>
      <div class="w-[85%] justify-self-center 2xl:w-[50%]">
        <div className="flex flex-row">
          <div class="flex flex-col justify-center">
            <button onClick={prevImage} class="flex flex-col items-center"><img src={Flecha} className='w-[30%] h-auto'></img></button>
          </div>
          {imageElements[currentImageIndex]}
          <div class="flex flex-col justify-center">
            <button onClick={nextImage} class="flex flex-col items-center"> <img src={Flecha} className='w-[30%] h-auto rotate-[180deg]'></img></button>
          </div>

        </div>
      </div>
    </section>
  );
}