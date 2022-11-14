import React, { useState, useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CgChanel } from "react-icons/cg";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { VscClose } from "react-icons/vsc";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
// import "./scss/CustomNavBar.scss";
import { Link, useNavigate } from "react-router-dom";
import { disableScrollBody } from "../helper/options/body-class";
import {
  handleDeleteListCart,
  handleUpdateListCart,
  logOut,
} from "../../redux/actions";
import { toast } from "react-toastify";
import axios from "axios";

export const CustomNavbar = () => {
  const [logout, setLogout] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSubMenu1, setOpenSubMenu1] = useState(false);
  const [openSubMenu2, setOpenSubMenu2] = useState(false);
  const [openSubMenu3, setOpenSubMenu3] = useState(false);
  const [openMoreMenu1, setOpenMoreMenu1] = useState(false);
  const [openMoreMenu2, setOpenMoreMenu2] = useState(false);
  const [openMoreMenu3, setOpenMoreMenu3] = useState(false);
  const [search, setSearch] = useState(false);
  const [qtyCart, setQtyCart] = useState(0);
  const qtyCartRedux = useSelector((state) => state.cart);
  const { loginGG, loginDB, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const inputRef = useRef("");
  const navigation = useNavigate();

  // console.log("check home gg :>>", loginGG);

  const onKeyDown = (event) => {
    // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      console.log("check search", inputRef.current.value);
      navigation(`/collections/${inputRef.current.value}`);
    }
  };

  const handleSearch = () => {
    navigation(`/collections/${inputRef.current.value}`);
  };

  const handleLogout = () => {
    toast.success("Logout Success", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(logOut());
    dispatch(handleDeleteListCart());
  };

  useEffect(() => {
    let qty = qtyCartRedux?.length;
    setQtyCart(qty);
  }, [qtyCartRedux]);

  useEffect(() => {
    disableScrollBody(open);
  }, [open]);

  useEffect(() => {
    const handleOnClickUser = (e) => {
      let dropDownUserElement = document.querySelector("#user");
      let activeElement = e.target;
      if (!dropDownUserElement?.contains(activeElement)) {
        setLogout(false);
      }
    };
    window.addEventListener("click", handleOnClickUser);

    return () => window.removeEventListener("click", handleOnClickUser);
  }, []);

  const handleScroll = () => {
    const currentScrollY = window?.scrollY;
    if (currentScrollY > 80) {
      setSearch(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getAllCart = async () => {
    let result = await axios.get("/cart/find-cart", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (result?.data?.code !== 200) {
      toast.success("Fail get all cart", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    // console.log("check all cart :>>", result);
    // const customListCart = result?.data?.object?.cartDetail?.map(
    //   (item, index) => {
    //     return { ...item, isActive: false };
    //   }
    // );
    dispatch(handleUpdateListCart(result?.data?.object?.cartDetail));
    // dispatch(handleUpdateListCart(customListCart));
  };

  useEffect(() => {
    getAllCart();
  }, []);

  return (
    <div className="py-2 position-relative padding-bottom">
      <Container>
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
            <Link to="/">
              <CgChanel size={"60px "} style={{ color: "black" }} />
            </Link>
          </Col>
          <Col
            lg={9}
            id="menu-nav"
            className={`fixed ${open ? " clip-path100" : ""}`}
          >
            <ul className="d-flex flex-col flex-wrap align-items-center  m-0 ">
              <li className="nav--item mx-3 fs-6 text-uppercase fw-normal borderBottom  ">
                <Link to="/" className="nav--link ">
                  trang chủ
                </Link>
              </li>
              <li className=" nav--item mx-3 fs-6 text-uppercase fw-normal borderBottom ">
                <a
                  className="nav--link d-xl-flex align-items-center "
                  onClick={() => setOpenSubMenu1(!openSubMenu1)}
                >
                  sản phẩm
                  <BiChevronDown size={"20px"} className="hoverActive" />
                </a>
                <div
                  className={`sub-menu shadow-sm ${
                    openSubMenu1 ? "active" : "nonActive"
                  }`}
                >
                  <ul className="sub-list">
                    <li className="more-menu">
                      <Link
                        to="collections/jacket/1"
                        onClick={() => setOpenMoreMenu1(!openMoreMenu1)}
                      >
                        Áo
                        <BiChevronRight
                          size={"20px"}
                          className="hoverActive1"
                        />
                      </Link>
                      <div
                        className={`more-menu-list shadow-sm ${
                          openMoreMenu1 ? "active" : "nonActive"
                        } `}
                      >
                        <ul className="more-menu-list1">
                          <Link
                            to="/collections/t-shirt/2"
                            className="more-menu-item"
                          >
                            <a>Ao Thun</a>
                          </Link>
                          <Link
                            to="/collections/t-shirt/2"
                            className="more-menu-item"
                          >
                            <a>Ao Polo</a>
                          </Link>
                          <Link
                            to="/collections/shirt/5"
                            className="more-menu-item"
                          >
                            <a>Ao SoMi</a>
                          </Link>
                          <Link
                            to="/collections/hoodie/3"
                            className="more-menu-item"
                          >
                            <a>Hoodie</a>
                          </Link>
                          <Link
                            to="/collections/t-shirt/2"
                            className="more-menu-item"
                          >
                            <a>Ao Tet Nham Dan</a>
                          </Link>
                        </ul>
                      </div>
                    </li>
                    <li className="more-menu">
                      <Link
                        to="collections/pant/4"
                        onClick={() => setOpenMoreMenu2(!openMoreMenu2)}
                      >
                        Quần
                        <BiChevronRight
                          size={"20px"}
                          className="hoverActive1"
                        />
                      </Link>
                      <div
                        className={`more-menu-list shadow-sm  ${
                          openMoreMenu2 ? "active" : "nonActive"
                        }  `}
                      >
                        <ul className="more-menu-list1">
                          <Link
                            to="collections/pant/4"
                            className="more-menu-item"
                          >
                            <a>Quần Jean</a>
                          </Link>
                          <Link
                            to="collections/pant/4"
                            className="more-menu-item"
                          >
                            <a>Quần Short</a>
                          </Link>
                          <Link
                            to="collections/pant/4"
                            className="more-menu-item"
                          >
                            <a>Quần Jogger</a>
                          </Link>
                          <Link
                            to="collections/pant/4"
                            className="more-menu-item"
                          >
                            <a>Quần Tây</a>
                          </Link>
                          <Link
                            to="collections/pant/4"
                            className="more-menu-item"
                          >
                            <a>Quần Kaki & Chino</a>
                          </Link>
                        </ul>
                      </div>
                    </li>
                    <li className="more-menu">
                      <Link
                        to="/collections/accessories/6"
                        onClick={() => setOpenMoreMenu3(!openMoreMenu3)}
                      >
                        Giày & Phụ Kiện
                        <BiChevronRight
                          size={"20px"}
                          className="hoverActive1"
                        />
                      </Link>
                      <div
                        className={`more-menu-list shadow-sm  ${
                          openMoreMenu3 ? "active" : "nonActive"
                        }`}
                      >
                        <ul className="more-menu-list1">
                          <Link
                            to="/collections/accessories/6"
                            className="more-menu-item"
                          >
                            <a>Giày</a>
                          </Link>
                          <Link
                            to="/collections/accessories/6"
                            className="more-menu-item"
                          >
                            <a>Balo & Túi</a>
                          </Link>
                          <Link
                            to="/collections/accessories/6"
                            className="more-menu-item"
                          >
                            <a>Nón</a>
                          </Link>
                          <Link
                            to="/collections/accessories/6"
                            className="more-menu-item"
                          >
                            <a>Thắt Lưng</a>
                          </Link>
                          <Link
                            to="/collections/accessories/6"
                            className="more-menu-item"
                          >
                            <a>Mắt Kinh</a>
                          </Link>
                        </ul>
                      </div>
                    </li>
                    <Link to="/collections/jacket/1" className="more-menu">
                      <a>OutLet_Sale 30% - 70%</a>
                    </Link>
                  </ul>
                </div>
              </li>
              <Link
                to="/collections/accessories/6"
                className=" nav--item mx-3 fs-6 text-uppercase fw-normal borderBottom "
              >
                <a className="nav--link">hàng mới về</a>
              </Link>
              <li className="nav--item mx-3 fs-6 text-uppercase fw-normal borderBottom ">
                <a
                  className="nav--link d-xl-flex align-items-center"
                  onClick={() => setOpenSubMenu2(!openSubMenu2)}
                >
                  bộ sưu tập
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
              <li className="nav--item mx-3 fs-6 text-uppercase fw-normal borderBottom ">
                <a
                  className="nav--link d-xl-flex align-items-center"
                  onClick={() => setOpenSubMenu3(!openSubMenu3)}
                >
                  chính sách hướng dẫn
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
            <VscClose
              size={"24px"}
              className="d-xl-none fixed__close"
              onClick={() => setOpen(!open)}
            />
          </Col>
          <Col xs={3} lg={2}>
            <div className="d-flex justify-content-between icon">
              <div id="search">
                {/* className="d-none d-sm-block" */}
                <AiOutlineSearch
                  size={"24px"}
                  onClick={() => setSearch(!search)}
                  className="pointer"
                />
              </div>
              <div>
                {loginGG?.emailVerified || loginDB?.email ? (
                  <div
                    className="info__user"
                    id="user"
                    onClick={() => setLogout(!logout)}
                  >
                    {loginGG?.displayName?.slice(0, 1) ||
                      loginDB?.email?.slice(0, 1)}
                    <div
                      className={`${logout ? "active" : ""} dropdown__logout`}
                    >
                      <span onClick={handleLogout}>Đăng xuất</span>
                      <span>Thông tin user</span>

                      {loginDB &&
                        loginDB?.role &&
                        loginDB?.role[0]?.authority === "ADMIN" && (
                          <span>
                            <Link to="/admin">Quản Lí Admin</Link>
                          </span>
                        )}
                    </div>
                  </div>
                ) : (
                  <Link
                    to="/sign-in"
                    // onClick={() => {
                    //   window.scrollTo({
                    //     top: 126,
                    //     left: 0,
                    //     behavior: "smooth",
                    //   });
                    // }}
                  >
                    <MdOutlineAccountCircle size={"24px"} className="pointer" />
                  </Link>
                )}
              </div>
              <div className="cart__navbar">
                <Link
                  to="cart"
                  // onClick={() => {
                  //   window.scrollTo({
                  //     top: 75,
                  //     left: 0,
                  //     behavior: "smooth",
                  //   });
                  // }}
                >
                  <AiOutlineShoppingCart size={"24px"} className="pointer" />
                </Link>
                <span>{qtyCart}</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className={`clickInput ${search ? "clip-path100" : ""}`}>
        <div className="logo">
          <CgChanel size={"60px"} />
        </div>
        <div className="formInput">
          <input
            type="text"
            placeholder="Tìm Kiếm..."
            onKeyDown={onKeyDown}
            ref={inputRef}
          />
          <button onClick={handleSearch}>
            <AiOutlineSearch size={"23px"} />
          </button>
        </div>
        <div className="deleteIcon">
          <VscClose
            className="pointer"
            size={"25px"}
            onClick={() => setSearch(!search)}
          />
        </div>
      </div>
      <div
        className={`fixed__blur ${open ? "clip-path100-blur" : ""}`}
        onClick={() => setOpen(!open)}
      ></div>
    </div>
  );
};
