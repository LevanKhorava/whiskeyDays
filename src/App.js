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
          <img
            className="w-[200px] h-[500px]"
            src="https://maverickwhiskey.com/wp-content/uploads/2018/10/10-Terms-Whiskey-Lovers-Need-To-Know.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.europeanbusinessreview.com/wp-content/uploads/2021/02/Whiskey-copy.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://readypeace.com/cdn/shop/products/717gsVlDnjS._AC_SL1500.jpg?v=1642091436&width=1500" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
