import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import { Container } from "react-bootstrap";
import { AiTwotoneSetting, AiTwotoneFire } from "react-icons/ai";
import axios from "axios";
import { Link } from "react-router-dom";
const listHotDeal = [
  {
    name: "pencil icon tee",
    price: 300000,
    url: "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/273941106-2169617879860549-1912609576777828820-n.jpg?v=1644817688000",
  },
  {
    name: "roc dream club t-shirt",
    price: 400000,
    url: "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/273903192-4838173302957479-7710589796559519658-n.jpg?v=1644818030000",
  },
];
const HotDeal = () => {
  const hourRef = useRef(null);
  const minRef = useRef(null);
  const secRef = useRef(null);
  const timeRef = useRef(null);

  const hourRef1 = useRef(null);
  const minRef1 = useRef(null);
  const secRef1 = useRef(null);
  const timeRef1 = useRef(null);
  const [productSale1, setProductSale1] = useState({});
  const [productSale2, setProductSale2] = useState({});

  // console.log("check product :>>", productSale1);

  useEffect(async () => {
    try {
      let response = await axios.get(`/product/detail?id=56`);

      if (!response?.data) {
        throw "Lỗi server";
      }

      setProductSale1(response?.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(async () => {
    try {
      let response = await axios.get(`/product/detail?id=58`);

      if (!response?.data) {
        throw "Lỗi server";
      }

      setProductSale2(response?.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const timeRef = setInterval(() => {
      var date = new Date();
      let hr = date.getHours();
      let mn = date.getMinutes();
      let sc = date.getSeconds();
      let totalSecond = hr * 3600 + mn * 60 + sc;
      var totalDay = 86400;

      let hr1 = Math.floor((totalDay - totalSecond) / 3600);
      if (hr1 < 10) {
        hr1 = `0${hr1}`;
      }
      let mn1 = Math.floor((totalDay - totalSecond - hr1 * 3600) / 60);
      if (mn1 < 10) {
        mn1 = `0${mn1}`;
      }
      let sc1 = Math.floor((totalDay - totalSecond) % 60);
      if (sc1 < 10) {
        sc1 = `0${sc1}`;
      }
      if (hr1) {
        hourRef.current.innerText = hr1;
      } else {
        hourRef.current.innerText = "00";
      }
      if (mn1) {
        minRef.current.innerText = mn1;
      } else {
        minRef.current.innerText = "00";
      }
      if (sc1) {
        secRef.current.innerText = sc1;
      } else {
        secRef.current.innerText = "00";
      }
    }, 1000);
    return () => {
      clearInterval(timeRef);
    };
  }, []);

  useEffect(() => {
    const timeRef1 = setInterval(() => {
      var date = new Date();
      let hr = date.getHours();
      let mn = date.getMinutes();
      let sc = date.getSeconds();
      let totalSecond = hr * 3600 + mn * 60 + sc;
      var totalDay = 86400 * 2;

      let hr1 = Math.floor((totalDay - totalSecond) / 3600);
      if (hr1 < 10) {
        hr1 = `0${hr1}`;
      }
      let mn1 = Math.floor((totalDay - totalSecond - hr1 * 3600) / 60);
      if (mn1 < 10) {
        mn1 = `0${mn1}`;
      }
      let sc1 = Math.floor((totalDay - totalSecond) % 60);
      if (sc1 < 10) {
        sc1 = `0${sc1}`;
      }
      if (hr1) {
        hourRef1.current.innerText = hr1;
      } else {
        hourRef1.current.innerText = "00";
      }
      if (mn1) {
        minRef1.current.innerText = mn1;
      } else {
        minRef1.current.innerText = "00";
      }
      if (sc1) {
        secRef1.current.innerText = sc1;
      } else {
        secRef1.current.innerText = "00";
      }
    }, 1000);
    return () => {
      clearInterval(timeRef1);
    };
  }, []);

  const priceSplitter = (number) =>
    number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return (
    <>
      <div className="hotdeal__title">
        <div className="hotdeal__title-header">
          <AiTwotoneFire />
          <h2>hot deal</h2>
        </div>
        <div className="hotdeal__title-des">
          Sản phẩm đang được khuyến mãi cực hot
        </div>
      </div>
      <div className="hotdeal">
        <Container className="hotdeal__container">
          {/* block1 */}

          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              {" "}
              <div className="hotdeal__container-item">
                {/* block1.1 */}
                <div className="hotdeal__container-item__block">
                  <Link
                    to={`/product/${productSale1?.object?.slug}/${productSale1?.object?.id}`}
                  >
                    <h2>{productSale1?.object?.title}</h2>
                  </Link>
                  <span>{priceSplitter(productSale1?.object?.price)}đ</span>
                  <h4>Thời gian còn lại</h4>
                  <div className="hotdeal__container-item__block-countdown">
                    <div className="hotdeal__container-item__block-countdown__hour">
                      <span ref={hourRef}>11</span>
                      <p>Giờ</p>
                    </div>
                    <div className="hotdeal__container-item__block-countdown__min">
                      <span ref={minRef}>12</span>
                      <p>Phút</p>
                    </div>
                    <div className="hotdeal__container-item__block-countdown__sec">
                      <span ref={secRef}>54</span>
                      <p>Giây</p>
                    </div>
                  </div>
                  <button className="hotdeal__container-item__block-setting">
                    <AiTwotoneSetting />
                    <span>tùy chọn</span>
                  </button>
                </div>
                {/* block1.1 */}
                {/* block1.2 */}
                <div className="hotdeal__container-item__block1">
                  <img src={productSale1?.object?.img[0]} />
                </div>
                {/* block1.2 */}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="hotdeal__container-item">
                {/* block1.1 */}
                <div className="hotdeal__container-item__block">
                  <Link
                    to={`/product/${productSale2?.object?.slug}/${productSale2?.object?.id}`}
                  >
                    <h2>{productSale2?.object?.title}</h2>
                  </Link>
                  <span>{priceSplitter(productSale2?.object?.price)}đ</span>
                  <h4>Thời gian còn lại</h4>
                  <div className="hotdeal__container-item__block-countdown">
                    <div className="hotdeal__container-item__block-countdown__hour">
                      <span ref={hourRef1}>11</span>
                      <p>Giờ</p>
                    </div>
                    <div className="hotdeal__container-item__block-countdown__min">
                      <span ref={minRef1}>12</span>
                      <p>Phút</p>
                    </div>
                    <div className="hotdeal__container-item__block-countdown__sec">
                      <span ref={secRef1}>54</span>
                      <p>Giây</p>
                    </div>
                  </div>
                  <button className="hotdeal__container-item__block-setting">
                    <AiTwotoneSetting />
                    <span>tùy chọn</span>
                  </button>
                </div>
                {/* block1.1 */}
                {/* block1.2 */}
                <div className="hotdeal__container-item__block1">
                  <img src={productSale2?.object?.img[0]} />
                </div>
                {/* block1.2 */}
              </div>
            </SwiperSlide>
          </Swiper>
          {/* block1 */}
          {/* block2 */}

          {/* block2 */}
        </Container>
      </div>
    </>
  );
};

export default HotDeal;
