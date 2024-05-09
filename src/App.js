import "./index.css";

import Header from "./components/Header";
import Location from "./components/Location";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

function App() {
  return (
    <div className="app">
      <Header />
      <Location />
      <h1 className="md:mt-[100px] font-bold text-[30px] text-center">
        Swipe to see photos
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="md:w-[1000px] h-[500px]"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
    </div>
  );
}

export default App;
