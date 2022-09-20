import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/components/scss/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import AnimatedRoute from "./components/AnimatedRoute";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="product/:slug/:id" element={<PageProduct />} />
          <Route path="collections/:categorySlug" element={<Collections />} />
          <Route path="cart" element={<Cart />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="payment" element={<Payment />} />
        </Route>
      </Routes> */}
        <AnimatedRoute />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
