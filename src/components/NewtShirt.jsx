import React, { useContext, useEffect, useRef, useState } from "react";
import { AiFillThunderbolt } from "react-icons/ai";

import CardProduct from "./common/CardProduct";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import "./scss/NewtShirt.scss";

// import required modules
import { Scrollbar } from "swiper";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios";

const NewtShirt = ({ setLoadingShirt }) => {
  // const { data } = useContext(dataContext);
  const listRedux = useSelector((state) => state.listProduct.value.listProduct);

  const [tShirt, setTshirt] = useState([]);
  // console.log("check tshirt :>", tShirt);
  useEffect(async () => {
    try {
      setLoadingShirt(true);
      let response = await axios.get("/product/?param=2");
      // console.log("check tShirt :>>", response);
      if (response?.data?.length < 0) {
        throw "Lỗi server";
      }
      setTshirt(response?.data);
      setLoadingShirt(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  // useEffect(() => {
  //   const filter = listRedux.filter((item) => item.categorySlug === "t-shirt");
  //   setTshirt(filter);
  // }, []);
  // console.log(tShirt);
  return (
    <Container className="mb-5" id="customScrollBar">
      <div className="newShirt">
        <div className="icon">
          <AiFillThunderbolt size={"30px"} />
        </div>
        <h2>new shirt</h2>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        scrollbar={{
          hide: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        {tShirt &&
          tShirt.length > 0 &&
          tShirt.map((item, index) => (
            <SwiperSlide key={index}>
              <CardProduct
                imgFront={item.img[0]}
                imgBack={item.img[1]}
                title={item.title}
                price={item.price}
                item={item}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  );
};

export default NewtShirt;
