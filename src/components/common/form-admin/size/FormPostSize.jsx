import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import Select from "react-select";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const FormPostSize = ({ handleCloseModal, setRefeshTableData }) => {
  const { token } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      title: "",
    },

    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
    }),

    onSubmit: async (values) => {
      const { title } = values;
      const customData = {
        nameSize: title,
      };
      console.log("check custom Data :>>", customData);
      try {
        let response = await axios.post("/size", customData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("check response post size :>>", response);
        if (response?.data?.object) {
          toast.success(response?.data?.message);
          handleCloseModal();
          setRefeshTableData(Math.random() * 99999);
        }
      } catch (error) {
        console.log(error);
        toast.warn("Add Size Fail");
      }
    },
  });

  return (
    <form className="formPostProduct" onSubmit={formik.handleSubmit}>
      <div className="formPostProduct__title">
        <label>Tên loại sản phẩm</label>
        <input
          type="text"
          placeholder="Vui lòng điền tên sản phẩm vào đây ..."
          id="title"
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <span className="errorMessage">{formik.errors.title}</span>
      </div>

      <button type="submit">Thêm size</button>
    </form>
  );
};

export default FormPostSize;
