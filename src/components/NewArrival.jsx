import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CardProductSlide from "./common/CardProductSlide";

const listCollections = [
  {
    id: 1,
    categorySlug: "hoodie",
    name: "hoodie",
  },
  {
    id: 2,
    categorySlug: "jacket",
    name: "jacket",
  },
  {
    id: 3,
    categorySlug: "accessories",
    name: "accessories",
  },
];
const NewArrival = () => {
  const listRedux = useSelector((state) => state.listProduct.value.listProduct);
  const [dataDynamic, setDataDynamic] = useState([]);
  const [imgDefault, setImageDefault] = useState("");
  console.log("check data dynamic", dataDynamic);
  const [activeCollection, setActiveCollection] = useState("hoodie");
  const [activeColor, setActiveColor] = useState(1);
  useEffect(() => {
    if (Array.isArray(listRedux)) {
      const filter = listRedux.filter(
        (item) => item.categorySlug === activeCollection
      );
      const slice = filter.slice(1, 5);
      setImageDefault(filter[0].img[0]);
      setDataDynamic(slice);
    }
  }, [activeCollection]);
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
    </Container>
  );
};

export default NewArrival;
