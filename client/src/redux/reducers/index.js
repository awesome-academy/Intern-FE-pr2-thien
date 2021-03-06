import { combineReducers } from "redux";

import userAuthReducer from "./user/auth/authReducer";
import userCategoryReducer from "./user/categoryReducer";
import userFilterReducer from "./user/filterReducer";
import userProductReducer from "./user/productReducer";
import userCartReducer from "./user/cartReducer";

import adminAuthReducer from "./admin/auth/authReducer";

const rootReducer = combineReducers({
  // User
  "user/auth": userAuthReducer,
  "user/category": userCategoryReducer,
  "user/filter": userFilterReducer,
  "user/product": userProductReducer,
  "user/cart": userCartReducer,

  // Admin
  "admin/auth": adminAuthReducer,
});

export default rootReducer;
