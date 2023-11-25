import React from "react";
import "./carusel.scss";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { CARUSEL_DOCTORS } from "../../utils/const";

export default function Carusel() {
  return (
    <>
      <Swiper
        className='carusel swiper1'
        modules={[Navigation, Autoplay, Pagination]}
        pagination={{ clickable: true }}
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
          250: {
            slidesPerView: 1,
            Pagination,
            spaceBetween: 100,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          960: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 100,
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
