import "./index.css";

import Header from "./components/Header";
import Location from "./components/Location";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import img1 from "./asssets/img1.png";
import img2 from "./asssets/img2.png";
import img3 from "./asssets/img3.png";
import img4 from "./asssets/img4.png";
import img5 from "./asssets/img5.png";
import img6 from "./asssets/img6.png";
import img7 from "./asssets/img7.png";
import img8 from "./asssets/img8.png";
import img9 from "./asssets/img9.png";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import Exhibitants from "./components/Exhibitants";
import Clock from "./components/Clock";
import Info from "./Info";
import Footer from "./components/Footer";

function App() {
  let deadline = "September, 10, 2024";
  return (
    <div className="app scroll-smooth">
      <Header />
      <Clock deadline={deadline} />
      <Location />
      <h1 className="md:mt-[100px] font-bold text-[30px] text-center">
        Swipe to see photos
      </h1>
      <div id="gallery">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.1}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="md:w-[1000px] md:h-[600px] h-[300px]"
        >
          <SwiperSlide>
            <img src={img1} className="h-[300px] md:h-[700px]" alt="photo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} className="h-[300px] md:h-[700px]" alt="photo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} className="h-[300px] md:h-[700px]" alt="photo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} className="h-[300px] md:h-[700px]" alt="photo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} className="h-[300px] md:h-[700px]" alt="photo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img6} className="h-[300px] md:h-[700px]" alt="photo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img7} className="h-[300px] md:h-[700px]" alt="photo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img8} className="h-[300px] md:h-[700px]" alt="photo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img9} className="h-[300px] md:h-[700px]" alt="photo" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div id="info">
        <Info />
      </div>
      <div id="contact">
        <Footer />
      </div>
      {/* <Exhibitants /> */}
    </div>
  );
}

export default App;
