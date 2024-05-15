import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import img2 from "../asssets/elituri.png";
import img3 from "../asssets/jimsher.png";
import img6 from "../asssets/sarajishvili.png";
import img7 from "../asssets/mixxon.png";
import img8 from "../asssets/sasmely.png";
import img9 from "../asssets/smugglers.png";
import React, { useRef, useState } from "react";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const Exhibitants = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div>
      <h1 className="text-center md:mt-[200px] md:text-[50px] text-[30px] font-bold">
        EXHIBITORS
      </h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        // className="mySwiper"
        className="md:w-[50%] "
      >
        <SwiperSlide>
          <img src={img6} className="h-[500px] md:h-[800px]" alt="photo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} className="h-[500px] md:h-[800px]" alt="photo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} className="h-[500px] md:h-[800px]" alt="photo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} className="h-[500px] md:h-[800px]" alt="photo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} className="h-[500px] md:h-[800px]" alt="photo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} className="h-[500px] md:h-[800px]" alt="photo" />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Exhibitants;
