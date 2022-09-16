import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { AiOutlineRight } from "react-icons/ai";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import ItemCart from "../common/ItemCart";
import Helmet from "../common/Helmet";
import { Link } from "react-router-dom";
const loop = [0, 1, 2, 3];
const Cart = () => {
  const [totalCart, setTotalCart] = useState(null);
  const listCart = useSelector((state) => state.cart);
  console.log("check list cart", listCart);

  useEffect(() => {
    let total = listCart.reduce((sum, item) => sum + item.price * item.qty, 0);
    setTotalCart(total);
  }, [listCart]);

  const priceSplitter = (number) =>
    number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return (
    <Helmet title="Giỏ Hàng">
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
          <div className="cart__body">
            <div className="cart__body-title">Giỏ hàng của bạn</div>

            <div className="cart__body-listCart">
              {/* {loop.map((item, index) => {
            return <ItemCart index={index} />;
          })} */}
              {listCart &&
                listCart.length > 0 &&
                listCart.map((item, index) => {
                  return (
                    <ItemCart
                      index={index}
                      img={item.img}
                      name={item.name}
                      price={item.price}
                      quantity={item.qty}
                      id={item.id}
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
                <Link to="/payment">
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
        </div>
      </motion.div>
    </Helmet>
  );
};

export default Cart;
