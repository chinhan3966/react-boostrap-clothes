import { useEffect, useState } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

// This values are the props in the UI
// const amount = total;
// const currency = "USD";
const style = { layout: "vertical" };

const ButtonWrapper = ({ currency, showSpinner, value }) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const navigation = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const listCart = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);

  //   const listCart = useSelector((state) => state.cart);
  //   const total1 = useSelector((state) => state.token.totalCart);

  //   const amount = (total1 / 23000).toFixed().toString();

  useEffect(() => {
    let filterActiveCart = listCart?.filter((item) => item.isActive);
    console.log("check filter cart :>>", filterActiveCart);
    let total = filterActiveCart?.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(total);
  }, [listCart]);

  const handlePostBill = async () => {
    try {
      let result = await axios({
        method: "POST",
        url: "/order",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: value,
      });
      if (result?.data?.code !== 200) {
        throw result?.data?.message;
      }
      navigation("/");
      toast.success(result?.data?.message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log("check post bill payment false :>>", result);
    } catch (error) {
      console.log(error);
      toast.warn("Order Bill Fail", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigation("/cart");
    }
  };

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[10, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    // value: 3,
                    value: (total / 24875).toFixed().toString(),
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              console.log("check order Id :>>", orderId);
              // navigate("/");
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          console.log("check action :>>", actions);

          return actions.order.capture().then(function async() {
            // Your code here after capture the order
            handlePostBill();
            // console.log("check first value :>>", value);

            // if (!value) {
            //   console.log("check finish value :>>", value);
            //   navigate("/");
            // }
          });
        }}
      />
    </>
  );
};

export default ButtonWrapper;
