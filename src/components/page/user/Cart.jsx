import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { AiOutlineRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import ItemCart from "../../common/ItemCart";
import Helmet from "../../common/Helmet";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { handleUpdateListCart } from "../../../redux/actions";
const loop = [0, 1, 2, 3];
const Cart = () => {
  const [totalCart, setTotalCart] = useState(null);
  const listCart = useSelector((state) => state.cart);
  const { token } = useSelector((state) => state.auth);

  const [activeCheckbox, setActiveCheckbox] = useState(null);

  const dispatch = useDispatch();

  // console.log("check list cart", listCart);
  // console.log("check token cart :>>", token);

  const getAllCart = async () => {
    let result = await axios.get("/cart/find-cart", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (result?.data?.code !== 200) {
      toast.success("Fail get all cart", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    // console.log("check all cart :>>", result);
    // const customListCart = result?.data?.object?.cartDetail?.map(
    //   (item, index) => {
    //     return { ...item, isActive: false };
    //   }
    // );
    dispatch(handleUpdateListCart(result?.data?.object?.cartDetail));
    // dispatch(handleUpdateListCart(customListCart));
  };

  useEffect(() => {
    let filterActiveCart = listCart?.filter((item) => item.isActive);
    console.log("check filter cart :>>", filterActiveCart);
    let total = filterActiveCart?.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalCart(total);
  }, [listCart]);

  useEffect(() => {
    getAllCart();
  }, []);

  const handleChangeInputActive = async (e) => {
    console.log("check active :>>", e.target.checked);

    try {
      let result = await axios({
        method: "PUT",
        url: "/cart/update-checkall",
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("check result check all:>> ", result);
      if (result?.data?.code !== 200) {
        toast.warn(result?.data?.message, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      if (result?.data?.object?.checkAll) {
        setActiveCheckbox(true);
      } else {
        setActiveCheckbox(false);
      }
      dispatch(handleUpdateListCart(result?.data?.object?.cartDetail));
    } catch (error) {
      console.log(error);
    }
  };

  const priceSplitter = (number) =>
    number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return (
    <Helmet title="Giỏ Hàng">
      {/* <Container> */}
      <motion.div
        initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
        animate={{ clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)" }}
        exit={{
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
          transition: { duration: 0.1 },
        }}
        // initial={{ width: 0 }}
        // animate={{ width: "100%" }}
        // exit={{
        //   x: window.innerWidth,
        //   transition: { duration: 0.1 },
        // }}
      >
        <div className="cart">
          <div className="cart__bg">
            <div>
              <Link to="/">Trang chủ</Link>
            </div>
            <AiOutlineRight />
            <span>Giỏ hàng</span>
          </div>
          <Container>
            <div className="cart__body">
              <div className="cart__body-title">Giỏ hàng của bạn</div>
              <div className="cart__body-activeAll">
                <input
                  type="checkbox"
                  checked={activeCheckbox}
                  onChange={handleChangeInputActive}
                />
                <span>Chọn tất cả</span>
              </div>
              <div className="cart__body-listCart">
                {listCart &&
                  listCart.length > 0 &&
                  listCart.map((item, index) => {
                    return (
                      <ItemCart
                        // key={item?.idCartdetail}
                        key={item?.idCartdetail}
                        img={item?.imgs[0]}
                        name={item?.titleProduct}
                        size={item?.nameSize}
                        color={item?.nameColor}
                        price={item?.price}
                        quantity={item?.quantity}
                        amount={item?.amountProduct}
                        id={item?.idCartdetail}
                        activeProduct={item?.isActive}
                        handleUpdateStateCheckAll={setActiveCheckbox}
                      />
                    );
                  })}
              </div>
              <div className="cart__body-footer">
                <Link to="/">
                  <button className="cart__body-footer__continue">
                    Tiếp tục mua hàng
                  </button>
                </Link>

                <div className="cart__body-footer__payment">
                  <h6>
                    Tổng thanh toán : <span>{priceSplitter(totalCart)}đ</span>
                  </h6>
                  <Link
                    to="/payment"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <button
                      disabled={listCart?.length > 0 ? false : true}
                      className={`payment ${
                        listCart?.length > 0 ? "active" : ""
                      }`}
                    >
                      Tiến hành thanh toán
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </motion.div>
      {/* </Container> */}
    </Helmet>
  );
};

export default Cart;
