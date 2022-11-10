import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navigate, Redirect } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

//user
import App from "../App";
import Home from "./page/user/Home";
import PageProduct from "./page/user/PageProduct";
import Collections from "./page/user/Collections";
import Search from "./page/user/Search";
import Cart from "./page/user/Cart";
import SignIn from "./page/user/SignIn";
import SignUp from "./page/user/SignUp";
import Payment from "./page/user/Payment";
import NotFound from "./page/user/NotFound";
//user

//admin
import Admin from "./page/admin/Admin";
import Product from "./page/admin/Product";
import Bill from "./page/admin/Bill";
import Collection from "./page/admin/Collection";
import Color from "./page/admin/Color";
import Size from "./page/admin/Size";
import Account from "./page/admin/Account";
//admin

const AnimatedRoute = () => {
  const location = useLocation();
  const { loginDB } = useSelector((state) => state.auth);

  // const { loginGG } = useSelector((state) => state.auth);
  // console.log("check route login :>>", loginGG);
  //   const [admin, setAdmin] = useState(true);
  //   const informationUser = JSON.parse(sessionStorage.getItem("informationUser"));

  //   const signUp = useSelector((state) => state.blockpage.signUp);
  //   const login = useSelector((state) => state.blockpage.login);

  //   useEffect(async () => {
  //     var decoded = jwt_decode(informationUser);
  //     const { role } = decoded;
  //     console.log("check role", role);
  //     if (role === "ADMIN") {
  //       setAdmin(true);
  //     }
  //   }, [informationUser]);
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="product/:slug/:id" element={<PageProduct />} />
          <Route
            path="collections/:categorySlug/:id"
            element={<Collections />}
          />
          <Route path="collections/:search" element={<Search />} />
          <Route path="cart" element={<Cart />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="payment" element={<Payment />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        {loginDB && loginDB.role && loginDB?.role[0]?.authority === "ADMIN" && (
          <Route path="/admin" element={<Admin />}>
            <Route index element={<Product />} />
            <Route path="product" element={<Product />} />
            <Route path="collection" element={<Collection />} />
            <Route path="color" element={<Color />} />
            <Route path="size" element={<Size />} />
            <Route path="bill" element={<Bill />} />
            <Route path="account" element={<Account />} />
          </Route>
        )}
        {/* <Route path="/admin" element={<Admin />}>
          <Route index element={<Product />} />
          <Route path="product" element={<Product />} />
          <Route path="collection" element={<Collection />} />
          <Route path="color" element={<Color />} />
          <Route path="size" element={<Size />} />
          <Route path="bill" element={<Bill />} />
        </Route> */}
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoute;
