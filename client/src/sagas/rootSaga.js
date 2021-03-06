import { all } from "redux-saga/effects";

import {
  watchUserLogin,
  watchUserChangePassword,
  watchUserUpdateInfo,
} from "./user/authSaga";
import { watchFetchCategory } from "./user/categorySaga";
import { watchFetchChangeCategory } from "./user/filterSaga";
import { watchFetchChangeProduct } from "./user/productSaga";

import { watchAdminLogin } from "./admin/authSaga";

export default function* rootSaga() {
  yield all([
    watchUserLogin(),
    watchFetchCategory(),
    watchFetchChangeCategory(),
    watchFetchChangeProduct(),
    watchUserChangePassword(),
    watchUserUpdateInfo(),

    watchAdminLogin(),
  ]);
}
