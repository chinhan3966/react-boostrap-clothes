import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import Select from "react-select";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const FormPutCategory = ({ handleCloseModal, setRefeshTableData, dataPut }) => {
  console.log("check category :>>", dataPut);
  const [linkImg, setLinkImg] = useState("");
  const [indexChangeLinkImg, setIndexChangeLinkImg] = useState(null);
  const [blockButtonUpdateImg, setBlockButtonUpdateImg] = useState(false);
  console.log("state img :>>", linkImg, indexChangeLinkImg);

  const { token } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      title: dataPut?.categorySlug || "",
      img: dataPut?.img || [],
    },

    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      img: Yup.array()
        .of(Yup.string())
        .test("Min test", "Must have atleast 1 items", function (item) {
          let totalAmount = item.length;

          if (Array.isArray(this.parent.array2)) {
            totalAmount += this.parent.array2.length;
          }

          return totalAmount >= 1;
        }),
    }),

    onSubmit: async (values) => {
      const { title, img } = values;
      const customData = {
        categorySlug: title,
        img,
        id: dataPut?.id,
      };
      console.log("check custom Data :>>", customData);
      try {
        let response = await axios.put("/category", customData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("check response put category :>>", response);
        if (response?.data?.object) {
          toast.success(response?.data?.message);
          handleCloseModal();
          setRefeshTableData(Math.random() * 99999);
        }
      } catch (error) {
        console.log(error);
        toast.warn("Update Category Fail");
      }
    },
  });

  const handleAddImage = () => {
    if (linkImg) {
      formik.setFieldValue("img", [...formik.values.img, linkImg]);
      setLinkImg("");
    }
  };

  const handleDeleteImage = (item) => {
    console.log("item img :>>", item);
    let cloneListImg = [...formik.values.img];
    console.log("check delete before:>>", cloneListImg);
    cloneListImg.splice(item, 1);
    formik.setFieldValue("img", cloneListImg);
    console.log("check delete after :>>", cloneListImg);
  };

  const handleChangeStateImg = (item, index) => {
    console.log("check update img :>>", item, index);
    setIndexChangeLinkImg(index);
    setLinkImg(item);
    setBlockButtonUpdateImg(true);
  };

  const handleUpdateImg = () => {
    let cloneListImg = [...formik.values.img];
    let dataUpdate = cloneListImg.map((item, index) =>
      index === indexChangeLinkImg ? linkImg : item
    );
    formik.setFieldValue("img", dataUpdate);
    setLinkImg("");
    setBlockButtonUpdateImg(false);
    console.log("update image :>>", dataUpdate);
  };

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

      <div className="formPostProduct__img">
        <div className="formPostProduct__img-add">
          <label>Hình ảnh</label>
          <div style={{ display: "flex" }}>
            <button
              type="button"
              onClick={handleUpdateImg}
              className={
                blockButtonUpdateImg ? "buttonActive" : "buttonUnActive"
              }
            >
              <CgArrowsExchangeAltV size={20} />
            </button>
            <button type="button">
              <AiOutlinePlus size={20} onClick={handleAddImage} />
            </button>
          </div>
        </div>
        <input
          type="text"
          placeholder="Vui lòng điền link hình ảnh vào đây ..."
          value={linkImg}
          onChange={(e) => setLinkImg(e.target.value)}
        />
        <span className="errorMessage">{formik.errors.img}</span>
        <div className="formPostProduct__img-render">
          {formik?.values?.img?.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: 0,
                  marginTop: "10px",
                }}
              >
                <div
                  key={index}
                  style={{ margin: 0, flexGrow: 1, marginRight: "10px" }}
                >
                  <input type="text" value={item} readOnly={true} />
                </div>
                <div style={{ margin: "0" }}>
                  <CgArrowsExchangeAltV
                    size={20}
                    onClick={() => handleChangeStateImg(item, index)}
                  />
                  <AiOutlineDelete
                    size={20}
                    onClick={() => handleDeleteImage(index)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button type="submit">Cập nhật</button>
    </form>
  );
};

export default FormPutCategory;
