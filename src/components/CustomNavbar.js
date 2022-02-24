import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CgChanel } from "react-icons/cg";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import "./CustomNavBar.scss";
export const CustomNavbar = () => {
  const [open, setOpen] = useState(false);
  const [openSubMenu1, setOpenSubMenu1] = useState(false);
  const [openSubMenu2, setOpenSubMenu2] = useState(false);
  const [openSubMenu3, setOpenSubMenu3] = useState(false);
  const [openMoreMenu1, setOpenMoreMenu1] = useState(false);
  const [openMoreMenu2, setOpenMoreMenu2] = useState(false);
  const [openMoreMenu3, setOpenMoreMenu3] = useState(false);
  return (
    <Container>
      {/* {console.log("open", open)} */}
      {console.log("openSubMenu1", openSubMenu1)}
      {/* {console.log("openSub2", openSubMenu2)}
      {console.log("openSub3", openSubMenu3)} */}
      {console.log("openMoreMenu1", openMoreMenu1)}
      {console.log("openMoreMenu2", openMoreMenu2)}
      {console.log("openMoreMenu3", openMoreMenu3)}
      <Row className="align-items-center justify-content-between">
        <Col
          xs={3}
          className="d-block d-xl-none"
          id="menu"
          onClick={() => setOpen(!open)}
        >
          <AiOutlineMenu size={"24px"} />
        </Col>
        <Col xs={3} lg={1} className="d-flex justify-content-center">
          <CgChanel size={"60px "} />
        </Col>
        <Col lg={9} id="menu-nav" className={`fixed ${open ? "left0" : ""}`}>
          <ul className="d-flex flex-col flex-wrap align-items-center  m-0 ">
            <li className="nav--item mx-3 fs-6 text-uppercase fw-normal borderBottom  ">
              <a className="nav--link ">trang chủ</a>
            </li>
            <li
              className=" nav--item mx-3 fs-6 text-uppercase fw-normal borderBottom "
              onClick={() => setOpenSubMenu1(!openSubMenu1)}
            >
              <a className="nav--link d-xl-flex align-items-center ">
                sản phẩm <BiChevronDown size={"20px"} className="hoverActive" />
              </a>
              <div
                className={`sub-menu shadow-sm ${
                  openSubMenu1 ? "active" : "nonActive"
                }`}
              >
                <ul className="sub-list">
                  <li className="more-menu">
                    <a>
                      Áo
                      <BiChevronRight
                        size={"20px"}
                        className="hoverActive1"
                        onClick={() => setOpenMoreMenu1(!openMoreMenu1)}
                      />
                    </a>
                    <div
                      className={`more-menu-list shadow-sm ${
                        openSubMenu1 && openMoreMenu1 ? "active" : "nonActive"
                      } `}
                    >
                      <ul className="more-menu-list1">
                        <li className="more-menu-item">
                          <a>Ao Thun</a>
                        </li>
                        <li className="more-menu-item">
                          <a>Ao Polo</a>
                        </li>
                        <li className="more-menu-item">
                          <a>Ao SoMi</a>
                        </li>
                        <li className="more-menu-item">
                          <a>Hoodie</a>
                        </li>
                        <li className="more-menu-item">
                          <a>Ao Tet Nham Dan</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="more-menu">
                    <a>
                      Quần{" "}
                      <BiChevronRight
                        size={"20px"}
                        className="hoverActive1"
                        onClick={() => setOpenMoreMenu2(!openMoreMenu2)}
                      />
                    </a>
                    <div
                      className={`more-menu-list shadow-sm  ${
                        openSubMenu1 && openMoreMenu2 ? "active" : "nonActive"
                      }  `}
                    >
                      <ul className="more-menu-list1">
                        <li className="more-menu-item">
                          <a>Quần Jean</a>
                        </li>
                        <li className="more-menu-item">
                          <a>Quần Short</a>
                        </li>
                        <li className="more-menu-item">
                          <a>Quần Jogger</a>
                        </li>
                        <li className="more-menu-item">
                          <a>Quần Tây</a>
                        </li>
                        <li className="more-menu-item">
                          <a>Quần Kaki & Chino</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="more-menu">
                    <a>
                      Giày & Phụ Kiện{" "}
                      <BiChevronRight
                        size={"20px"}
                        className="hoverActive1"
                        onClick={() => setOpenMoreMenu3(!openMoreMenu3)}
                      />
                    </a>
                    <div
                      className={`more-menu-list shadow-sm  ${
                        openSubMenu1 && openMoreMenu3 ? "active" : "nonActive"
                      }  `}
                    >
                      <ul className="more-menu-list1">
                        <li className="more-menu-item">
                          <a>Giày</a>
                        </li>
                        <li className="more-menu-item">
                          <a>Balo & Túi</a>
                        </li>
                        <li className="more-menu-item">
                          <a>Nón</a>
                        </li>
                        <li className="more-menu-item">
                          <a>Thắt Lưng</a>
                        </li>
                        <li className="more-menu-item">
                          <a>Mắt Kinh</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="more-menu">
                    <a>OutLet_Sale 30% - 70%</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className=" nav--item mx-3 fs-6 text-uppercase fw-normal borderBottom ">
              <a className="nav--link">hàng mới về</a>
            </li>
            <li
              className="nav--item mx-3 fs-6 text-uppercase fw-normal borderBottom "
              onClick={() => setOpenSubMenu2(!openSubMenu2)}
            >
              <a className="nav--link d-xl-flex align-items-center">
                bộ sưu tập{" "}
                <BiChevronDown size={"20px"} className="hoverActive" />
              </a>
              <div
                className={`sub-menu shadow-sm ${
                  openSubMenu2 ? "active" : "nonActive"
                }`}
              >
                <ul className="sub-list">
                  <li className="more-menu">
                    <a>ICON DENIM Meets Street Art x ZKHOA</a>
                  </li>
                  <li className="more-menu">
                    <a>[ICON DENIM X BIA SAIGON] Lên Cùng Việt Nam</a>
                  </li>
                  <li className="more-menu">
                    <a>Mister Sandman SS21</a>
                  </li>
                  <li className="more-menu">
                    <a>[Collab Project 21] The Art Of Hát Bội</a>
                  </li>
                  <li className="more-menu">
                    <a>The Show / Spring 2021</a>
                  </li>
                  <li className="more-menu">
                    <a>Moon Man FW20</a>
                  </li>
                  <li className="more-menu">
                    <a>Rhythm Recapture SS20</a>
                  </li>
                  <li className="more-menu">
                    <a>Playful Business SS20</a>
                  </li>
                  <li className="more-menu">
                    <a>Art Of Mess SS20</a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="nav--item mx-3 fs-6 text-uppercase fw-normal borderBottom "
              onClick={() => setOpenSubMenu3(!openSubMenu3)}
            >
              <a className="nav--link d-xl-flex align-items-center">
                chính sách hướng dẫn{" "}
                <BiChevronDown size={"20px"} className="hoverActive" />
              </a>
              <div
                className={`sub-menu shadow-sm ${
                  openSubMenu3 ? "active" : "nonActive"
                }`}
              >
                <ul className="sub-list">
                  <li className="more-menu">
                    <a>Chính sách đổi hàng và bảo hành</a>
                  </li>
                  <li className="more-menu">
                    <a>Chính sách membership</a>
                  </li>
                  <li className="more-menu">
                    <a>Phụ Kiện</a>
                  </li>
                  <li className="more-menu">
                    <a>Tra cứu đơn hàng</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav--item mx-3 fs-6 text-uppercase fw-normal borderBottom ">
              <a className="nav--link">địa chỉ cửa hàng</a>
            </li>
          </ul>
          <FaTimes
            size={"24px"}
            className="d-xl-none fixed__close"
            onClick={() => setOpen(!open)}
          />
        </Col>
        <Col xs={3} lg={2}>
          <div className="d-flex justify-content-between">
            <div id="search" className="d-none d-sm-block">
              <AiOutlineSearch size={"24px"} />
            </div>
            <div>
              <MdOutlineAccountCircle size={"24px"} />
            </div>
            <div>
              <AiOutlineShoppingCart size={"24px"} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
