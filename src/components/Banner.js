import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        id="banner"
      >
        <SwiperSlide>
          {/* <div className="imgPaddingTop1"></div> */}
          <img
            className="imgBox"
            src="https://theme.hstatic.net/1000360022/1000759577/14/slideshow_2.jpg?v=466"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="imgBox"
            src="https://file.hstatic.net/1000383583/file/untitled-2_b64ca7af0f5d4f378e11c224c4bdc10e.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="imgBox"
            src="https://file.hstatic.net/1000383583/file/untitled-2_3208eb8ed83146dc9095617e5198287a.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="imgBox"
            src="https://file.hstatic.net/1000383583/file/hinh_ee3a86881b7f4f2582a45c97067bd6e3.png"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
