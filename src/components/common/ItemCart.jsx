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

const ItemCart = ({
  id,
  img,
  name,
  price,
  quantity,
  amount,
  size,
  color,
  activeProduct,
  handleUpdateStateCheckAll,
}) => {
  const [qty, setQty] = useState(quantity || null);
  const [activeCheckbox, setActiveCheckbox] = useState(activeProduct);
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  // console.log("check qty :>>", qty);

  const handleCustomDataRedux = (arr = []) => {
    const customListCart = arr?.map((item, index) => {
      return { ...item, isActive: false };
    });
    return customListCart;
  };

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
      if (result?.data?.code !== 200) {
        toast.warn("Update quantity failed", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (err) {
      console.log(err);
    }
    console.log("check result update qty :>>", result);
    console.log("check custom data update :>>", customData);
    return result;
  };

  const handleDecreaseQty = async () => {
    if (qty === 1) {
      setQty(1);
      let result = await handleCallApiUpdateQty(1);
      // let customData = handleCustomDataRedux(result?.data?.object?.cartDetail);
      // dispatch(handleUpdateListCart(customData));
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
    // let customData = handleCustomDataRedux(result?.data?.object?.cartDetail);
    // dispatch(handleUpdateListCart(customData));
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
      // console.log("check result update qty :>>", result);
      dispatch(handleUpdateListCart(result?.data?.object?.cartDetail));
      // let customData = handleCustomDataRedux(result?.data?.object?.cartDetail);
      // dispatch(handleUpdateListCart(customData));
      return;
    }

    setQty(qty + 1);
    let result = await handleCallApiUpdateQty(qty + 1);
    // console.log("check result update qty :>>", result);
    dispatch(handleUpdateListCart(result?.data?.object?.cartDetail));
    // let customData = handleCustomDataRedux(result?.data?.object?.cartDetail);
    // dispatch(handleUpdateListCart(customData));
  };

  const handleChangeQty = async (e) => {
    if (e?.target?.value >= amount) {
      setQty(Number(amount));
      let result = await handleCallApiUpdateQty(Number(amount));
      // console.log("check result update qty :>>", result);
      dispatch(handleUpdateListCart(result?.data?.object?.cartDetail));
      // let customData = handleCustomDataRedux(result?.data?.object?.cartDetail);
      // dispatch(handleUpdateListCart(customData));
      return;
    }

    if (e?.target?.value <= 1) {
      setQty(Number(1));
      let result = await handleCallApiUpdateQty(Number(1));
      // console.log("check result update qty :>>", result);
      dispatch(handleUpdateListCart(result?.data?.object?.cartDetail));
      // let customData = handleCustomDataRedux(result?.data?.object?.cartDetail);
      // dispatch(handleUpdateListCart(customData));
      return;
    }
    setQty(Number(e?.target?.value));
    let result = await handleCallApiUpdateQty(Number(e?.target?.value));
    // console.log("check result update qty :>>", result);
    dispatch(handleUpdateListCart(result?.data?.object?.cartDetail));
    // let customData = handleCustomDataRedux(result?.data?.object?.cartDetail);
    // dispatch(handleUpdateListCart(customData));
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
    dispatch(handleUpdateListCart(result?.data?.object?.cartDetail));
    toast.success(result?.data?.message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    // let customData = handleCustomDataRedux(result?.data?.object?.cartDetail);
    // dispatch(handleUpdateListCart(customData));

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

  const handleChangeInputActive = async (e) => {
    setActiveCheckbox(e.target.checked);
    console.log("check actve :>>", e.target.checked);
    const customData = { idCartDetail: id };
    try {
      let result = await axios.put("/cart/update-isactive", customData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("check result :>> ", result);
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
        handleUpdateStateCheckAll(true);
      } else {
        handleUpdateStateCheckAll(false);
      }
      dispatch(handleUpdateListCart(result?.data?.object?.cartDetail));
    } catch (error) {
      console.log(error);
    }
  };

  const priceSplitter = (number) =>
    number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return (
    <div className="cart__body-listCart__item">
      <div
        className="cart__body-listCart__item-active"
        // onChange={handleChangeInputActive}
      >
        <input
          type="checkbox"
          checked={activeProduct}
          // onChange={(e) => setActiveCheckbox(e.target.value)}
          onChange={handleChangeInputActive}
        />
      </div>
      <div className="cart__body-listCart__item-img">
        <img src={img} />
      </div>
      <div className="cart__body-listCart__item-des">
        <h4 className="line-camp-1">{name}</h4>
        <div className="title__des">
          <h3 className="line-camp-1">{name}</h3>
          <div className="des__colors">
            Màu sắc :<span style={{ background: color }}></span>
          </div>
          {size && (
            <div className="des__sizes">
              Size :<span> {size}</span>
            </div>
          )}
        </div>
        <div className="des__color">
          Màu sắc :<span style={{ background: color }}></span>
        </div>
        {size && (
          <div className="des__size">
            Size :<span> {size}</span>
          </div>
        )}
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
