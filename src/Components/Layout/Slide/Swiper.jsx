import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Styles from"./styles.module.scss";

// import required modules
import { Autoplay, Pagination } from "swiper";






export  function  Slide() {

  return (
    <>
   <Swiper
        spaceBetween={30}
        pagination={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,Pagination]}
        className={Styles.mySwiper}
      >
<SwiperSlide className={Styles['swiper-slide']}>1</SwiperSlide>
<SwiperSlide className={Styles['swiper-slide']}>1</SwiperSlide>

        
      </Swiper>
  </>
);
}
