
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { CardR } from "../Card/CardR/CardR";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Styles from"./styles.module.scss";

// import required modules
import { Autoplay, Pagination, Mousewheel } from "swiper";






export  function  Swippers() {

  return (
    <>
    <Swiper
      direction={"vertical"}
      autoplay={{
        delay: 2500,
  
      }}
      pagination={{
        clickable: true,
      }}
      mousewheel={true}
      
      modules={[Autoplay, Pagination,  Mousewheel]}
      className={Styles['mySwiper']}
    >
      <SwiperSlide className={Styles['swiper-slide']}><CardR/></SwiperSlide>
      
    </Swiper>
  </>
);
}