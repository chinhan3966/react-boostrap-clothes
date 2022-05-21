import React, { useState } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { changeQty, removeCart } from "../../redux/actions";

const ItemCart = ({ id, img, name, price, quantity }) => {
  const [qty, setQty] = useState(quantity);
  const dispatch = useDispatch();
  const handleDecreaseQty = () => {
    if (qty === 1) {
      setQty(1);
      return;
    }
    dispatch(
      changeQty({
        id: id,
        quantity: qty - 1,
      })
    );
    setQty(qty - 1);
  };

  const handleIncreaseQty = () => {
    dispatch(
      changeQty({
        id: id,
        quantity: qty + 1,
      })
    );

    setQty(qty + 1);
  };

  const handleDelete = () => {
    dispatch(removeCart(id));
    toast.success("Remove product success");
  };

  const priceSplitter = (number) =>
    number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return (
    <div className="cart__body-listCart__item">
      <div className="cart__body-listCart__item-img">
        <img src={img} />
      </div>
      <div className="cart__body-listCart__item-des">
        <h4 className="line-camp-1">{name}</h4>
        <div className="cart__body-listCart__item-des__price">
          {priceSplitter(price)}đ
        </div>
      </div>
      <div className="cart__body-listCart__item-qty">
        <div className="cart__body-listCart__item-qty__quantity">
          <div onClick={handleDecreaseQty}>-</div>
          <div>{qty}</div>
          <div onClick={handleIncreaseQty}>+</div>
        </div>
        <div
          className="cart__body-listCart__item-qty__delete"
          onClick={handleDelete}
        >
          <MdOutlineDeleteForever />
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
