import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { AlbumItem } from "./AlbumItem";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const Album = () => {
  const listAlbum = useSelector(
    (state) => state.listProduct.value.listCollections
  );
  // console.log(listAlbum);
  return (
    <Container className="mb-5" id="customNavigation">
      <h1 className="album">
        <span>album</span>
      </h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
        id="album"
      >
        {listAlbum &&
          listAlbum.length > 0 &&
          listAlbum.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <AlbumItem
                  url={item.img}
                  type={item.categorySlug}
                  quanlity={item.quanlity}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </Container>
  );
};

export default Album;
