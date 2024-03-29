import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { CgChanel } from "react-icons/cg";
import { RiDashboardFill } from "react-icons/ri";
import { MdMenuOpen, MdOutlineSettingsSuggest } from "react-icons/md";
import { FaUserAstronaut } from "react-icons/fa";
import { AiOutlineDoubleRight, AiFillCaretDown } from "react-icons/ai";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { handleDeleteListCart, logOut } from "../../../redux/actions";

const Admin = () => {
  const [isShowNavbar, setIsNavbar] = useState(false);
  const [isShowDropDownUser, setIsDropDownUser] = useState(false);
  const [isShowDropDownSetting, setIsDropDownSetting] = useState(false);
  const [activeColorSideBar, setActiveColorSideBar] = useState("#2181f7");
  const [darkMode, setDarkMode] = useState(true);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigation = useNavigate();

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
    navigation("/");
  };

  const upDateStateShowNavBar = (e) => {
    setIsNavbar(!isShowNavbar);
    setIsDropDownUser(false);
    setIsDropDownSetting(false);
    e.stopPropagation();
  };

  const upDateStateDropDownSetting = () => {
    setIsDropDownUser(false);
    setIsDropDownSetting(!isShowDropDownSetting);
  };

  const upDateStateDropDownUser = () => {
    setIsDropDownUser(!isShowDropDownUser);
    setIsDropDownSetting(false);
  };

  useEffect(() => {
    const handleOnClickSetting = (e) => {
      let dropDownSettingElement = document.querySelector("#setting");
      let activeElement = e.target;
      if (!dropDownSettingElement.contains(activeElement)) {
        setIsDropDownSetting(false);
      }
    };
    window.addEventListener("click", handleOnClickSetting);

    return () => window.removeEventListener("click", handleOnClickSetting);
  }, []);

  useEffect(() => {
    const handleOnClickNavbar = (e) => {
      let dropDownSettingElement = document.querySelector("#navbar-admin");
      let activeElement = e.target;
      if (!dropDownSettingElement.contains(activeElement)) {
        setIsNavbar(false);
        console.log("active close navbar");
      }
    };
    window.addEventListener("click", handleOnClickNavbar);

    return () => window.removeEventListener("click", handleOnClickNavbar);
  }, []);

  useEffect(() => {
    const handleOnClickUser = (e) => {
      let dropDownUserElement = document.querySelector("#user-setting");
      let activeElement = e.target;
      if (!dropDownUserElement.contains(activeElement)) {
        setIsDropDownUser(false);
      }
    };
    window.addEventListener("click", handleOnClickUser);

    return () => window.removeEventListener("click", handleOnClickUser);
  }, []);

  return (
    <div className={`${darkMode ? "active" : ""} wrapper__admin`}>
      <div className="admin">
        <div className={`${isShowNavbar ? "active" : ""} admin__left`}>
          <div className="header__left">
            <Link to="/">
              <CgChanel size={40} />
            </Link>
            <span>cnshop</span>
            <div
              className="close__navbar-admin"
              onClick={() => setIsNavbar(false)}
            >
              <BsChevronDoubleLeft size={20} onClick={upDateStateShowNavBar} />
            </div>
          </div>
          <div className="navbarAdmin" id="navbar-admin">
            <ul style={{ background: activeColorSideBar }}>
              <li className={`${pathname.includes("product") ? "active" : ""}`}>
                <Link to="product">
                  <RiDashboardFill size={30} />
                  <span>Product</span>
                </Link>
              </li>
              <li
                className={`${pathname.includes("collection") ? "active" : ""}`}
              >
                <Link to="collection">
                  <RiDashboardFill size={30} />
                  <span>Collection</span>
                </Link>
              </li>
              <li className={`${pathname.includes("color") ? "active" : ""}`}>
                <Link to="color">
                  <RiDashboardFill size={30} />
                  <span>Color</span>
                </Link>
              </li>
              <li className={`${pathname.includes("size") ? "active" : ""}`}>
                <Link to="size">
                  <RiDashboardFill size={30} />
                  <span>Size</span>
                </Link>
              </li>
              <li className={`${pathname.includes("bill") ? "active" : ""}`}>
                <Link to="bill">
                  <RiDashboardFill size={30} />
                  <span>Bill</span>
                </Link>
              </li>
              <li className={`${pathname.includes("account") ? "active" : ""}`}>
                <Link to="account">
                  <RiDashboardFill size={30} />
                  <span>Account</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${isShowNavbar ? "active" : ""} admin__right`}>
          <div className="header__right">
            <div className="menu__bar" onClick={upDateStateShowNavBar}>
              {isShowNavbar ? (
                <AiOutlineDoubleRight size={30} />
              ) : (
                <MdMenuOpen size={30} />
              )}
            </div>
            <div className="user">
              <div
                className="setting"
                id="setting"
                onClick={upDateStateDropDownSetting}
              >
                <MdOutlineSettingsSuggest size={20} />
                <div
                  className={`dropdown-setting ${
                    isShowDropDownSetting ? "active" : ""
                  }`}
                  onClick={(e) => {
                    return e.stopPropagation();
                    setIsDropDownSetting(false);
                  }}
                >
                  <h3>sidebar background</h3>
                  <div className="list__navbar">
                    <div
                      className={`${
                        activeColorSideBar === "#2181f7" ? "active" : ""
                      } blue`}
                      onClick={() => setActiveColorSideBar("#2181f7")}
                    ></div>
                    <div
                      className={`${
                        activeColorSideBar === "#ff8400" ? "active" : ""
                      } orange`}
                      onClick={() => setActiveColorSideBar("#ff8400")}
                    ></div>
                    <div
                      className={`${
                        activeColorSideBar === "#ffc107" ? "active" : ""
                      } yellow`}
                      onClick={() => setActiveColorSideBar("#ffc107")}
                    ></div>
                  </div>
                  <div className="mode">
                    <div className="mode__light">
                      <span>light mode</span>
                      <div
                        className={`${darkMode ? "" : "active"} white`}
                        onClick={() => setDarkMode(false)}
                      ></div>
                    </div>
                    <div className="mode__dark">
                      <div
                        className={`${darkMode ? "active" : ""} black`}
                        onClick={() => setDarkMode(true)}
                      ></div>
                      <span>dark mode</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="userDropDown"
                id="user-setting"
                onClick={upDateStateDropDownUser}
              >
                <FaUserAstronaut size={20} />
                <AiFillCaretDown size={10} />
                <div
                  className={`${
                    isShowDropDownUser ? "active" : ""
                  } dropdown-user`}
                >
                  <ul>
                    <li>profile</li>
                    <li onClick={handleLogout}>Log out</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
