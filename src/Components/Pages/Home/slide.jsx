
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/navigation';
import React, { useRef, useState } from 'react';


import Styles from"./styles.module.scss";

// import required modules



export  function  Slide() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;};
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
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className={Styles['swiper']}
    >
      <SwiperSlide className={Styles['swiper-slide']}>Slide 1</SwiperSlide>
      <SwiperSlide className={Styles['swiper-slide']}>Slide 2</SwiperSlide>
      <SwiperSlide className={Styles['swiper-slide']}>Slide 3</SwiperSlide>
      <SwiperSlide className={Styles['swiper-slide']}>Slide 4</SwiperSlide>
      <SwiperSlide className={Styles['swiper-slide']}>Slide 5</SwiperSlide>
      <SwiperSlide className={Styles['swiper-slide']}>Slide 6</SwiperSlide>
      <SwiperSlide className={Styles['swiper-slide']}>Slide 7</SwiperSlide>
      <SwiperSlide className={Styles['swiper-slide']}>Slide 8</SwiperSlide>
      <SwiperSlide className={Styles['swiper-slide']}>Slide 9</SwiperSlide>
      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Swiper>
  </>
);
}

 
