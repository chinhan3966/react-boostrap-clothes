import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import CardProductSlide from "../common/CardProductSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiCartAlt } from "react-icons/bi";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "swiper/css/effect-coverflow";

// import required modules
import { FreeMode, Navigation, Thumbs, EffectCoverflow } from "swiper";
import Helmet from "../common/Helmet";
import { addCart } from "../../redux/actions";
import { toast } from "react-toastify";
const PageProduct = () => {
  const { slug, id } = useParams();
  const data = useSelector((state) => state.listProduct.value.listProduct);
  const item = data.find((item) => item.slug === slug);
  console.log("check item", item);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeImg, setActiveImg] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const [activeColor, setActiveColor] = useState(0);

  const [moreProduct, setMoreProduct] = useState([]);

  const [qty, setQty] = useState(1);
  const [color, setColor] = useState(item.colors[0]);
  const [size, setSize] = useState(item && item.size && item.size[0]);

  const dispatch = useDispatch();

  useEffect(() => {
    const categorySlug = item.categorySlug;
    const product = data.filter((item) => item.categorySlug === categorySlug);
    setMoreProduct(product);
  }, [item]);

  const priceSplitter = (number) =>
    number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const handleDecreaseQty = () => {
    if (qty === 1) {
      setQty(1);
      return;
    }
    setQty(qty - 1);
  };

  const handleIncreaseQty = () => {
    setQty(qty + 1);
  };

  const addItem = () => {
    dispatch(
      addCart({
        id: item.id,
        img: item.img[0],
        name: item.title,
        price: item.price,
        qty: qty,
      })
    );
    toast.success("add product success", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <Helmet title={item.slug}>
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
                {item &&
                  item.img &&
                  item.img.length > 0 &&
                  item.img.map((item, index) => {
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
                {item &&
                  item.img &&
                  item.img.length > 0 &&
                  item.img.map((item, index) => {
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
              <h1>{item.title}</h1>
              <p>{priceSplitter(item.price)}??</p>
              <div className="product__des-hr"></div>
              <div className="product__des-size">
                {item && item.size && item.size.length > 0 && (
                  <>
                    K??ch th?????c : <span>{size}</span>
                  </>
                )}
                <div className="product__des-size__box">
                  {item &&
                    item.size &&
                    item.size.length > 0 &&
                    item.size.map((item, index) => {
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
                M??u s???c : <span>{color}</span>
                <div className="product__des-color__box">
                  {item &&
                    item.colors &&
                    item.colors.length > 0 &&
                    item.colors.map((item, index) => {
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
                        ></div>
                      );
                    })}
                </div>
              </div>
              <div className="product__des-brand">
                Th????ng hi???u : <span>CN SHOP</span>
              </div>
              <div className="product__des-qty">
                <h4>S??? l?????ng</h4>
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
                <div>th??m v??o gi??? h??ng</div>
              </button>
              <div className="product__des-information">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>M?? t???</Accordion.Header>
                    <Accordion.Body>
                      <div>
                        {item.categorySlug === "t-shirt" && (
                          <img
                            src="https://file.hstatic.net/1000281824/file/z3291450062342_7c744ecad156b4fae2d1f690dbc6d278_d70e1d3c21254e92a1858c4d3ee74800_grande.jpg"
                            width={"100%"}
                            className="mt-5"
                          />
                        )}
                        {item.categorySlug === "accessories" && (
                          <img
                            src="https://file.hstatic.net/1000281824/file/d3614aa6-a5b0-4b13-a95b-c7b66323e3aa_f2de08bcd2e34e299982b3976920ca40_grande.jpeg"
                            width={"100%"}
                          />
                        )}

                        {item.categorySlug !== "accessories" && (
                          <img
                            src="https://file.hstatic.net/1000281824/file/quan_ao_298ba0f0fd92429293e506277aa6322f_grande.jpg"
                            width={"100%"}
                            className="mt-5"
                          />
                        )}

                        <div className="product__des-information__policy">
                          <div className="product__des-information__policy-preserve">
                            <h5>C??ch b???o qu???n</h5>
                            <div>
                              <h5>- Kh??ng d??ng ch???t t???y r???a m???nh.</h5>
                              <h5>- Kh??ng ng??m qu?? l??u trong n?????c.</h5>
                              <h5>- Tr??nh ??nh n???ng tr???c ti???p.</h5>
                            </div>
                          </div>
                          <div className="product__des-information__policy-lie">
                            <h5>???? CH??NH S??CH ?????I S???N PH???M</h5>
                            <p>
                              - Quy?? kha??ch lu??u y?? giu???? la??i hoa?? ??o??n ??e???? ??o????i ha??ng
                              trong vo??ng 30 nga??y.
                            </p>
                            <p>
                              - ??o????i vo????i ma????t ha??ng gia??m gia??, phu?? kie????n ca?? nha??n (a??o
                              lo??t, kha????u trang, vo???? ...) kho??ng nha????n ??o????i ha??ng.
                            </p>
                            <p>
                              - Ta????t ca?? sa??n pha????m ??a?? mua se?? kho??ng ??u??o????c ??o????i tra?? la??i
                              ba????ng tie????n ma????t.
                            </p>
                            <p>
                              - Quy?? kha??ch co?? the???? ??o????i size hoa????c sa??n pha????m kha??c
                              trong 30 nga??y (Lu??u y??: sa??n pha????m chu??a qua su???? du??ng,
                              co??n tag nha??n va?? ho??a ??o??n mua ha??ng.)
                            </p>
                            <p>
                              - Degrey xin kho??ng tie????p nha????n gia??i quye????t ca??c tru??o????ng
                              ho????p kho??ng tho??a ca??c ??ie????u kie????n tre??n.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      H??? TR??? GIAO H??NG V???I HO?? ????N TR??N 150.000 VN??
                    </Accordion.Header>
                    <Accordion.Body style={{ fontSize: "1.4rem" }}>
                      <div>
                        - H?? N???i: Ho??n Ki????m, Ba ??i??nh, Hai B?? Tr??ng, ?????ng ??a, C???u
                        Gi???y, Ho??ng Mai, T??y H???, T??? Li??m, Thanh Xu??n, H?? ????ng :{" "}
                        <span style={{ fontWeight: 600 }}>50.000k</span>
                      </div>
                      <div>
                        - Tp. H??? Ch?? Minh: Q.1, Q.3, Q.4, Q.5, Q.6, Q.11, T??n
                        Ph??, T??n B??nh, B??nh Th???nh, G?? V???p, Ph?? Nhu???n :{" "}
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
              <span>S???n ph???m li??n quan</span>
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
    </Helmet>
  );
};

export default PageProduct;
