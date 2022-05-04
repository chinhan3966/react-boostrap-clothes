import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Collections = () => {
  const { slug } = useParams();
  const data = useSelector((state) => state.listProduct.value.listProduct);
  const listCollections = data.filter((item) => item.categorySlug === slug);
  console.log(listCollections);
  return <div>Collections</div>;
};

export default Collections;
