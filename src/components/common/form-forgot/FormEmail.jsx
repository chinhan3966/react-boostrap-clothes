import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

const FormEmail = ({ handleCloseModalForgot, handleOpenModalAuthCode }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .required("Required")
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please Enter Email"),
    }),

    onSubmit: async (values) => {
      const { email } = values;
      const customEmail = { userName: email };
      try {
        let res = await axios.post(
          "/account/create-reset-password",
          customEmail
        );
        if (res?.data?.object === 0) {
          throw res?.data?.message;
        }
        handleCloseModalForgot(false);
        handleOpenModalAuthCode(true);
        console.log(res);
      } catch (e) {
        console.log("fail email  server", e);
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
        <div className="signin__container-body__form-email">
          <label style={{ color: "white" }}>Email</label>
          <input
            style={{ margin: "10px 0 20px 0" }}
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            type="text"
            placeholder="Enter your email"
          />
          <span className="errorMessage">{formik.errors.email}</span>
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

export default FormEmail;
