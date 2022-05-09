import React, { useEffect, useState } from "react";

const CardProductSlide = ({ name, price, img }) => {
  const [listImg, setListImg] = useState([]);
  // const [imgDefault, setImgDefault] = useState("");
  const [dynamicImg, setDynamicImg] = useState(img[0]);
  const [activeBorder, setActiveBorder] = useState(0);
  // console.log("list img", listImg);
  useEffect(() => {
    if (Array.isArray(img)) {
      const slideList = img.slice(0, 3);
      setListImg(slideList);
      setDynamicImg(img[0]);
    }
  }, [img]);
  const priceSplitter = (number) =>
    number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return (
    <div className="cardSlider">
      <div className="cardSlider__img">
        <img src={dynamicImg} />
      </div>
      <div className="cardSlider__des">
        <h2>{name}</h2>
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
