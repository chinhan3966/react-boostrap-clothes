import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoIosSend } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <div className="sentEmail">
        <Container className="sentEmail__container">
          <h4 className="sentEmail__container-title">
            đăng ký nhận khuyến mãi
          </h4>
          <div className="sentEmail__container-input">
            <input placeholder="Nhập email đăng ký của bạn ..." />
            <button>
              <IoIosSend />
            </button>
          </div>
        </Container>
      </div>

      <div className="footer">
        <Container>
          <Row>
            <Col className="footer__block1" xl={3} lg={12}>
              <h1>thông tin</h1>
              <div className="footer__block1-shop">
                <div>Trang chủ</div>
                <div>Danh sách cửa hàng</div>
                <div>
                  <img src="https://bizweb.dktcdn.net/100/331/067/themes/823380/assets/shopee1.png?1623012568345" />
                  <span>Shopee</span>
                </div>
                <div>
                  <img
                    width={"175px"}
                    height={"66px"}
                    src="https://bizweb.dktcdn.net/100/331/067/themes/811197/assets/bct.png"
                    style={{ aspectRatio: "16/9", marginRight: "0" }}
                  />
                </div>
              </div>
            </Col>
            <Col className="footer__block2" xl={6} lg={12}>
              <h1>young green</h1>
              <p>
                Young Green là thương hiệu thuộc CN SHOP. Hình ảnh được thiết kế
                và phát triển bởi YG Studio
              </p>
              <div className="footer__block2-shop">
                <div className="footer__block2-shop__icon">
                  <div>
                    <FaFacebookF size={"24px"} />
                  </div>
                  <div>
                    <AiFillInstagram size={"24px"} />
                  </div>
                  <div>
                    <BsYoutube size={"24px"} />
                  </div>
                </div>
              </div>
              <div className="footer__block2-fanpage"></div>
            </Col>
            <Col className="footer__block3" xl={3} lg={12}>
              <h1>chính sách</h1>
              <div className="footer__block3-policy">
                <div>Chính sách đổi hàng</div>
                <div>Chính sách bảo hành</div>
                <div>Chính sách hội viên</div>
                <div>Chính sách giao nhận</div>
                <div>Chính sách mua hàng</div>
                <div>Hướng dẫn mua hàng</div>
                <div>Hướng dẫn thanh toán</div>
                <div>Chính sách bảo mật</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
