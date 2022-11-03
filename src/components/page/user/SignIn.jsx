import React, { useState } from "react";
import { motion } from "framer-motion";
import jwt_decode from "jwt-decode";

import { Container } from "react-bootstrap";
import { BiShowAlt } from "react-icons/bi";
import { GrFormViewHide } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { FastField, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";

//firebase
import { authentication } from "../../../firebase/config";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import {
  addInformationDB,
  addInformationGG,
  addTokenLogin,
  removeInformationGG,
} from "../../../redux/actions";
import Helmet from "../../common/Helmet";
import { toast } from "react-toastify";
import axios from "axios";

const SignIn = () => {
  // const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  // onAuthStateChanged(authentication, (currentUser) => {
  //   setUser(currentUser);
  // });

  const handleLoginGg = async () => {
    const provider = new GoogleAuthProvider();
    try {
      let respone = await signInWithPopup(authentication, provider);
      console.log("check response gg :>>", respone);
      if (!respone?.user?.accessToken) {
        throw "Đăng nhập thất bại";
      }
      // dispatch(addInformationGG(respone?.user));
      const { uid, email, displayName } = respone?.user;
      const customData = {
        displayName: displayName,
        email: email,
        uId: uid,
      };
      const resGg = await axios.post("/account/login-gg", customData);
      console.log("check res gg to server ::>", resGg);
      if (resGg?.data?.object) {
        let token = resGg?.data?.object;
        var decoded = jwt_decode(token);
        console.log("converrt decode :>>", decoded);
        dispatch(addInformationDB(decoded));
        dispatch(addTokenLogin(token));
        toast.success(resGg?.data?.message);

        if (decoded?.role[0]?.authority === "ADMIN") {
          navigate("/admin");
          return;
        }
        navigate("/");
      }
      // navigate("/");
      // toast.success("Login Success");
    } catch (error) {
      console.log(error);
      toast.warn("Login Fail");
    }
    // .then((res) => {
    //   console.log(res.user.email);
    //   setEmail(res.user.email);
    // })
    // .catch((err) => {
    //   console.log(err.message);
    // });
  };

  // const handleSignOut = async () => {
  //   // signOut(authentication)
  //   //   .then((res) => {
  //   //     console.log("Sign out successfully");
  //   //     setEmail("");
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log("fail signOut");
  //   //   });
  //   try {
  //     let response = await signOut(authentication);
  //     dispatch(removeInformationGG());
  //     // console.log("check response logout :>>", response);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const formik = useFormik({
    initialValues: {
      email: "",
      passWord: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .required("Required")
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please Enter Email"),

      passWord: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/,
          "Password must be from  8-10 characters and contain at least one letter, one number, and one special characters"
        ),
    }),

    onSubmit: async (values) => {
      const { email, passWord } = values;

      const data = { userName: email, password: passWord };
      console.log("check custom value :>>", data);
      try {
        let res = await axios.post("account/login", data);
        console.log(res);
        if (res && res?.data && res?.data?.object) {
          let token = res?.data?.object;
          var decoded = jwt_decode(token);
          console.log("check decode :>>", decoded);
          dispatch(addInformationDB(decoded));
          dispatch(addTokenLogin(token));
          toast.success(res?.data?.message);
          if (decoded?.role[0]?.authority === "ADMIN") {
            navigate("/admin");
            return;
          }
          navigate("/");
        }
        // const covertRes = JSON.parse(res?.data);
        // console.log("check result login database :>>", covertRes);
        // if (res && res.data && res.data.data) {
        //   dispatch(blockSignUp(false));
        //   dispatch(blockLogin(false));
        //   let tokenJWT = res.data.data.token;
        //   sessionStorage.setItem("informationUser", JSON.stringify(tokenJWT));
        //   if (isChecked) {
        //     Cookies.set("token", tokenJWT, { expires: 30 });
        //   }
        //   if (res.data.data.role.name === "ADMIN") {
        //     navigation("/admin");
        //   }
        //   if (res.data.data.role.name === "USER") {
        //     navigation("/");
        //   }
        //   window.scrollTo({
        //     top: 0,
        //     left: 0,
        //     behavior: "smooth",
        //   });
        // }
      } catch (e) {
        console.log("fail login server", e.message);
        toast.warn("Login Fail");
      }
    },
  });
  return (
    <Helmet title="Đăng nhập">
      <motion.div
        initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
        animate={{ clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)" }}
        exit={{
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
          transition: { duration: 0.1 },
        }}
        // initial={{ width: 0 }}
        // animate={{ width: "100%" }}
        // exit={{
        //   x: window.innerWidth,
        //   transition: { duration: 0.1 },
        // }}
      >
        <div className="signin">
          <div className="signin__container" style={{ background: "white" }}>
            <div className="signin__container-body">
              <div className="d-flex justify-content-center  align-items-center">
                <form
                  className="signin__container-body__form"
                  onSubmit={formik.handleSubmit}
                >
                  <h3>Welcome back</h3>
                  <p>Welcome back! Please enter your details.</p>
                  <div className="signin__container-body__form-email">
                    <label>Email</label>
                    <input
                      id="email"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      type="text"
                      placeholder="Enter your name"
                    />
                    <span className="errorMessage">{formik.errors.email}</span>
                  </div>
                  <div className="signin__container-body__form-password">
                    <label>Password</label>
                    <div className="passWord__showIcon">
                      <input
                        id="passWord"
                        name="passWord"
                        onChange={formik.handleChange}
                        value={formik.values.passWord}
                        type={showPass ? "text" : "password"}
                        placeholder="Enter your password"
                      />
                      <div
                        className="icon__Password"
                        onClick={() => setShowPass(!showPass)}
                      >
                        {showPass ? (
                          <GrFormViewHide size={18} />
                        ) : (
                          <BiShowAlt size={18} />
                        )}
                      </div>
                    </div>
                    <span className="errorMessage">
                      {formik.errors.passWord}
                    </span>
                  </div>
                  <div className="signin__container-body__form-problem">
                    <div className="signin__container-body__form-problem__remember">
                      <input type="checkbox" />
                      <span>Remember for 30 days</span>
                    </div>
                    <div className="signin__container-body__form-problem__forgot">
                      <span>Forgot password</span>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="signin__container-body__form-submit"
                  >
                    Sign in
                  </button>
                </form>
              </div>
              <div className="signin__container-body__signup">
                Don't have an account?
                <span>
                  <Link
                    to="/sign-up"
                    // onClick={() => {
                    //   window.scrollTo({
                    //     top: 126,
                    //     left: 0,
                    //     behavior: "smooth",
                    //   });
                    // }}
                  >
                    Sign Up
                  </Link>
                </span>
              </div>
              <div
                className="signin__container-body__google"
                onClick={handleLoginGg}
                style={{ cursor: "pointer" }}
              >
                <FcGoogle />
                <span>Sign in with Google</span>
              </div>
              {/* <button onClick={handleSignOut}>SignOut</button> */}
            </div>
            <div className="signin__container-img">
              <img src="https://file.hstatic.net/1000360022/collection/dsc03238_713b806b9bb5414bad483f5a15cc5ab9_master.jpg" />
            </div>
          </div>
        </div>
      </motion.div>
    </Helmet>
  );
};

export default SignIn;
