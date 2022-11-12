import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import Styles from"./styles.module.scss";

// import required modules
import { Autoplay, Pagination} from "swiper";


// import required modules




export function Lojaslide(){
    return (
      <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Autoplay, Pagination]}
        className={Styles.mySwiper}
      >
        <SwiperSlide className={Styles.swiperslide}></SwiperSlide>
        <SwiperSlide className={Styles.swiperslide}>Slide 2</SwiperSlide>
        <SwiperSlide className={Styles.swiperslide}>Slide 3</SwiperSlide>
        
      </Swiper>
    </>
     
      );
}