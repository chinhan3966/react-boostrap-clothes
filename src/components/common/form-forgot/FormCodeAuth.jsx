import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

const FormCodeAuth = ({
  handleCloseModalAuthCode,
  handleOpenModalPassWord,
  setCodeToken,
}) => {
  const handleChange = (event) => {
    const { value } = event.target;
    if (value.length > 6) return;

    formik.setFieldValue("code", event.target.value);
  };

  const formik = useFormik({
    initialValues: {
      code: "",
    },

    validationSchema: Yup.object({
      code: Yup.string().required("Required"),
      // .matches(/^(?=\D*\d)[^ ]{6,}$/, "Please Enter 6 character"),
    }),

    onSubmit: async (values) => {
      const { code } = values;
      const customCode = { token: code };
      console.log("check code :>>", customCode);
      try {
        let res = await axios.post("/account/check-code", customCode);
        if (res?.data?.object === 0) {
          throw res?.data?.message;
        }
        handleCloseModalAuthCode(false);
        handleOpenModalPassWord(true);
        setCodeToken(code);
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
        <div className="signin__container-body__form-email">
          <label style={{ color: "white" }}>Code</label>
          <input
            style={{ margin: "10px 0 20px 0" }}
            id="code"
            name="code"
            // onChange={formik.handleChange}
            onChange={handleChange}
            value={formik.values.code}
            type="text"
            placeholder="Enter your code authentication"
          />
          <span className="errorMessage">{formik.errors.code}</span>
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

export default FormCodeAuth;
