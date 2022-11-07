import axios from "axios";
import React, { useState } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  changeQty,
  handleUpdateListCart,
  removeCart,
} from "../../redux/actions";

const ItemCart = ({ id, img, name, price, quantity, amount }) => {
  const [qty, setQty] = useState(quantity);
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  console.log("check qty :>>", qty);

  const handleCallApiUpdateQty = async (quantityUpdate) => {
    let customData = {
      idCartDetail: id,
      quantity: quantityUpdate,
    };
    let result = {};
    try {
      result = await axios({
        method: "PUT",
        url: "/cart/update-cart",
        data: customData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (err) {
      console.log(err);
    }
    // console.log("check result update qty :>>", result);
    console.log("check custom data uodate :>>", customData);
    return result;
  };

  const handleDecreaseQty = async () => {
    if (qty === 1) {
      setQty(1);
      let result = await handleCallApiUpdateQty(1);
      dispatch(handleUpdateListCart(result?.data?.object?.cartDetail));
      return;
    }
    // dispatch(
    //   changeQty({
    //     id: id,
    //     quantity: qty - 1,
    //   })
    // );
    setQty(qty - 1);
    let result = await handleCallApiUpdateQty(qty - 1);
    dispatch(handleUpdateListCart(result?.data?.object?.cartDetail));
  };

  const handleIncreaseQty = async () => {
    // dispatch(
    //   changeQty({
    //     id: id,
    //     quantity: qty + 1,
    //   })
    // );

    if (qty >= amount) {
      setQty(Number(amount));
      let result = await handleCallApiUpdateQty(Number(amount));
      console.log("check result update qty :>>", result);
      dispatch(handleUpdateListCart(result?.data?.object?.cartDetail));
      return;
    }

    setQty(qty + 1);
    let result = await handleCallApiUpdateQty(qty + 1);
    console.log("check result update qty :>>", result);
    dispatch(handleUpdateListCart(result?.data?.object?.cartDetail));
  };

  const handleChangeQty = async (e) => {
    if (e?.target?.value >= amount) {
      setQty(Number(amount));
      let result = await handleCallApiUpdateQty(Number(amount));
      console.log("check result update qty :>>", result);
      dispatch(handleUpdateListCart(result?.data?.object?.cartDetail));
      return;
    }

    if (e?.target?.value <= 1) {
      setQty(Number(1));
      let result = await handleCallApiUpdateQty(Number(1));
      console.log("check result update qty :>>", result);
      dispatch(handleUpdateListCart(result?.data?.object?.cartDetail));
      return;
    }
    setQty(Number(e?.target?.value));
    let result = await handleCallApiUpdateQty(Number(e?.target?.value));
    console.log("check result update qty :>>", result);
    dispatch(handleUpdateListCart(result?.data?.object?.cartDetail));
  };

  const handleDelete = async () => {
    let result = await axios({
      method: "DELETE",
      url: "/cart/delete-cart",
      data: [id],
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("check delete product cart :>>", result);
    if (result?.data?.code !== 200) {
      toast.warn("Fail delete cart product", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    toast.success(result?.data?.message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(handleUpdateListCart(result?.data?.object?.cartDetail));

    // dispatch(removeCart(id));
    // toast.success("Remove product success", {
    //   position: "top-right",
    //   autoClose: 1000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    // });

    // let result = await axios.delete("/cart/delete-cart", id, {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // });
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
          <div>
            <input
              type="number"
              value={qty}
              min="1"
              // max={mount?.amount}
              onChange={(e) => handleChangeQty(e)}
            />
          </div>
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
