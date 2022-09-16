import { combineReducers } from "redux";
import { cartItem } from "./cart";
import { authItem } from "./auth";
import listProductReducer from "./listProduct";

const rootReducer = combineReducers({
  listProduct: listProductReducer,
  cart: cartItem,
  auth: authItem,
});

export default rootReducer;
