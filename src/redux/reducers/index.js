import { combineReducers } from "redux";
import listProductReducer from "./listProduct";

const rootReducer = combineReducers({
  listProduct: listProductReducer,
});

export default rootReducer;
