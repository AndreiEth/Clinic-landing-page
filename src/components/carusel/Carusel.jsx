import React from "react";
import "./carusel.scss";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { CARUSEL_DOCTORS } from "../../utils/const";

export default function Carusel() {
  return (
    <>
      <Swiper
        className='carusel swiper1'
        modules={[Navigation, Autoplay]}
        spaceBetween={100}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        autoplay={{
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={600}
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,

          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 3,

          },
          1400: {
            width: 1400,
            slidesPerView: 4,
			
          },
        }}
      >
        {CARUSEL_DOCTORS.map((item, index) => {
          return (
            <SwiperSlide
              className='swiper-slide1'
              key={index}
            >
              <img
                src={item.link}
                alt='profile'
                className='carusel__img'
              />
              <h2 className='carusel__name'>{item.name}</h2>
              <p className='carusel__doctor'>{item.doctor}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className='flex-btn'>
        <div className='button-prev-slide'></div>
        <div className='button-next-slide'></div>
      </div>
    </>
  );
}
