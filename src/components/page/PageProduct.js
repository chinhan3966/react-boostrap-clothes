import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
const PageProduct = () => {
  const { slug, id } = useParams();
  const data = useSelector((state) => state.listProduct.value.listProduct);
  const item = data.find((item) => item.slug === slug);
  console.log("check", id);

  useEffect(async () => {
    try {
      let res = await axios.get(`localhost:8085/api/v1/product/${slug}`);
    } catch {}
  }, []);
  return <div>{slug}</div>;
};

export default PageProduct;
