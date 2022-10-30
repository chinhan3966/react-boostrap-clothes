import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { BiShowAlt } from "react-icons/bi";
import { GrFormViewHide } from "react-icons/gr";

import { FastField, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import Helmet from "../../common/Helmet";
import axios from "axios";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      passWord: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("Required")
        .min(2, "Must be 2 characters or more"),
      lastName: Yup.string()
        .required("Required")
        .min(2, "Must be 2 characters or more"),
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
      const { email, firstName, lastName, passWord } = values;
      const data = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: passWord,
      };
      console.log("check data signup :>>", data);
      try {
        let res = await axios.post("account/register", data);
        console.log(res);
        if (res && res?.data && res?.data?.object) {
          // let token = res?.data?.object;
          // var decoded = jwt_decode(token);
          // console.log("check decode :>>", decoded);
          toast.success(res?.data?.message);
          navigate("/sign-in");
        }
      } catch (e) {
        console.log("fail login server", e.message);
        toast.warn("SignUp Fail");
      }
    },
  });
  return (
    <Helmet title="Đăng kí">
      <motion.div
        // initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
        // animate={{ clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)" }}
        // exit={{
        //   clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        //   transition: { duration: 0.1 },
        // }}
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{
          x: window.innerWidth,
          transition: { duration: 0.1 },
        }}
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
                  <div className="signin__container-body__form-firstname">
                    <label>FirstName</label>
                    <input
                      id="firstName"
                      name="firstName"
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                      type="text"
                      placeholder="Enter your firstname"
                    />
                    <span className="errorMessage">
                      {formik.errors.firstName}
                    </span>
                  </div>
                  <div className="signin__container-body__form-lastname">
                    <label>LastName</label>
                    <input
                      id="lastName"
                      name="lastName"
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                      type="text"
                      placeholder="Enter your lastname"
                    />
                    <span className="errorMessage">
                      {formik.errors.lastName}
                    </span>
                  </div>
                  <div className="signin__container-body__form-email">
                    <label>Email</label>
                    <input
                      id="email"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      type="text"
                      placeholder="Enter your email"
                    />
                    <span className="errorMessage">{formik.errors.email}</span>
                  </div>
                  <div className="signin__container-body__form-password">
                    <label>Password</label>
                    <div className="passWord__showIcon">
                      <input
                        type={showPass ? "text" : "password"}
                        id="passWord"
                        name="passWord"
                        onChange={formik.handleChange}
                        value={formik.values.passWord}
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
                  {/* <div className="signin__container-body__form-problem">
                <div className="signin__container-body__form-problem__remember">
                  <input type="checkbox" />
                  <span>Remember for 30 days</span>
                </div>
                <div className="signin__container-body__form-problem__forgot">
                  <span>Forgot password</span>
                </div>
              </div> */}
                  <button className="signin__container-body__form-submit">
                    Sign up
                  </button>
                </form>
              </div>
              <div className="signin__container-body__signup">
                Have an account?{" "}
                <span>
                  <Link
                    to="/sign-in"
                    onClick={() => {
                      window.scrollTo({
                        top: 126,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    Sign In
                  </Link>
                </span>
              </div>
              {/* <div className="signin__container-body__google">
            <FcGoogle />
            <span>Sign in with Google</span>
          </div> */}
            </div>
            <div className="signin__container-img">
              <img src="https://file.hstatic.net/1000383583/file/emptyname_20_s_638eaaab856c4b4bb6d16d9ae655b5bf.jpg" />
            </div>
          </div>
        </div>
      </motion.div>
    </Helmet>
  );
};

export default SignUp;
