import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { CgChanel } from "react-icons/cg";
import { RiDashboardFill } from "react-icons/ri";
import { MdMenuOpen, MdOutlineSettingsSuggest } from "react-icons/md";
import { FaUserAstronaut } from "react-icons/fa";
import { AiOutlineDoubleRight, AiFillCaretDown } from "react-icons/ai";
import { BsChevronDoubleLeft } from "react-icons/bs";

const Admin = () => {
  const [isShowNavbar, setIsNavbar] = useState(false);
  const [isShowDropDownUser, setIsDropDownUser] = useState(false);
  const [isShowDropDownSetting, setIsDropDownSetting] = useState(false);
  const [activeColorSideBar, setActiveColorSideBar] = useState("#2181f7");
  const [darkMode, setDarkMode] = useState(true);

  const upDateStateShowNavBar = () => {
    setIsNavbar(!isShowNavbar);
    setIsDropDownUser(false);
    setIsDropDownSetting(false);
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
          <div className="navbarAdmin">
            <ul style={{ background: activeColorSideBar }}>
              <li>
                <RiDashboardFill size={30} />
                <span>Dashboard</span>
              </li>
              <li>
                <RiDashboardFill size={30} />
                <span>Dashboard</span>
              </li>
              <li>
                <RiDashboardFill size={30} />
                <span>Dashboard</span>
              </li>
              <li>
                <RiDashboardFill size={30} />
                <span>Dashboard</span>
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
                    <li>Log out</li>
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
