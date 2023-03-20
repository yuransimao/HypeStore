
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

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
      <SwiperSlide className={Styles['swiper-slide']}>Slide 1</SwiperSlide>
      <SwiperSlide className={Styles['swiper-slide']}>Slide 1</SwiperSlide>
      <SwiperSlide className={Styles['swiper-slide']}>Slide </SwiperSlide>
      <SwiperSlide className={Styles['swiper-slide']}>Slide 3</SwiperSlide>
      <SwiperSlide className={Styles['swiper-slide']}>Slide 4</SwiperSlide>
      <SwiperSlide className={Styles['swiper-slide']}>Slide 5</SwiperSlide>
      <SwiperSlide className={Styles['swiper-slide']}>Slide 6</SwiperSlide>
      <SwiperSlide className={Styles['swiper-slide']}>Slide 7</SwiperSlide>
      <SwiperSlide className={Styles['swiper-slide']}>Slide 8</SwiperSlide>
      <SwiperSlide className={Styles['swiper-slide']}>Slide 9</SwiperSlide>
    </Swiper>
  </>
);
}