import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import CardProductSlide from "../../common/CardProductSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiCartAlt } from "react-icons/bi";

import Loading from "../../common/loading/Loading";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "swiper/css/effect-coverflow";

// import required modules
import { FreeMode, Navigation, Thumbs, EffectCoverflow } from "swiper";
import Helmet from "../../common/Helmet";
import { addCart, handleUpdateListCart } from "../../../redux/actions";
import { toast } from "react-toastify";
import axios from "axios";

const PageProduct = () => {
  const { slug, id } = useParams();
  // const data = useSelector((state) => state.listProduct.value.listProduct);
  // const item = data.find((item) => item.slug === slug);
  // console.log("check item", item);

  const [productOne, setProductOne] = useState({});

  const [listSize, setListSize] = useState([]);
  const [listColor, setListColor] = useState([]);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeImg, setActiveImg] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const [activeColor, setActiveColor] = useState(0);

  const [moreProduct, setMoreProduct] = useState([]);

  const [qty, setQty] = useState(1);
  console.log("check qty :>>", qty);
  const [mount, setMount] = useState({});

  console.log("check filter mount :>>", mount);

  const [color, setColor] = useState(listColor[0]);
  const [size, setSize] = useState(listSize[0]);

  const [productLoading, setProductLoading] = useState(true);
  const [moreLoading, setMoreLoading] = useState(true);

  const dispatch = useDispatch();
  const { token, loginDB } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const priceSplitter = (number) =>
    number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  const getAllCart = async () => {
    let result = await axios.get("/cart/find-cart", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (result?.data?.code !== 200) {
      toast.success("Fail get all cart", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    console.log("check all cart :>>", result);
    const customListCart = result?.data?.object?.cartDetail?.map(
      (item, index) => {
        return { ...item, isActive: false };
      }
    );
    // dispatch(handleUpdateListCart(result?.data?.object?.cartDetail));
    dispatch(handleUpdateListCart(customListCart));
  };

  const handleDecreaseQty = () => {
    if (qty === 1) {
      setQty(1);
      return;
    }
    setQty(qty - 1);
  };

  const handleIncreaseQty = () => {
    if (qty >= mount?.amount) {
      return;
    }
    setQty(qty + 1);
  };

  const handleChangeQty = (e) => {
    console.log(e.target.value);
    if (e?.target?.value >= mount?.amount) {
      setQty(Number(mount?.amount));
      return;
    }
    if (e?.target?.value <= 0) {
      setQty(Number(1));
      return;
    }
    setQty(Number(e?.target?.value));
  };

  const addItem = async () => {
    if (loginDB?.email) {
      // dispatch(
      //   addCart({
      //     id: productOne?.object?.id,
      //     img: productOne?.object?.img[0],
      //     name: productOne?.object?.title,
      //     price: productOne?.object?.price,
      //     qty: qty,
      //   })
      // );
      const customData = {
        idColor: mount?.color?.id,
        idProduct: id,
        idSize: mount?.size?.id || null,
        quantity: qty,
      };

      try {
        let result = await axios.post("/cart/add-product", customData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (result?.data?.code !== 200) {
          toast.warn("Fail add product ", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        console.log("check result post product cart:>>", result);
        toast.success(result?.data?.message, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        getAllCart();
      } catch (error) {
        console.log(error);
        toast.warn("Info product incorrect ", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      navigate("/sign-in");
    }
  };

  useEffect(async () => {
    if (id) {
      try {
        setProductLoading(true);
        let response = await axios.get(`/product/detail?id=${id}`);

        if (response?.data?.length < 0) {
          throw "Lỗi server";
        }

        setProductOne(response?.data);

        setProductLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setProductLoading(false);
      }
    }
  }, [id]);

  useEffect(async () => {
    let id = productOne?.object?.categorySlug?.id;
    if (id) {
      try {
        // setLoading({ ...loading, productMore: true });
        setMoreLoading(true);
        let response = await axios.get(`/product/?param=${id}`);

        if (response?.data?.length < 0) {
          throw "Lỗi server";
        }
        setMoreProduct(response?.data?.object);
        // setLoading({ ...loading, productMore: false });
        setMoreLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        // setLoading({ ...loading, productMore: false });
        setMoreLoading(false);
      }
    }
  }, [id, productOne]);

  useEffect(() => {
    let cloneListData = { ...productOne };
    let filter = [];

    if (cloneListData) {
      if (
        cloneListData &&
        cloneListData?.object?.infoProduct &&
        cloneListData?.object?.infoProduct?.length > 0
      ) {
        cloneListData?.object?.infoProduct?.forEach((item1) => {
          if (!filter.includes(item1?.size?.sizeName)) {
            filter.push(item1?.size?.sizeName);
          }
        });
      }
    }

    setListSize(filter);
  }, [productOne]);

  useEffect(() => {
    let cloneListData = { ...productOne };
    let filter = [];

    if (cloneListData) {
      if (
        cloneListData &&
        cloneListData?.object?.infoProduct &&
        cloneListData?.object?.infoProduct?.length > 0
      ) {
        cloneListData?.object?.infoProduct?.forEach((item1) => {
          if (!filter.includes(item1?.color?.colorName)) {
            filter.push(item1?.color?.colorName);
          }
        });
      }
    }

    setListColor(filter);
  }, [productOne]);

  useEffect(() => {
    let cloneProductOne = { ...productOne };

    if (cloneProductOne) {
      let find = cloneProductOne?.object?.infoProduct?.find(
        (item) =>
          item?.color.colorName === (color || listColor[0]) &&
          item?.size?.sizeName === (size || listSize[0])
      );
      setMount(find);
      // console.log("check find amount:>>", find);
    }
  }, [size, color, productOne, listColor, listSize]);

  return (
    <Helmet title={productOne?.object?.slug || "Page Product"}>
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
        {productLoading && moreLoading ? (
          <div style={{ width: "100%", height: "500px" }}>
            <Loading />
          </div>
        ) : (
          <div>
            <Container className="mt-5">
              <div className="product">
                <div className="product__img">
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
                    style={{
                      "--swiper-navigation-color": "#fff",
                      "--swiper-pagination-color": "#fff",
                    }}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs, EffectCoverflow]}
                    className="mySwiper2"
                  >
                    {productOne &&
                      productOne?.object?.img &&
                      productOne?.object?.img?.length > 0 &&
                      productOne?.object?.img.map((item, index) => {
                        return (
                          <SwiperSlide key={index}>
                            <img
                              src={item}
                              style={{
                                width: "70%",
                                aspectRatio: 1 / 1,
                                objectFit: "cover",
                              }}
                            />
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    slidesPerView={3}
                    spaceBetween={10}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                      },
                      768: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                      },
                      1024: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                      },
                    }}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper mt-5"
                  >
                    {productOne &&
                      productOne?.object?.img &&
                      productOne?.object?.img?.length > 0 &&
                      productOne?.object?.img?.map((item, index) => {
                        return (
                          <SwiperSlide key={index}>
                            <img
                              src={item}
                              style={{
                                width: "80%",
                                textAlign: "center",
                                aspectRatio: 1 / 1,
                                objectFit: "cover",
                              }}
                              onClick={() => setActiveImg(index)}
                              className={
                                activeImg === index
                                  ? "border border-warning pointer"
                                  : "pointer"
                              }
                            />
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </div>

                <div className="product__des">
                  <h1>{productOne?.object?.title}</h1>
                  <p>{priceSplitter(productOne?.object?.price)}đ</p>
                  <div className="product__des-hr"></div>
                  <div className="product__des-size">
                    {listSize &&
                      listSize.length > 0 &&
                      listSize[0] !== undefined && (
                        <>
                          Kích thước : <span>{size || listSize[0]}</span>
                        </>
                      )}
                    <div className="product__des-size__box">
                      {listSize &&
                        listSize.length > 0 &&
                        listSize[0] !== undefined &&
                        listSize.map((item, index) => {
                          return (
                            <div
                              key={index}
                              onClick={() => {
                                setActiveSize(index);
                                setSize(item);
                              }}
                              className={
                                activeSize === index
                                  ? "border border-warning pointer"
                                  : "pointer"
                              }
                            >
                              {item}
                            </div>
                          );
                        })}
                    </div>
                  </div>
                  <div className="product__des-color">
                    Màu sắc : <span>{color || listColor[0]}</span>
                    <div className="product__des-color__box">
                      {listColor &&
                        listColor.length > 0 &&
                        listColor.map((item, index) => {
                          return (
                            <div
                              style={{ background: item }}
                              onClick={() => {
                                setActiveColor(index);
                                setColor(item);
                              }}
                              className={
                                activeColor === index
                                  ? "border border-warning pointer"
                                  : "pointer"
                              }
                              key={index}
                            ></div>
                          );
                        })}
                    </div>
                  </div>
                  <div className="product__des-brand">
                    Thương hiệu : <span>CN SHOP</span>
                  </div>
                  <div className="product__des-brand">
                    Tình trạng : <span>Còn {mount?.amount} sản phẩm</span>
                  </div>
                  <div className="product__des-qty">
                    <h4>Số lượng</h4>
                    <div className="product__des-qty__box">
                      <div onClick={handleDecreaseQty} className="pointer">
                        -
                      </div>
                      <div className="box__qty">
                        {/* {qty} */}
                        <input
                          type="number"
                          value={qty}
                          // min={1}
                          // max={mount?.amount}
                          onChange={(e) => handleChangeQty(e)}
                        />
                      </div>
                      <div onClick={handleIncreaseQty} className="pointer">
                        +
                      </div>
                    </div>
                  </div>
                  <button className="product__des-cart" onClick={addItem}>
                    <BiCartAlt />
                    <div>thêm vào giỏ hàng</div>
                  </button>
                  <div className="product__des-information">
                    <Accordion alwaysOpen>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Mô tả</Accordion.Header>
                        <Accordion.Body>
                          <div>
                            {productOne.categorySlug === "t-shirt" && (
                              <img
                                src="https://file.hstatic.net/1000281824/file/z3291450062342_7c744ecad156b4fae2d1f690dbc6d278_d70e1d3c21254e92a1858c4d3ee74800_grande.jpg"
                                width={"100%"}
                                className="mt-5"
                              />
                            )}
                            {productOne.categorySlug === "accessories" && (
                              <img
                                src="https://file.hstatic.net/1000281824/file/d3614aa6-a5b0-4b13-a95b-c7b66323e3aa_f2de08bcd2e34e299982b3976920ca40_grande.jpeg"
                                width={"100%"}
                              />
                            )}

                            {productOne.categorySlug !== "accessories" && (
                              <img
                                src="https://file.hstatic.net/1000281824/file/quan_ao_298ba0f0fd92429293e506277aa6322f_grande.jpg"
                                width={"100%"}
                                className="mt-5"
                              />
                            )}

                            <div className="product__des-information__policy">
                              <div className="product__des-information__policy-preserve">
                                <h5>Cách bảo quản</h5>
                                <div>
                                  <h5>- Không dùng chất tẩy rửa mạnh.</h5>
                                  <h5>- Không ngâm quá lâu trong nước.</h5>
                                  <h5>- Tránh ánh nắng trực tiếp.</h5>
                                </div>
                              </div>
                              <div className="product__des-information__policy-lie">
                                <h5>🔥 CHÍNH SÁCH ĐỔI SẢN PHẨM</h5>
                                <p>
                                  - Quý khách lưu ý giữ lại hoá đơn để đổi hàng
                                  trong vòng 30 ngày.
                                </p>
                                <p>
                                  - Đối với mặt hàng giảm giá, phụ kiện cá nhân
                                  (áo lót, khẩu trang, vớ ...) không nhận đổi
                                  hàng.
                                </p>
                                <p>
                                  - Tất cả sản phẩm đã mua sẽ không được đổi trả
                                  lại bằng tiền mặt.
                                </p>
                                <p>
                                  - Quý khách có thể đổi size hoặc sản phẩm khác
                                  trong 30 ngày (Lưu ý: sản phẩm chưa qua sử
                                  dụng, còn tag nhãn và hóa đơn mua hàng.)
                                </p>
                                <p>
                                  - Degrey xin không tiếp nhận giải quyết các
                                  trường hợp không thỏa các điều kiện trên.
                                </p>
                              </div>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          HỖ TRỢ GIAO HÀNG VỚI HOÁ ĐƠN TRÊN 150.000 VNĐ
                        </Accordion.Header>
                        <Accordion.Body style={{ fontSize: "1.4rem" }}>
                          <div>
                            - Hà Nội: Hoàn Kiếm, Ba Đình, Hai Bà Trưng, Đống Đa,
                            Cầu Giấy, Hoàng Mai, Tây Hồ, Từ Liêm, Thanh Xuân, Hà
                            Đông :
                            <span style={{ fontWeight: 600 }}>50.000k</span>
                          </div>
                          <div>
                            - Tp. Hồ Chí Minh: Q.1, Q.3, Q.4, Q.5, Q.6, Q.11,
                            Tân Phú, Tân Bình, Bình Thạnh, Gò Vấp, Phú Nhuận :
                            <span style={{ fontWeight: 600 }}>30.000k</span>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>
              </div>

              <div className="moreProduct">
                <div className="moreProduct__title">
                  <span>Sản phẩm liên quan</span>
                </div>
                <div className="moreProduct__body">
                  <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                      },
                      1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                      },
                    }}
                    className="mySwiper"
                  >
                    {moreProduct &&
                      moreProduct.length > 0 &&
                      moreProduct.map((item, index) => {
                        return (
                          <SwiperSlide>
                            <CardProductSlide
                              key={item.id}
                              name={item.title}
                              price={item.price}
                              img={item.img}
                              slug={item.slug}
                              id={item.id}
                            />
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </div>
              </div>
            </Container>
          </div>
        )}
        {/* <div>
          <Container className="mt-5">
            <div className="product">
              <div className="product__img">
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
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs, EffectCoverflow]}
                  className="mySwiper2"
                >
                  {productOne &&
                    productOne?.object?.img &&
                    productOne?.object?.img?.length > 0 &&
                    productOne?.object?.img.map((item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <img
                            src={item}
                            style={{
                              width: "70%",
                              aspectRatio: 1 / 1,
                              objectFit: "cover",
                            }}
                          />
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  slidesPerView={3}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 10,
                    },
                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 10,
                    },
                  }}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper mt-5"
                >
                  {productOne &&
                    productOne?.object?.img &&
                    productOne?.object?.img?.length > 0 &&
                    productOne?.object?.img?.map((item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <img
                            src={item}
                            style={{
                              width: "80%",
                              textAlign: "center",
                              aspectRatio: 1 / 1,
                              objectFit: "cover",
                            }}
                            onClick={() => setActiveImg(index)}
                            className={
                              activeImg === index
                                ? "border border-warning pointer"
                                : "pointer"
                            }
                          />
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>

              <div className="product__des">
                <h1>{productOne?.object?.title}</h1>
                <p>{priceSplitter(productOne?.object?.price)}đ</p>
                <div className="product__des-hr"></div>
                <div className="product__des-size">
                  {listSize &&
                    listSize.length > 0 &&
                    listSize[0] !== undefined && (
                      <>
                        Kích thước : <span>{size}</span>
                      </>
                    )}
                  <div className="product__des-size__box">
                    {listSize &&
                      listSize.length > 0 &&
                      listSize[0] !== undefined &&
                      listSize.map((item, index) => {
                        return (
                          <div
                            key={index}
                            onClick={() => {
                              setActiveSize(index);
                              setSize(item);
                            }}
                            className={
                              activeSize === index
                                ? "border border-warning pointer"
                                : "pointer"
                            }
                          >
                            {item}
                          </div>
                        );
                      })}
                  </div>
                </div>
                <div className="product__des-color">
                  Màu sắc : <span>{color}</span>
                  <div className="product__des-color__box">
                    {listColor &&
                      listColor.length > 0 &&
                      listColor.map((item, index) => {
                        return (
                          <div
                            style={{ background: item }}
                            onClick={() => {
                              setActiveColor(index);
                              setColor(item);
                            }}
                            className={
                              activeColor === index
                                ? "border border-warning pointer"
                                : "pointer"
                            }
                            key={index}
                          ></div>
                        );
                      })}
                  </div>
                </div>
                <div className="product__des-brand">
                  Thương hiệu : <span>CN SHOP</span>
                </div>
                <div className="product__des-qty">
                  <h4>Số lượng</h4>
                  <div className="product__des-qty__box">
                    <div onClick={handleDecreaseQty} className="pointer">
                      -
                    </div>
                    <div>{qty}</div>
                    <div onClick={handleIncreaseQty} className="pointer">
                      +
                    </div>
                  </div>
                </div>
                <button className="product__des-cart" onClick={addItem}>
                  <BiCartAlt />
                  <div>thêm vào giỏ hàng</div>
                </button>
                <div className="product__des-information">
                  <Accordion alwaysOpen>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Mô tả</Accordion.Header>
                      <Accordion.Body>
                        <div>
                          {productOne.categorySlug === "t-shirt" && (
                            <img
                              src="https://file.hstatic.net/1000281824/file/z3291450062342_7c744ecad156b4fae2d1f690dbc6d278_d70e1d3c21254e92a1858c4d3ee74800_grande.jpg"
                              width={"100%"}
                              className="mt-5"
                            />
                          )}
                          {productOne.categorySlug === "accessories" && (
                            <img
                              src="https://file.hstatic.net/1000281824/file/d3614aa6-a5b0-4b13-a95b-c7b66323e3aa_f2de08bcd2e34e299982b3976920ca40_grande.jpeg"
                              width={"100%"}
                            />
                          )}

                          {productOne.categorySlug !== "accessories" && (
                            <img
                              src="https://file.hstatic.net/1000281824/file/quan_ao_298ba0f0fd92429293e506277aa6322f_grande.jpg"
                              width={"100%"}
                              className="mt-5"
                            />
                          )}

                          <div className="product__des-information__policy">
                            <div className="product__des-information__policy-preserve">
                              <h5>Cách bảo quản</h5>
                              <div>
                                <h5>- Không dùng chất tẩy rửa mạnh.</h5>
                                <h5>- Không ngâm quá lâu trong nước.</h5>
                                <h5>- Tránh ánh nắng trực tiếp.</h5>
                              </div>
                            </div>
                            <div className="product__des-information__policy-lie">
                              <h5>🔥 CHÍNH SÁCH ĐỔI SẢN PHẨM</h5>
                              <p>
                                - Quý khách lưu ý giữ lại hoá đơn để đổi hàng
                                trong vòng 30 ngày.
                              </p>
                              <p>
                                - Đối với mặt hàng giảm giá, phụ kiện cá nhân
                                (áo lót, khẩu trang, vớ ...) không nhận đổi
                                hàng.
                              </p>
                              <p>
                                - Tất cả sản phẩm đã mua sẽ không được đổi trả
                                lại bằng tiền mặt.
                              </p>
                              <p>
                                - Quý khách có thể đổi size hoặc sản phẩm khác
                                trong 30 ngày (Lưu ý: sản phẩm chưa qua sử dụng,
                                còn tag nhãn và hóa đơn mua hàng.)
                              </p>
                              <p>
                                - Degrey xin không tiếp nhận giải quyết các
                                trường hợp không thỏa các điều kiện trên.
                              </p>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        HỖ TRỢ GIAO HÀNG VỚI HOÁ ĐƠN TRÊN 150.000 VNĐ
                      </Accordion.Header>
                      <Accordion.Body style={{ fontSize: "1.4rem" }}>
                        <div>
                          - Hà Nội: Hoàn Kiếm, Ba Đình, Hai Bà Trưng, Đống Đa,
                          Cầu Giấy, Hoàng Mai, Tây Hồ, Từ Liêm, Thanh Xuân, Hà
                          Đông :
                          <span style={{ fontWeight: 600 }}>50.000k</span>
                        </div>
                        <div>
                          - Tp. Hồ Chí Minh: Q.1, Q.3, Q.4, Q.5, Q.6, Q.11, Tân
                          Phú, Tân Bình, Bình Thạnh, Gò Vấp, Phú Nhuận :
                          <span style={{ fontWeight: 600 }}>30.000k</span>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>

            <div className="moreProduct">
              <div className="moreProduct__title">
                <span>Sản phẩm liên quan</span>
              </div>
              <div className="moreProduct__body">
                <Swiper
                  slidesPerView={2}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  }}
                  className="mySwiper"
                >
                  {moreProduct &&
                    moreProduct.length > 0 &&
                    moreProduct.map((item, index) => {
                      return (
                        <SwiperSlide>
                          <CardProductSlide
                            key={item.id}
                            name={item.title}
                            price={item.price}
                            img={item.img}
                            slug={item.slug}
                            id={item.id}
                          />
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
            </div>
          </Container>
        </div> */}
      </motion.div>
    </Helmet>
  );
};

export default PageProduct;
