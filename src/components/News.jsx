import React, { useRef, useState } from "react";
import { Container } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const listNew = [
  {
    id: 1,
    img: "https://bizweb.dktcdn.net/thumb/large/100/331/067/articles/279098704-2222482217907448-9166894622649177905-n.jpg?v=1650789416950",
    title: "CHÀO MỪNG ĐẠI LỄ 30/04 - 01/05 | 𝙎𝘼𝙇𝙀 𝙊𝙁𝙁 𝙐𝙋𝙏𝙊 70%",
    description:
      "CHÀO MỪNG ĐẠI LỄ 30/04 - 01/05 𝙎𝘼𝙇𝙀 𝙊𝙁𝙁 𝙐𝙋𝙏𝙊 70% Mừng Đại Lễ 30/4-1/5, YG Shop gửi đến bạn cơ hội nhận ưu đãi lên đến 70% tất cả các sản phẩm. Đặc biệt rất...",
  },
  {
    id: 2,
    img: "https://bizweb.dktcdn.net/thumb/large/100/331/067/articles/201489295-1997651917057147-1061873182853180694-n.jpg?v=1625576099337",
    title: "❤️‍🔥stay home and shopping❤️‍🔥",
    description:
      "07/07 săn sale sốc nhiệt lên đến 70% cùng CN SHOP, ở nhà chống dịch nhưng đừng bỏ lỡ cơ hội săn sale hốt được nhứng item best seller với mức giá cực sốc cùng CN SHOP ",
  },
  {
    id: 3,
    img: "https://bizweb.dktcdn.net/thumb/large/100/331/067/articles/191731369-1970303873125285-7851866387332580118-n.jpg?v=1622844378397",
    title: "stay home stay safe [freeship - miễn phí vận chuyển ]",
    description:
      "Theo  công văn chính thức của Chính phủ về việc giãn cách xã hội  trước  tình hình diễn biến phức tạp của dịch bệnh SARS-CoV-2, YG SHOP xin phép được tạm đóng cửa các Store",
  },
  {
    id: 4,
    img: "https://file.hstatic.net/1000360022/article/271795973_1574282416298187_5394937596153332571_n_00a828f48fe64d538a6db7bc3a0dc62e_grande.jpeg",
    title: `tết nhâm thân mặc gì cho "fashion" #2`,
    description:
      "Theo  công văn chính thức của Chính phủ về việc giãn cách xã hội  trước  tình hình diễn biến phức tạp của dịch bệnh SARS-CoV-2, YG SHOP xin phép được tạm đóng cửa các Store",
  },
];

const News = () => {
  return (
    <Container>
      <div className="news-title">
        <h4>tin tức</h4>
        <p>Cập nhật tin tức từ CN SHOP</p>
      </div>
      <div className="news">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="mySwiper"
        >
          {listNew &&
            listNew.length > 0 &&
            listNew.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="news__block">
                    <div className="news__block-img">
                      <img src={item.img} />
                    </div>
                    <div className="news__block-des">
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </Container>
  );
};

export default News;
