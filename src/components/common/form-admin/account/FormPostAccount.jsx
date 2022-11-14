import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import Select from "react-select";
import { BiShowAlt } from "react-icons/bi";
import { GrFormViewHide } from "react-icons/gr";

import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ROLE = [
  { label: "Admin", value: "ADMIN" },
  { label: "User", value: "USER" },
];

const FormPostAccount = ({ handleCloseModal, setRefeshTableData }) => {
  const [showPass, setShowPass] = useState(false);

  const { token } = useSelector((state) => state.auth);

  const handleChangeCategory = (e) => {
    formik.setFieldValue("role", e.value);
  };

  const findValueInfoProduct = (options, value, convert) => {
    let checkCondition = options
      ? options.find((option) => option.value === value)
      : null;
    if (convert && checkCondition) {
      return checkCondition.label;
    }
    return checkCondition;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      role: "",
      passWord: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string()
        .required("Required")
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please Enter Email"),
      role: Yup.string().required("Required"),
      passWord: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/,
          "Password must be from  8-10 characters and contain at least one letter, one number, and one special characters"
        ),
    }),

    onSubmit: async (values) => {
      const { firstName, lastName, email, role, passWord } = values;
      const customData = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: passWord,
        // phoneNumber: "string",
        role: [
          {
            role: role,
          },
        ],
      };
      console.log("check custom Data :>>", customData);
      try {
        let response = await axios.post("/account/add-user", customData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("check response post account :>>", response);
        if (response?.data?.object) {
          toast.success(response?.data?.message);
          handleCloseModal();
          setRefeshTableData(Math.random() * 99999);
        }
      } catch (error) {
        console.log(error);
        toast.warn("Add Account Fail");
      }
    },
  });

  return (
    <form className="formPostProduct" onSubmit={formik.handleSubmit}>
      <div className="formPostProduct__title">
        <label>First Name</label>
        <input
          type="text"
          placeholder="Vui lòng điền firstName vào đây ..."
          id="firstName"
          name="firstName"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        <span className="errorMessage">{formik.errors.firstName}</span>
      </div>

      <div className="formPostProduct__price">
        <label>Last Name</label>
        <input
          type="text"
          placeholder="Vui lòng điền lastName vào đây ..."
          id="lastName"
          name="lastName"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <span className="errorMessage">{formik.errors.lastName}</span>
      </div>

      <div className="formPostProduct__discount">
        <label>Email</label>
        <input
          type="text"
          placeholder="Vui lòng điền email vào đây ..."
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <span className="errorMessage">{formik.errors.email}</span>
      </div>

      <div className="formPostProduct__category">
        <label>Role</label>
        <Select
          options={ROLE || []}
          // value={formik.values.category}
          value={findValueInfoProduct(ROLE || [], formik.values.role)}
          placeholder="--Choose role--"
          onChange={(e) => handleChangeCategory(e)}
        />
        <span className="errorMessage">{formik.errors.role}</span>
      </div>

      <div className="formPostProduct__discount">
        <label>Password</label>
        <div className="passWord__showIcon">
          <input
            type={showPass ? "text" : "password"}
            placeholder="Vui lòng điền mật khẩu vào đây ..."
            id="passWord"
            name="passWord"
            onChange={formik.handleChange}
            value={formik.values.passWord}
          />
          <div
            className="icon__Password colorBlackSvg"
            onClick={() => setShowPass(!showPass)}
            style={{ color: "black" }}
          >
            {showPass ? <GrFormViewHide size={18} /> : <BiShowAlt size={18} />}
          </div>
        </div>

        <span className="errorMessage">{formik.errors.passWord}</span>
      </div>

      <button type="submit">Thêm tài khoản</button>
    </form>
  );
};

export default FormPostAccount;
