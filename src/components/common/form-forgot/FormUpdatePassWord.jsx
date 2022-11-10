import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

import { BiShowAlt } from "react-icons/bi";
import { GrFormViewHide } from "react-icons/gr";

const FormUpdatePassWord = ({ handleCloseModalPassWord, codeToken }) => {
  const [showPass, setShowPass] = useState(false);
  const [showPass1, setShowPass1] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    if (value.length > 6) return;

    formik.setFieldValue("code", event.target.value);
  };

  const formik = useFormik({
    initialValues: {
      passWord: "",
      conFirmNewPassWord: "",
    },

    validationSchema: Yup.object({
      passWord: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/,
          "Password must be from  8-10 characters and contain at least one letter, one number, and one special characters"
        ),
      conFirmNewPassWord: Yup.string()
        .required("Required")
        .oneOf(
          [Yup.ref("passWord")],
          "This field must be match with field password"
        ),
    }),

    onSubmit: async (values) => {
      const { passWord } = values;
      const customCode = { token: codeToken, password: passWord };
      console.log("check custom :>>", customCode);
      try {
        let res = await axios.post("/account/reset-password", customCode);
        if (res?.data?.object === 0) {
          throw res?.data?.message;
        }
        handleCloseModalPassWord(false);
        toast.success(res?.data?.message, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log(res);
      } catch (e) {
        console.log("fail check code auth server", e);
        toast.warn(e, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    },
  });
  return (
    <div className="form__email">
      <form
        style={{ width: "100% !important" }}
        // className="signin__container-body__form"
        onSubmit={formik.handleSubmit}
      >
        {/* <h3>Welcome back</h3>
        <p>Welcome back! Please enter your details.</p> */}
        <div
          className="signin__container-body__form-password"
          style={{ marginTop: "0px", marginBottom: "20px" }}
        >
          <label style={{ color: "white" }}>Password</label>
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

          <span className="errorMessage">{formik.errors.passWord}</span>
        </div>

        <div
          className="signin__container-body__form-password"
          style={{ marginTop: "0px", marginBottom: "20px" }}
        >
          <label style={{ color: "white" }}>Confirm Password</label>
          <div className="passWord__showIcon">
            <input
              type={showPass1 ? "text" : "password"}
              id="conFirmNewPassWord"
              name="conFirmNewPassWord"
              onChange={formik.handleChange}
              value={formik.values.conFirmNewPassWord}
              placeholder="Enter your confirm password"
            />
            <div
              className="icon__Password"
              onClick={() => setShowPass1(!showPass1)}
            >
              {showPass1 ? (
                <GrFormViewHide size={18} />
              ) : (
                <BiShowAlt size={18} />
              )}
            </div>
          </div>

          <span className="errorMessage">
            {formik.errors.conFirmNewPassWord}
          </span>
        </div>

        <button
          type="submit"
          className="signin__container-body__form-submit"
          style={{ margin: "0 auto", width: "150px" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormUpdatePassWord;
