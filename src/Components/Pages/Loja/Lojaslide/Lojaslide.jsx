import React, { useRef, useState } from "react";
import phone from "../../../../ImgandVideo/pexels-tuur.jpg"
import phoneX from "../../../../ImgandVideo/pexels-tyler.jpg"
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
  const product =[{
produtImg:`${phone}`
  },
  {
produtImg:`${phoneX}`
  }

]

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
        {product.map((item, index)=>{
          return(
            <SwiperSlide className={Styles.swiperslide} key={index}>         
        <img src={item.produtImg}/>
        </SwiperSlide>
          )
        })}
        

       
        
      </Swiper>
    </>
     
      );
}