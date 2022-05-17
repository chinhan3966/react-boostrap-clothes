import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { AiOutlineRight } from "react-icons/ai";
import { useSelector } from "react-redux";

import ItemCart from "../common/ItemCart";
import Helmet from "../common/Helmet";
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
      <div className="cart">
        <div className="cart__bg">
          <div>Trang chủ</div>
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
            <button className="cart__body-footer__continue">
              Tiếp tục mua hàng
            </button>
            <div className="cart__body-footer__payment">
              <h6>
                Tổng thanh toán : <span>{priceSplitter(totalCart)}đ</span>
              </h6>
              <button>Tiến hành thanh toán</button>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
