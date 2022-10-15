import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CardProductSlide from "./common/CardProductSlide";
import Loading from "../components/common/loading/Loading";
const listCollections = [
  {
    id: 3,
    categorySlug: "hoodie",
    name: "hoodie",
  },
  {
    id: 1,
    categorySlug: "jacket",
    name: "jacket",
  },
  {
    id: 6,
    categorySlug: "accessories",
    name: "accessories",
  },
];
const NewArrival = ({ setLoadingArrival }) => {
  const listRedux = useSelector((state) => state.listProduct.value.listProduct);

  const [dataDynamic, setDataDynamic] = useState([]);
  const [imgDefault, setImageDefault] = useState("");

  const [activeCollection, setActiveCollection] = useState("hoodie");
  const [activeColor, setActiveColor] = useState(3);
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   if (Array.isArray(listRedux)) {
  //     const filter = listRedux.filter(
  //       (item) => item.categorySlug === activeCollection
  //     );
  //     const slice = filter.slice(1, 5);
  //     setImageDefault(filter[0].img[0]);
  //     setDataDynamic(slice);
  //   }
  // }, [activeCollection]);

  useEffect(async () => {
    // setTimeout(async () => {
    try {
      setLoadingArrival(true);
      setLoading(true);
      let response = await axios.get(`/product/?param=${activeColor}`);
      // console.log("check response filter :>>", response);
      if (response?.data?.length < 0) {
        throw "Lỗi server";
      }
      const slice = response?.data?.slice(1, 5);
      setImageDefault(response?.data[0].img[0]);
      setDataDynamic(slice);
      setLoading(false);
      setLoadingArrival(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setLoadingArrival(false);
    }
    // }, 2000);
  }, [activeColor]);
  return (
    <Container>
      <div className="newArrival-title">
        <h4>new arrival</h4>
        <div className="newArrival-title__parent">
          {listCollections &&
            listCollections.length > 0 &&
            listCollections.map((item, index) => {
              return (
                <h5
                  onClick={() => {
                    setActiveCollection(item.categorySlug);
                    setActiveColor(item.id);
                  }}
                  key={index}
                  className={activeColor === item.id ? "ff8400" : ""}
                >
                  {item.name}
                  {activeColor === item.id ? <span></span> : ""}
                </h5>
              );
            })}
        </div>
      </div>
      {loading ? (
        <div style={{ width: "100%", height: "500px" }}>
          <Loading />
        </div>
      ) : (
        <Row className="newArrival">
          <Col lg={6} className="newArrival__block1">
            <div>
              <div>
                {imgDefault && <img src={imgDefault} alt="default img" />}
              </div>
            </div>
          </Col>
          <Col lg={6} className="newArrival__block2">
            <Row>
              {dataDynamic &&
                dataDynamic.length > 0 &&
                dataDynamic.map((item, index) => {
                  return (
                    <Col sm={6} xs={6} key={index}>
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
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default NewArrival;
