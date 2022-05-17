import { combineReducers } from "redux";
import { cartItem } from "./cart";
import listProductReducer from "./listProduct";

const rootReducer = combineReducers({
  listProduct: listProductReducer,
  cart: cartItem,
});

export default rootReducer;
