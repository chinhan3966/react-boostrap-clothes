import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const PageProduct = () => {
  const { slug } = useParams();
  const data = useSelector((state) => state.listProduct.value.listProduct);
  const item = data.find((item) => item.slug === slug);
  console.log(item);
  return <div>{item.slug}</div>;
};

export default PageProduct;
