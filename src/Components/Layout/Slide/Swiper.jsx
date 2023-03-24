
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { CardR } from "../Card/CardR/CardR";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Styles from"./styles.module.scss";

// import required modules
import { Autoplay, Pagination, Mousewheel, Navigation } from "swiper";






export  default function  Swippers() {

  return (
    <>
    <Swiper
      
      autoplay={{
        delay: 2500,
  
      }}
      navigation={true}
      modules={[Autoplay,  Navigation]}
      className={Styles['mySwiper']}
    >
      <SwiperSlide className={Styles['swiper-slide']}><CardR/></SwiperSlide>
      <SwiperSlide className={Styles['swiper-slide']}><CardR/></SwiperSlide>
      
      
    </Swiper>
  </>
);
}