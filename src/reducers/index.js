import { combineReducers } from "redux";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
});

export default rootReducer;
