import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { BsFilter } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import CardProductSlide from "../../common/CardProductSlide";
import Helmet from "../../common/Helmet";
import axios from "axios";
import Loading from "../../common/loading/Loading";

const description = [
  {
    id: 1,
    name: "nhóm áo",
    des: " Bạn muốn mặc đẹp mỗi ngày mà không phải tốn nhiều thời gian, ICON DENIM mang đến đa dạng mẫu áo thun cùng các dòng vải signature chấtlượng cao: Single Compact, Ultra Breathable, Cotton 100%. Để lịch lãm hơn trong lần đầu hẹn hò hay thật chỉn chu nơi công sở, ICON DENIM có những mẫu sơ mi với form dáng chuẩn và đường may chất lượng. Và còn rất nhiều nhiều thiết kế dành riêng cho bạn.",
    categorySlug: "t-shirt",
  },
  {
    id: 2,
    name: "hoodies",
    des: " ICON DENIM sở hữu đa dạng các kiểu Hoodie, từ tay ngắn, tay dài đến các mẫu nón mới lạ hay hình in ấn tượng. Cùng làm mới phong cách thời trang hoodie thông thường cùng các thiết kế vô cùng ấn tượng đến từ ICON DENIM.",
    categorySlug: "hoodie",
  },
  {
    id: 3,
    name: "jacket",
    des: " Áo khoác ICON DENIM sở hữu kiểu dáng thời trang, form dáng năng động, mẫu mã đa dạng, nhiều sự lựa chọn từ áo bomber, áo khoác jean, áo khoác dù,... sẽ giúp các chàng làm mới phong cách nhưng vẫn đảm bảo tính ứng dụng cao. ",
    categorySlug: "jacket",
  },
  {
    id: 4,
    name: "pant",
    des: " Đáp ứng mọi nhu cầu trang phục, ICON DENIM sở hữu đa dạng các mẫu quần mà bạn đang tìm kiếm. Tham khảo ngay những thiết kế quần đa dạng từ quần short, quần jean, quần tây hay jogger… bắt kịp xu hướng tại ICON DENIM. ",
    categorySlug: "pant",
  },
  {
    id: 5,
    name: "shirt",
    des: "Sẽ thật là sai sót khi outfit của bạn thiếu đi những món phụ kiện. ICON chăm chút và giúp bạn trở nên hoàn hảo hơn với đủ thể loại phụ kiện từ khẩu trang, thắt lưng, các mẫu giày với đa dạng mẫu mã và màu sắc.",
    categorySlug: "shirt",
  },
  {
    id: 6,
    name: "accessories",
    des: "Sẽ thật là sai sót khi outfit của bạn thiếu đi những món phụ kiện. ICON chăm chút và giúp bạn trở nên hoàn hảo hơn với đủ thể loại phụ kiện từ khẩu trang, thắt lưng, các mẫu giày với đa dạng mẫu mã và màu sắc.",
    categorySlug: "accessories",
  },
];

const Search = () => {
  const { categorySlug, id, search } = useParams();
  const dataRedux = useSelector((state) => state.listProduct.value.listProduct);

  const [listProductClone, setListProductClone] = useState([]);
  const [listData, setListData] = useState([]);

  const [filterSize, setFilterSize] = useState([]);
  const [filterColor, setFilterColor] = useState([]);
  console.log("check filter size :>>", filterSize);
  console.log("chẹc filter color :>>", filterColor);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  console.log("check size", size);
  console.log("check color", color);

  const [activeSize, setActiveSize] = useState(null);
  const [activeColor, setActiveColor] = useState(null);

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // useEffect(() => {
  //   const listCollections = dataRedux.filter(
  //     (item) => item.categorySlug === categorySlug
  //   );
  //   setListData(listCollections);
  //   setListProductClone(listCollections);
  // }, []);

  useEffect(() => {
    let cloneListData = [...listData];
    let filter = [];
    if (Array.isArray(cloneListData)) {
      cloneListData.forEach((item) => {
        if (item && item.infoProduct && item.infoProduct.length > 0) {
          item.infoProduct.forEach((item1) => {
            if (!filter.includes(item1?.size?.sizeName)) {
              filter.push(item1?.size?.sizeName);
            }
          });
        }
      });
    }

    setFilterSize(filter);
  }, [listData]);

  useEffect(() => {
    let cloneListData = [...listData];
    let filter = [];
    if (Array.isArray(cloneListData)) {
      cloneListData.forEach((item) => {
        if (item && item.infoProduct && item.infoProduct.length > 0) {
          item.infoProduct.forEach((item1) => {
            if (!filter.includes(item1.color.colorName)) {
              filter.push(item1.color.colorName);
            }
          });
        }
      });
    }
    setFilterColor(filter);
  }, [listData]);

  const handleFilterSize = (index, item) => {
    setActiveSize(index);
    setSize(item);
    let cloneListData = [...listProductClone];
    let filter = [];
    if (item) {
      // filter = cloneListData.filter((item) => item.size.includes(item1));
      filter = cloneListData.filter((item1) => {
        let arraySize = [];
        item1.infoProduct.forEach((item2) => {
          arraySize.push(item2.size.sizeName);
        });
        return arraySize.includes(item);
      });

      if (color) {
        // filter = cloneListData.filter((item) => item.colors.includes(color));
        filter = cloneListData.filter((item1) => {
          let arrayColor = [];
          item1.infoProduct.forEach((item2) => {
            arrayColor.push(item2.color.colorName);
          });
          return arrayColor.includes(color);
        });
      }
    }
    setListData(filter);
    console.log("check filter size", filter);
  };

  const handleFilterColor = (index, item) => {
    setActiveColor(index);
    setColor(item);
    let cloneListData = [...listProductClone];
    let filter = [];
    if (item) {
      filter = cloneListData.filter((item1) => {
        let arrayColor = [];
        item1.infoProduct.forEach((item2) => {
          arrayColor.push(item2.color.colorName);
        });
        return arrayColor.includes(item);
      });
      if (size) {
        filter = cloneListData.filter((item1) => {
          let arraySize = [];
          item1.infoProduct.forEach((item2) => {
            arraySize.push(item2.size.sizeName);
          });
          return arraySize.includes(size);
        });
      }
    }
    setListData(filter);
    console.log("check filter dynamic", filter);
  };

  useEffect(async () => {
    // setTimeout(async () => {
    try {
      setLoading(true);
      let response = await axios.get(`product/search?titleProduct=${search}`);
      console.log("check response filter :>>", response.data);
      if (response?.data?.length < 0) {
        throw "Lỗi server";
      }
      setListData(response?.data?.object);
      setListProductClone(response?.data?.object);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    // }, 2000);
  }, [search]);

  return (
    <Helmet title="Collections">
      <motion.div
        initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
        animate={{ clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)" }}
        exit={{
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
          transition: { duration: 0.1 },
        }}
        // initial={{ width: 0 }}
        // animate={{ width: "100%" }}
        // exit={{
        //   x: window.innerWidth,
        //   transition: { duration: 0.1 },
        // }}
      >
        {loading ? (
          <div style={{ width: "100%", height: "500px" }}>
            <Loading />
          </div>
        ) : (
          <div className="collections">
            <Container>
              <div className="collections__filter">
                <div className="collections__filter-header">
                  <BsFilter size={"24px"} />
                  <span>Bộ lọc</span>
                </div>

                {filterSize && filterSize.length > 1 && (
                  <div className="collections__filter-size">
                    <span>Kích thước</span>
                    <>
                      <Swiper
                        slidesPerView={3}
                        spaceBetween={10}
                        pagination={{
                          clickable: true,
                        }}
                        breakpoints={{
                          640: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                          },
                          768: {
                            slidesPerView: 8,
                            spaceBetween: 40,
                          },
                          1024: {
                            slidesPerView: 9,
                            spaceBetween: 50,
                          },
                        }}
                        // modules={[Pagination]}
                        className="mySwiper"
                      >
                        {filterSize &&
                          filterSize.length > 0 &&
                          filterSize.map((item, index) => {
                            return (
                              <SwiperSlide
                                key={index}
                                className={
                                  index === activeSize
                                    ? "border border-warning pointer"
                                    : "pointer"
                                }
                                onClick={() => {
                                  handleFilterSize(index, item);
                                }}
                              >
                                {item}
                              </SwiperSlide>
                            );
                          })}
                      </Swiper>
                    </>
                  </div>
                )}
                {filterColor && filterColor?.length > 0 && (
                  <div className="collections__filter-size">
                    <span>Màu sắc</span>
                    <>
                      <Swiper
                        slidesPerView={3}
                        spaceBetween={10}
                        pagination={{
                          clickable: true,
                        }}
                        breakpoints={{
                          640: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                          },
                          768: {
                            slidesPerView: 6,
                            spaceBetween: 40,
                          },
                          1024: {
                            slidesPerView: 7,
                            spaceBetween: 50,
                          },
                        }}
                        // modules={[Pagination]}
                        className="mySwiper"
                      >
                        {filterColor &&
                          filterColor.length > 0 &&
                          filterColor.map((item, index) => {
                            return (
                              <SwiperSlide
                                key={index}
                                className={
                                  index === activeColor
                                    ? "border border-warning pointer"
                                    : " pointer"
                                }
                                onClick={() => {
                                  handleFilterColor(index, item);
                                }}
                              >
                                {item}
                              </SwiperSlide>
                            );
                          })}
                      </Swiper>
                    </>
                  </div>
                )}
              </div>
              <div className="collections__product">
                {listData && listData?.length > 0 ? (
                  <Row>
                    {listData &&
                      listData.length > 0 &&
                      listData.map((item, index) => {
                        return (
                          <Col xl={3} lg={4} md={6} sm={6} xs={6} key={index}>
                            <CardProductSlide
                              name={item.title}
                              price={item.price}
                              img={item.img}
                              slug={item.slug}
                              id={item.id}
                            />
                          </Col>
                        );
                      })}
                  </Row>
                ) : (
                  <div className="notFound">
                    <div className="notFound__wrapper">
                      <div className="notFound__img">
                        <img src="https://lh3.googleusercontent.com/XgEwa2HvKXekl8B_ZtYa45fM17dXbHLeQpUS9DP9wLzVNuVry88JZt00ZcVTGdIXG9c-2EpW1OYG1FOTgA=rw" />
                      </div>
                      <h1>Sản phẩm bạn tìm kiếm không tồn tại</h1>
                      <button onClick={() => navigate("/")}>
                        Quay về trang chủ
                      </button>
                    </div>
                  </div>
                )}
                {/* <Row>
                  {listData &&
                    listData.length > 0 &&
                    listData.map((item, index) => {
                      return (
                        <Col xl={3} lg={4} md={6} sm={6} xs={6} key={index}>
                          <CardProductSlide
                            name={item.title}
                            price={item.price}
                            img={item.img}
                            slug={item.slug}
                            id={item.id}
                          />
                        </Col>
                      );
                    })}
                </Row> */}
              </div>
            </Container>
          </div>
        )}
      </motion.div>
    </Helmet>
  );
};

export default Search;
