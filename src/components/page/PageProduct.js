import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
const PageProduct = () => {
  const { slug, id } = useParams();
  const data = useSelector((state) => state.listProduct.value.listProduct);
  const item = data.find((item) => item.slug === slug);
  console.log("check", id);

  return <div>{slug}</div>;
};

export default PageProduct;
