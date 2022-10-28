import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import Select from "react-select";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { toast } from "react-toastify";

const FormPutSize = ({ handleCloseModal, setRefeshTableData, dataPut }) => {
  console.log("check size:>>", dataPut);

  const formik = useFormik({
    initialValues: {
      title: dataPut?.nameSize || "",
    },

    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
    }),

    onSubmit: async (values) => {
      const { title } = values;
      const customData = {
        nameSize: title,
        id: dataPut?.id,
      };
      console.log("check custom Data :>>", customData);
      try {
        let response = await axios.put("/size", customData);
        console.log("check response put size :>>", response);
        if (response?.data?.object) {
          toast.success(response?.data?.message);
          handleCloseModal();
          setRefeshTableData(Math.random() * 99999);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <form className="formPostProduct" onSubmit={formik.handleSubmit}>
      <div className="formPostProduct__title">
        <label>Mã màu sản phẩm</label>
        <input
          type="text"
          placeholder="Vui lòng điền tên sản phẩm vào đây ..."
          id="title"
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title || "#fff"}
        />
        <span className="errorMessage">{formik.errors.title}</span>
      </div>

      <button type="submit">Cập nhật</button>
    </form>
  );
};

export default FormPutSize;
