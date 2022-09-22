import { useEffect, useState } from "react";
// import logo from "../../assets/payment.png";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import ButtonWrapper from "../../ButtonWrapper";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { MdOutlinePayment } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import Helmet from "../../common/Helmet";
import { Container } from "react-bootstrap";
// import jwt_decode from "jwt-decode";
// import priceSplitter from "../helper/options/format-money";

// This values are the props in the UI
// const amount = "5";
const currency = "USD";

export default function Paypal() {
  const [payment, setPayment] = useState(false);
  // const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);
  const [citys, setCitys] = useState([]);
  const listCart = useSelector((state) => state.cart);
  //   const token = useSelector((state) => state.token.tokenDefault);
  //   const informationUser = JSON.parse(sessionStorage.getItem("informationUser"));
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");

  const navigation = useNavigate();
  // console.log("check cart", listCart);
  // console.log("check data: >>", data);
  // console.log("check city: >>", citys);
  // console.log("check district: >>", districts);

  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  //   const dispatch = useDispatch();
  //   const code = useSelector((state) => state.token.codeVoucher);
  //   const total1 = useSelector((state) => state.token.totalCart);

  // const priceSplitter = (number) =>
  //   number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  const handleHome = () => {
    setPayment(false);
  };

  const handlePayment = () => {
    setPayment(true);
  };

  useEffect(async () => {
    let res = await axios.get("https://provinces.open-api.vn/api/?depth=3");
    console.log("check res :>>", res);
    if (res && res.data) {
      setData(res.data);
      const city = res.data.map((item) => {
        return {
          value: item.codename,
          label: item.name,
          code: item.code,
        };
      });
      setCitys(city);
      localStorage.setItem("select", JSON.stringify(res.data));
    }
  }, []);

  //   useEffect(() => {
  //     window.scrollTo({
  //       top: 162,
  //       left: 0,
  //       behavior: "smooth",
  //     });
  //   }, []);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      city: "",
      district: "",
      ward: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("Required")
        .min(2, "Must be 2 characters or more"),
      lastName: Yup.string()
        .required("Required")
        .min(2, "Must be 2 characters or more"),
      phone: Yup.string()
        .required("required")
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "Phone number is not valid"
        )
        .min(10, "to short")
        .max(10, "to long"),
      address: Yup.string()
        .required("Required")
        .min(10, "Must be at least 10 characters"),
      city: Yup.string().required("Required"),
      district: Yup.string().required("Required"),
      ward: Yup.string().required("Required"),
    }),

    onSubmit: async (values) => {
      const { firstName, lastName, phone, city, district, ward, address } =
        values;

      toast.success("Create account success");

      const customAddress = `${address} ${city} ${district} ${ward}`;
      const customCart = listCart?.map((item) => {
        return {
          quantity: item.qty,
          product: {
            id: item.id,
          },
        };
      });
      const data = {
        customer: {
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phone,
          address: customAddress,
        },
        payment: payment,
        item: customCart,
        // code: code,
      };
      console.log("check data :>>", data);
      //   let res = await axios({
      //     method: "POST",
      //     url: "http://localhost:8085/api/v1/bill/insert",
      //     data: data,
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   });

      //   if (res && res.data && res.data.data) {
      //     if (res.data.status === 200) {
      //       navigation("/");
      //     }
      //   }
    },
  });

  const handleChangeCity = (e) => {
    const { code } = e;

    const district = data.find((item) => item.code === code);
    if (district.districts.length > 0) {
      const customDistrict = district.districts.map((item) => {
        return {
          value: item.codename,
          label: item.name,
          code: item.code,
          wards: item.wards,
        };
      });

      setDistricts(customDistrict);
    }

    return formik.setFieldValue("city", e.label);
  };

  const handleChangeDistrict = (e) => {
    const { code } = e;

    const ward = districts.find((item) => item.code === code);

    if (ward.wards.length > 0) {
      const customWard = ward.wards.map((item) => {
        return {
          value: item.codename,
          label: item.name,
          code: item.code,
        };
      });

      setWards(customWard);
    }

    return formik.setFieldValue("district", e.label);
  };

  const handleChangeWard = (e) => {
    const { code } = e;

    return formik.setFieldValue("ward", e.label);
  };

  const defaultValueCity = (options, value) => {
    return options ? options.find((option) => option.codename === value) : "";
  };
  const defaultValueDistrict = (options, value) => {
    return options ? options.find((option) => option.codename === value) : "";
  };

  const defaultValueWard = (options, value) => {
    return options ? options.find((option) => option.codename === value) : "";
  };

  return (
    <Helmet title="Thanh Toán">
      <Container>
        <motion.div
          initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
          animate={{ clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)" }}
          exit={{
            clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
            transition: { duration: 0.1 },
          }}
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // exit={{
          //   opacity: 0,
          // }}
        >
          <div className="bg-slate-50  lg:p-10 p-5 parent">
            <div className="flex items-center bg-white payment">
              {/* block 1 */}
              <div className="w-[40%] hidden lg:block payment__left">
                <img
                  src={
                    "https://media.istockphoto.com/vectors/payment-date-of-recurring-tax-money-scheduled-on-calendar-icon-bill-vector-id1360536098?b=1&k=20&m=1360536098&s=170667a&w=0&h=O1_QDeEdM-YZgg8CV9E8FgvEUn5BQCoufvGdmAlElRk="
                  }
                  className="rounded-l-lg transform scale-90"
                  alt="payment"
                />
              </div>
              {/* block 1 */}

              {/* block 2 */}
              <div className="lg:w-[60%] w-full  rounded-r-lg payment__right">
                <div className=" payment__right-wrapper">
                  <div className="information__cart">
                    <h4>Thông tin đặt hàng</h4>
                    <div className="flex items-center cart__total">
                      <h5 className="text-base">Thành tiền : </h5>
                      <span className="text-[#1435c3] text-sm ml-1 font-medium">
                        {/* {priceSplitter(total1)}đ */}1000đ
                      </span>
                    </div>
                  </div>

                  <form onSubmit={formik.handleSubmit}>
                    <div className="mb-10 flex items-center justify-between form__name">
                      <div style={{ width: "49%" }}>
                        <div className="form-field">
                          <input
                            id="firstName"
                            name="firstName"
                            onChange={formik.handleChange}
                            value={formik.values.firstName || ""}
                            // value={firstName || formik.values.firstName}
                            type="text"
                            placeholder=" "
                            className="form-input"
                          />
                          <label className="form-label" htmlFor="firstName">
                            FirstName
                          </label>
                        </div>
                        <span className="errorMessage">
                          {formik.errors.firstName}
                        </span>
                      </div>
                      <div style={{ width: "49%" }}>
                        <div className="form-field">
                          <input
                            id="lastName"
                            name="lastName"
                            onChange={formik.handleChange}
                            value={formik.values.lastName || ""}
                            // value={lastName || formik.values.lastName}
                            type="text"
                            placeholder=" "
                            className="form-input"
                          />
                          <label className="form-label" htmlFor="lastName">
                            Lastname
                          </label>
                        </div>
                        <span className="errorMessage">
                          {formik.errors.lastName}
                        </span>
                      </div>
                    </div>
                    <div style={{ marginBottom: "4rem" }}>
                      <div className="form-field">
                        <input
                          id="phone"
                          name="phone"
                          onChange={formik.handleChange}
                          value={formik.values.phone || ""}
                          type="text"
                          placeholder=" "
                          className="form-input"
                        />
                        <label className="form-label" htmlFor="phone">
                          Phone
                        </label>
                      </div>
                      <span className="errorMessage">
                        {formik.errors.phone}
                      </span>
                    </div>

                    {/* option address */}
                    <div>
                      {/* options city */}
                      <div style={{ marginBottom: "4rem", fontSize: "1.6rem" }}>
                        <Select
                          options={citys || []}
                          value={defaultValueCity(
                            citys || [],
                            formik.values.city
                          )}
                          placeholder="--Choose select city--"
                          onChange={(e) => handleChangeCity(e)}
                        />
                        <span className="errorMessage">
                          {formik.errors.city}
                        </span>
                      </div>
                      {/* options city */}
                      {/* options district */}
                      <div style={{ marginBottom: "4rem", fontSize: "1.6rem" }}>
                        <Select
                          options={districts || []}
                          value={defaultValueDistrict(
                            districts || [],
                            formik.values.district
                          )}
                          placeholder="--Choose select district--"
                          onChange={(e) => handleChangeDistrict(e)}
                        />
                        <span className="errorMessage">
                          {formik.errors.district}
                        </span>
                      </div>
                      {/* options district */}
                      {/* options ward */}
                      <div
                        style={{
                          marginBottom: "4rem",
                          zIndex: "999",
                          fontSize: "1.6rem",
                        }}
                      >
                        <Select
                          options={wards || []}
                          value={defaultValueWard(
                            wards || [],
                            formik.values.ward
                          )}
                          placeholder="--Choose select ward--"
                          onChange={(e) => handleChangeWard(e)}
                        />
                        <span className="errorMessage">
                          {formik.errors.ward}
                        </span>
                      </div>
                      {/* options ward */}
                    </div>
                    {/* option address */}
                    <div>
                      <div style={{ marginBottom: "4rem" }}>
                        <div className="form-field">
                          <input
                            id="address"
                            name="address"
                            onChange={formik.handleChange}
                            value={formik.values.address || ""}
                            placeholder=" "
                            className="form-input"
                          />
                          <label className="form-label" htmlFor="address">
                            Address
                          </label>
                        </div>
                        <span className="errorMessage">
                          {formik.errors.address}
                        </span>
                      </div>
                    </div>

                    {/* option choose paymnet */}
                    <div style={{ fontSize: "1.5rem" }}>
                      <h4>Lựa chọn phương thức thanh toán</h4>
                      <div style={{ display: "flex", margin: "1.2rem 0" }}>
                        <div
                          className={`
                      button__payment ${payment ? "" : "active"}`}
                          onClick={handleHome}
                        >
                          <AiOutlineHome
                            size={"24px"}
                            style={{ marginRight: "4px" }}
                          />
                          <span>Thanh toán khi nhận hàng</span>
                        </div>
                        <div
                          className={`button__payment  ${
                            payment ? "active" : ""
                          }`}
                          style={{ marginLeft: "10px" }}
                          onClick={handlePayment}
                        >
                          <MdOutlinePayment
                            size={"24px"}
                            style={{ marginRight: "4px" }}
                          />
                          <span>Payment</span>
                        </div>
                      </div>
                    </div>
                    {/* option choose paymnet */}

                    <div
                      className={`paypal ${payment ? "active" : ""}`}
                      style={{
                        width: "100%",
                        // minHeight: "200px",
                        zIndex: "100",
                        textAlign: "center",
                      }}
                    >
                      <PayPalScriptProvider
                        options={{
                          "client-id":
                            "Acb4LyPCgYLfo5jeL3VioKCa33WiHIZ-Selm29Dlir5zrW-hRpeIo7SjXK0Zm2RXUPZ3-ZchIYFQSCPz",
                          components: "buttons",
                          currency: "USD",
                        }}
                      >
                        <ButtonWrapper
                          currency={currency}
                          showSpinner={false}
                        />
                      </PayPalScriptProvider>
                    </div>

                    <div className="button__order">
                      <button type="submit">Đặt hàng</button>
                    </div>
                  </form>

                  {/* <div
                  className={`paypal ${payment ? "active" : ""}`}
                  style={{
                    width: "100%",
                    // minHeight: "200px",
                    zIndex: "100",
                    textAlign: "center",
                  }}
                >
                  <PayPalScriptProvider
                    options={{
                      "client-id":
                        "Acb4LyPCgYLfo5jeL3VioKCa33WiHIZ-Selm29Dlir5zrW-hRpeIo7SjXK0Zm2RXUPZ3-ZchIYFQSCPz",
                      components: "buttons",
                      currency: "USD",
                    }}
                  >
                    <ButtonWrapper currency={currency} showSpinner={false} />
                  </PayPalScriptProvider>
                </div> */}
                </div>
              </div>
              {/* block 2 */}
            </div>
          </div>
        </motion.div>
      </Container>
    </Helmet>
  );
}
