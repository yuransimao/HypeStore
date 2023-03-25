import React, { useRef, useState,  useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Card} from "../../Card/card"

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import Styles from "./styles.module.scss";

// import required modules
import { FreeMode, Pagination } from "swiper";

export  function Slidet() {

    const [Data, setDataimg] = useState([])
        
    useEffect (() => {
        fetch("http://localhost:5000/imagem",{
            method:"GET",
            headers:{
                "content-type":"application/json"
            }
        })
        .then(response => response.json())
        .then(data => setDataimg(data))
        .catch(error => console.error(error))
        
    },[])
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className={Styles.mySwiper}
      >
        
        {Data.map((item)=>(
        <SwiperSlide className={Styles['swiper-slide']} >
        <Card
        key={item.id}
        name={item.name}
        price={item.Price}
        oldPrice={item.oldPrice}
        img={item.img}
        Data={item}


        />

</SwiperSlide>
        ))}
        
        
      </Swiper>
    </>
  );
}
