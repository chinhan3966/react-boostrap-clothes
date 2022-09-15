import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import App from "../App";
import Home from "./page/Home";
import PageProduct from "./page/PageProduct";
import Collections from "./page/Collections";
import Cart from "./page/Cart";
import SignIn from "./page/SignIn";
import SignUp from "./page/SignUp";
import Payment from "./page/Payment";

const AnimatedRoute = () => {
  const location = useLocation();
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
          <Route path="collections/:categorySlug" element={<Collections />} />
          <Route path="cart" element={<Cart />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="payment" element={<Payment />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoute;
