import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import Select from "react-select";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { toast } from "react-toastify";

const FormPostProduct = ({ handleCloseModal, setRefeshTableData }) => {
  const [listCategory, setListCategory] = useState([]);
  const [listSize, setListSize] = useState([]);
  const [listColor, setListColor] = useState([]);

  const [linkImg, setLinkImg] = useState("");
  const [indexChangeLinkImg, setIndexChangeLinkImg] = useState(null);
  const [blockButtonUpdateImg, setBlockButtonUpdateImg] = useState(false);
  console.log("state img :>>", linkImg, indexChangeLinkImg);

  const [sizeSelected, setSizeSelected] = useState(null);
  const [colorSelected, setColorSelected] = useState(null);
  const [amount, setAmount] = useState(0);
  const [blockButtonUpdateInfo, setBlockButtonUpdateInfo] = useState(false);
  const [indexChangeInfo, setIndexChangeInfo] = useState(null);

  // console.log("list size", listSize);
  // console.log("list category", listCategory);

  const handleChangeCategory = (e) => {
    formik.setFieldValue("category", e.value);
  };

  const handleChangeSize = (e) => {
    setSizeSelected(e.value);
  };

  const handleChangeColor = (e) => {
    setColorSelected(e.value);
  };

  const defaultValueCity = (options, value) => {
    return options ? options.find((option) => option.id === value) : "";
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
      title: "",
      price: "",
      discount: "",
      img: [],
      infoProduct: [],
      category: null,
    },

    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      price: Yup.number().required("Required"),
      discount: Yup.number(),
      category: Yup.number().required("Required"),
      img: Yup.array()
        .of(Yup.string())
        .test("Min test", "Must have atleast 1 items", function (item) {
          let totalAmount = item.length;

          if (Array.isArray(this.parent.array2)) {
            totalAmount += this.parent.array2.length;
          }

          return totalAmount >= 1;
        }),
      infoProduct: Yup.array()
        // .of(Yup.string())
        .test("Min test", "Must have atleast 1 items", function (item) {
          let totalAmount = item?.length;

          if (Array.isArray(this.parent.array2)) {
            totalAmount += this.parent.array2?.length;
          }

          return totalAmount >= 1;
        }),
    }),

    onSubmit: async (values) => {
      const { title, category, discount, price, img, infoProduct } = values;
      const customData = {
        categorySlug: {
          id: category,
        },
        createdBy: "Nhan",
        discount: discount,
        img: img,

        infoProduct: infoProduct?.map((item, index) => {
          if (item.size) {
            return {
              amount: item.amount,
              color: {
                id: item.color,
              },
              size: {
                id: item.size,
              },
            };
          } else {
            return {
              amount: item.amount,
              color: {
                id: item.color,
              },
            };
          }
        }),
        price: price,
        title: title,
      };
      console.log("check custom Data :>>", customData);
      try {
        let response = await axios.post("/product", customData);
        console.log("check response post product :>>", response);
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

  const handleAddInfoProduct = () => {
    // if (!sizeSelected) {
    //   alert("Bạn chưa nhập size");
    //   return;
    // }
    if (!colorSelected) {
      alert("Bạn chưa nhập color");
      return;
    }
    formik.setFieldValue("infoProduct", [
      ...formik.values.infoProduct,
      {
        size: sizeSelected,
        color: colorSelected,
        amount: Number(amount),
      },
    ]);
    setSizeSelected(null);
    setColorSelected(null);
    setAmount(0);

    console.log(sizeSelected, colorSelected, amount);
  };

  const handleDeleteImageInfo = (item) => {
    console.log("delete info :>>", item);
    let cloneListInfo = [...formik.values.infoProduct];
    console.log("check delete before:>>", cloneListInfo);
    cloneListInfo.splice(item, 1);
    formik.setFieldValue("infoProduct", cloneListInfo);
    console.log("check delete after :>>", cloneListInfo);
  };

  const handleChangeStateInfo = (item, index) => {
    console.log("change state info :>>", item, index);
    setIndexChangeInfo(index);
    // setDataStateInfo(item);
    setSizeSelected(item.size);
    setColorSelected(item.color);
    setAmount(item.amount);
    setBlockButtonUpdateInfo(true);
  };

  const handleUpdateInfo = () => {
    let cloneListInfo = [...formik.values.infoProduct];
    let dataUpdate = cloneListInfo.map((item, index) =>
      index === indexChangeInfo
        ? { size: sizeSelected, color: colorSelected, amount: amount }
        : item
    );
    formik.setFieldValue("infoProduct", dataUpdate);
    //  setLinkImg("");
    setSizeSelected(null);
    setColorSelected(null);
    setAmount(0);
    setBlockButtonUpdateInfo(false);
    console.log("update info :>>", dataUpdate);
  };

  useEffect(async () => {
    try {
      let response = await axios.get(`/category/all`);
      // console.log("check data category :>>", response);
      if (response?.data?.object) {
        let customCategory = response?.data?.object?.map((category) => {
          return {
            value: category.id,
            label: category.categorySlug,
          };
        });
        setListCategory(customCategory);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(async () => {
    try {
      let response = await axios.get(`/size/all`);
      // console.log("check data size :>>", response);
      if (response?.data?.object) {
        let customCategory = response?.data?.object?.map((category) => {
          return {
            value: category.id,
            label: category.nameSize,
          };
        });
        setListSize(customCategory);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(async () => {
    try {
      let response = await axios.get(`/color/all`);
      // console.log("check data color :>>", response);
      if (response?.data?.object) {
        let customCategory = response?.data?.object?.map((category) => {
          return {
            value: category.id,
            label: category.colorName,
          };
        });
        setListColor(customCategory);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <form className="formPostProduct" onSubmit={formik.handleSubmit}>
      <div className="formPostProduct__title">
        <label>Tên sản phẩm</label>
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

      <div className="formPostProduct__price">
        <label>Giá sản phẩm</label>
        <input
          type="number"
          placeholder="Vui lòng điền giá sản phẩm vào đây ..."
          id="price"
          name="price"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        <span className="errorMessage">{formik.errors.price}</span>
      </div>

      <div className="formPostProduct__discount">
        <label>Giảm giá</label>
        <input
          type="number"
          placeholder="Vui lòng điền mã giảm giá vào đây ..."
          id="discount"
          name="discount"
          onChange={formik.handleChange}
          value={formik.values.discount}
        />
        <span className="errorMessage">{formik.errors.discount}</span>
      </div>

      <div className="formPostProduct__category">
        <label>Loại sản phẩm</label>
        <Select
          options={listCategory || []}
          // value={formik.values.category}
          value={findValueInfoProduct(
            listCategory || [],
            formik.values.category
          )}
          placeholder="--Choose select category--"
          onChange={(e) => handleChangeCategory(e)}
        />
        <span className="errorMessage">{formik.errors.category}</span>
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

      <div className="formPostProduct__infoProduct">
        <div className="formPostProduct__img-add">
          <label>Thông tin sản phẩm</label>
          {/* <AiOutlinePlus size={20} onClick={handleAddInfoProduct} /> */}
          <div style={{ display: "flex" }}>
            <button
              type="button"
              onClick={handleUpdateInfo}
              className={
                blockButtonUpdateInfo ? "buttonActive" : "buttonUnActive"
              }
            >
              <CgArrowsExchangeAltV size={20} />
            </button>
            <button onClick={handleAddInfoProduct} type="button">
              <AiOutlinePlus size={20} />
            </button>
          </div>
        </div>
        <div className="formPostProduct__infoProduct-select">
          <div className="size">
            <Select
              options={listSize || []}
              // value={findValueInfoProduct(listSize || [], sizeSelected)}
              value={listSize.filter((option) => option.value === sizeSelected)}
              placeholder="Size"
              onChange={(e) => handleChangeSize(e)}
            />
          </div>
          <div className="color">
            <Select
              options={listColor || []}
              // value={findValueInfoProduct(listColor || [], colorSelected)}
              value={listColor.filter(
                (option) => option.value === colorSelected
              )}
              placeholder="Color"
              onChange={(e) => handleChangeColor(e)}
            />
          </div>
          <div className="amount">
            <input
              type="number"
              placeholder="Amount ..."
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
        <span className="errorMessage">{formik.errors.infoProduct}</span>
        <div className="formPostProduct__img-render">
          {formik?.values?.infoProduct?.map((item, index) => {
            return (
              <div className="formPostProduct__infoProduct-select" key={index}>
                <div className="size">
                  {/* <Select
                    options={listSize || []}
                    placeholder="Size"
                    onChange={(e) => handleChangeSize(e)}
                  /> */}
                  <input
                    style={{ textTransform: "capitalize" }}
                    type="text"
                    value={findValueInfoProduct(
                      listSize || [],
                      item.size,
                      true
                    )}
                    readOnly={true}
                  />
                </div>
                <div className="color">
                  <input
                    style={{ textTransform: "capitalize" }}
                    type="text"
                    value={findValueInfoProduct(
                      listColor || [],
                      item.color,
                      true
                    )}
                    readOnly={true}
                  />
                </div>
                <div className="amount">
                  <input
                    style={{ textTransform: "capitalize" }}
                    type="text"
                    value={item.amount}
                    readOnly={true}
                  />
                </div>
                <div
                  style={{
                    margin: "0",
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <CgArrowsExchangeAltV
                    size={20}
                    onClick={() => handleChangeStateInfo(item, index)}
                  />
                  <AiOutlineDelete
                    size={20}
                    onClick={() => handleDeleteImageInfo(index)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button type="submit">Thêm sản phẩm</button>
    </form>
  );
};

export default FormPostProduct;
