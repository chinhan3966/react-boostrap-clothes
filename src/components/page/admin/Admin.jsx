import React, { useState } from "react";
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

  return (
    <div className="wrapper__admin">
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
              <BsChevronDoubleLeft size={20} />
            </div>
          </div>
          <div className="navbarAdmin">
            <ul>
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
            <div
              className="menu__bar"
              onClick={() => setIsNavbar(!isShowNavbar)}
            >
              {isShowNavbar ? (
                <AiOutlineDoubleRight size={30} />
              ) : (
                <MdMenuOpen size={30} />
              )}
            </div>
            <div className="user">
              <div className="setting">
                <MdOutlineSettingsSuggest size={20} />
              </div>
              <div
                className="userDropDown"
                onClick={() => setIsDropDownUser(!isShowDropDownUser)}
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
