
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";

import Styles from"./styles.module.scss";

// import required modules
import { Navigation } from "swiper";

export  function  Slide() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className={Styles.mySwiper}>
        <SwiperSlide className={Styles.swiperslide}>Slide 1</SwiperSlide>
        <SwiperSlide className={Styles.swiperslide}>Slide 2</SwiperSlide>
        <SwiperSlide className={Styles.swiperslide}>Slide 3</SwiperSlide>
        <SwiperSlide className={Styles.swiperslide}>Slide 4</SwiperSlide>
        <SwiperSlide className={Styles.swiperslide}>Slide 5</SwiperSlide>
        <SwiperSlide className={Styles.swiperslide}>Slide 6</SwiperSlide>
        <SwiperSlide className={Styles.swiperslide}>Slide 7</SwiperSlide>
        <SwiperSlide className={Styles.swiperslide}>Slide 8</SwiperSlide>
        <SwiperSlide className={Styles.swiperslide}>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
