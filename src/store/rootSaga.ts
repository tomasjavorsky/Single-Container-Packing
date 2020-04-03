import { all } from "redux-saga/effects";
import { watchSendNewRecipeAsync } from "./packaging/saga";

export default function* rootSaga() {
  yield all([watchSendNewRecipeAsync()]);
}
