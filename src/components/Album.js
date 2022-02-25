import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";

import "./AlbumItem.scss";

// import required modules
import { Pagination, Navigation } from "swiper";
import { AlbumItem } from "./AlbumItem";
import { Container } from "react-bootstrap";

const Album = () => {
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
      >
        <SwiperSlide>
          <AlbumItem
            url={
              "https://bizweb.dktcdn.net/thumb/large/100/331/067/collections/4.png?v=1622924614140"
            }
            type={"t-shirt"}
            quanlity="75"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <AlbumItem
            url={
              "https://bizweb.dktcdn.net/thumb/large/100/331/067/collections/3.png?v=1622924599443"
            }
            type={"hoodie"}
            quanlity="35"
          />
        </SwiperSlide>
        <SwiperSlide>
          <AlbumItem
            url={
              "https://bizweb.dktcdn.net/thumb/large/100/331/067/collections/5.png?v=1622924567753"
            }
            type={"jacket"}
            quanlity="15"
          />
        </SwiperSlide>
        <SwiperSlide>
          <AlbumItem
            url={
              "https://bizweb.dktcdn.net/thumb/large/100/331/067/collections/1.png?v=1622924504003"
            }
            type={"pant"}
            quanlity="5"
          />
        </SwiperSlide>
        <SwiperSlide>
          <AlbumItem
            url={
              "https://bizweb.dktcdn.net/thumb/large/100/331/067/collections/32132.png?v=1623003430463"
            }
            type={"shirt"}
            quanlity="75"
          />
        </SwiperSlide>
      </Swiper>
    </Container>
    // <div>
    //   <AlbumItem
    //     url={
    //       "https://bizweb.dktcdn.net/thumb/large/100/331/067/collections/4.png?v=1622924614140"
    //     }
    //     type={"t-shirt"}
    //   />
    //   <AlbumItem
    //     url={
    //       "https://bizweb.dktcdn.net/thumb/large/100/331/067/collections/3.png?v=1622924599443"
    //     }
    //     type={"hoodie"}
    //   />
    //   <AlbumItem
    //     url={
    //       "https://bizweb.dktcdn.net/thumb/large/100/331/067/collections/5.png?v=1622924567753"
    //     }
    //     type={"jacket"}
    //   />
    // </div>
  );
};

export default Album;
