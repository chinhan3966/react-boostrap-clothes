import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CardProductSlide from "./common/CardProductSlide";

const BestSeller = ({ setLoadingSeller }) => {
  const [data, setData] = useState([]);
  const listRedux = useSelector((state) => state.listProduct.value.listProduct);
  // console.log(data);
  useEffect(async () => {
    try {
      setLoadingSeller(true);
      let response = await axios.get("/product/all");
      // console.log("check tShirt :>>", response);
      if (response?.data?.length < 0) {
        throw "Lỗi server";
      }
      const filter = response?.data.filter((item) => item.discount > 20);
      const slice = filter.slice(8, 16);
      setData(slice);
      setLoadingSeller(false);
    } catch (error) {
      console.log(error);
    }
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
          data?.length > 0 &&
          data?.map((item, index) => {
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
    </Container>
  );
};

export default BestSeller;
