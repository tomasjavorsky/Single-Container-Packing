import { put, takeLatest } from "redux-saga/effects";
import { PackagingActions } from "./actions";
import { endpoint, apiUsername, apiKey } from "../../constants";

function* sendNewPackageAsync(action) {
  try {
    const packagingData = yield fetch(`${endpoint}`, {
      method: "POST",
      body: JSON.stringify({
        username: apiUsername,
        api_key: apiKey,
        bins: [
          {
            id: action.payload.containers.containerId,
            w: parseInt(action.payload.containers.Wdt),
            h: parseInt(action.payload.containers.Hgt),
            d: parseInt(action.payload.containers.Dpt),
            max_wg: parseInt(action.payload.containers.MaxWgt),
          },
        ],
        items: [
          {
            id: action.payload.items.itemId,
            w: parseInt(action.payload.items.Wdt),
            h: parseInt(action.payload.items.Hgt),
            d: parseInt(action.payload.items.Dpt),
            q: parseInt(action.payload.items.Qty),
            vr: action.payload.items.vr ? 1 : 0,
            wg: parseInt(action.payload.items.Wgt),
          },
        ],
      }),
    }).then((res) => res.json());
    if (packagingData.errors) {
      console.log(packagingData.message);
      yield put({
        type: PackagingActions.SEND_PACKAGE_FAILURE,
      });
    } else {
      yield put({
        type: PackagingActions.SEND_PACKAGE_SUCCESS,
        payload: packagingData,
      });
    }
  } catch (err) {
    console.error(err);
    yield put({ type: PackagingActions.SEND_PACKAGE_FAILURE });
  }
}

export function* watchSendNewRecipeAsync() {
  yield takeLatest(PackagingActions.SEND_PACKAGE, sendNewPackageAsync);
}
