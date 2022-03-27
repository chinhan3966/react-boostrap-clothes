import React from "react";
import { Link } from "react-router-dom";
import "./CardProduct.scss";
const CardProduct = ({ imgFront, imgBack, title, price, item }) => {
  return (
    <div className="w-100">
      <div className="flip-card">
        <div className="flip-card-inner">
          {/* <Link to={`/product/${item.slug}`}> */}
          <div className="flip-card-front">
            <Link to={`/product/${item.slug}`}>
              <img
                src={imgFront}
                alt="Avatar"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  // aspectRatio: "1/1",
                }}
              />
            </Link>
          </div>

          <div className="flip-card-back">
            <Link to={`/product/${item.slug}`}>
              <img
                src={imgBack}
                alt="Avatar"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  // aspectRatio: "1/1",
                }}
              />
            </Link>
          </div>
          {/* </Link> */}
        </div>
      </div>
      <div className="flip-body text-center">
        <Link to={`/product/${item.slug}`}>
          <h4 className="text-uppercase">{title}</h4>
        </Link>
        <h6>{price}</h6>
      </div>
    </div>
  );
};

export default CardProduct;
