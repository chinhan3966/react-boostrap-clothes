import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CardProductSlide = ({ name, price, img, slug, id }) => {
  const [listImg, setListImg] = useState([]);
  // const [imgDefault, setImgDefault] = useState("");
  const [dynamicImg, setDynamicImg] = useState(img && img[0]);
  const [activeBorder, setActiveBorder] = useState(0);

  useEffect(() => {
    if (Array.isArray(img)) {
      const slideList = img.slice(0, 3);
      setListImg(slideList);
      setDynamicImg(img[0]);
    }
  }, [img]);
  const priceSplitter = (number) =>
    number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  const handleOntop = (e) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="cardSlider">
      <Link to={`/product/${slug}/${id}`} onClick={handleOntop}>
        <div className="cardSlider__img">
          <img src={dynamicImg} />
        </div>
      </Link>

      <div className="cardSlider__des">
        <Link to={`/product/${slug}/${id}`} onClick={handleOntop}>
          <h2>{name}</h2>
        </Link>
        <p>{priceSplitter(price)}đ</p>
      </div>
      <div className="cardSlider__listImg">
        {listImg &&
          listImg.length > 0 &&
          listImg.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  onClick={() => {
                    setDynamicImg(item);
                    setActiveBorder(index);
                  }}
                  className={
                    activeBorder === index ? "border border-warning" : ""
                  }
                >
                  <img src={item} />
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default CardProductSlide;
