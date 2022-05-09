import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CardProductSlide from "./common/CardProductSlide";

const BestSeller = () => {
  const [data, setData] = useState([]);
  const listRedux = useSelector((state) => state.listProduct.value.listProduct);
  // console.log(data);
  useEffect(() => {
    const filter = listRedux.filter((item) => item.discount > 20);
    const slice = filter.slice(0, 8);
    setData(slice);
  }, []);
  return (
    <Container>
      <div className="bestSeller">
        <h4>best sellers</h4>
        <p>sản phẩm bán chạy</p>
        <div className="bestSeller__space"></div>
      </div>
      <Row>
        {data &&
          data.length > 0 &&
          data.map((item, index) => {
            return (
              <Col xl={3} lg={4} md={6} sm={6} xs={6} key={index}>
                <CardProductSlide
                  name={item.title}
                  price={item.price}
                  img={item.img}
                />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default BestSeller;
