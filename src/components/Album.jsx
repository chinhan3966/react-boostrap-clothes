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
import { useEffect } from "react";
import axios from "axios";

const Album = ({ setLoadingAlbum }) => {
  const listAlbum = useSelector(
    (state) => state.listProduct.value.listCollections
  );
  const [category, setCategory] = useState([]);
  // console.log("check category state :>>", category);
  useEffect(async () => {
    try {
      setLoadingAlbum(true);
      let response = await axios.get("category/all");
      if (response?.data?.length < 0) {
        throw "Lỗi server";
      }
      setCategory(response?.data);
      setLoadingAlbum(false);
      // console.log("check category :>>", response);
    } catch (error) {
      console.log(error);
    }
  }, []);
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
        {category &&
          category.length > 0 &&
          category.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <AlbumItem
                  url={item?.img[0]}
                  type={item?.categorySlug}
                  quanlity={Math.ceil(Math.random() * item?.quantity)}
                  id={item.id}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </Container>
  );
};

export default Album;
