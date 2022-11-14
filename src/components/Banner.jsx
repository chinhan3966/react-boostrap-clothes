import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 5000,
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
          <Link to="/collections/jacket/1">
            <img
              className="imgBox"
              // src="https://theme.hstatic.net/1000360022/1000759577/14/slideshow_2.jpg?v=466"
              src="https://file.hstatic.net/1000383583/file/2_5_c866225cde1b4e5c9753c1cc9f557643.png"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/collections/t-shirt/2">
            <img
              className="imgBox"
              src="https://bizweb.dktcdn.net/100/331/067/themes/862373/assets/slider_1.jpg?1661445975319"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/collections/hoodie/3">
            <img
              className="imgBox"
              src="https://file.hstatic.net/1000383583/file/untitled-2_b64ca7af0f5d4f378e11c224c4bdc10e.png"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/collections/pant/4">
            <img
              className="imgBox"
              src="https://file.hstatic.net/1000383583/file/untitled-2_3208eb8ed83146dc9095617e5198287a.jpg"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/collections/accessories/6">
            <img
              className="imgBox"
              src="https://file.hstatic.net/1000383583/file/hinh_ee3a86881b7f4f2582a45c97067bd6e3.png"
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
