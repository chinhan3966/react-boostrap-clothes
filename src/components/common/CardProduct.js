import React from "react";
import { Link } from "react-router-dom";

const CardProduct = ({ imgFront, imgBack, title, price, item }) => {
  const handleOntop = (e) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const priceSplitter = (number) =>
    number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return (
    <div className="w-100" onClick={handleOntop}>
      <div className="flip-card">
        <div className="flip-card-inner">
          {/* <Link to={`/product/${item.slug}`}> */}
          <div className="flip-card-front">
            <Link to={`/product/${item.slug}/${item.id}`}>
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
            <Link to={`/product/${item.slug}/${item.id}`}>
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
        <Link to={`/product/${item.slug}/${item.id}`}>
          <h4 className="text-uppercase">{title}</h4>
        </Link>
        <h6>{priceSplitter(price)}đ</h6>
      </div>
    </div>
  );
};

export default CardProduct;
