import { PackagingActions } from "./actions";
import { PackagingReducer } from "../@types";

const initialState: PackagingReducer = {
  loading: false,
  loadingError: false,
  shipmentDetails: null,
};

const packagingReducer = (state = initialState, action) => {
  switch (action.type) {
    //sending new package
    case PackagingActions.SEND_PACKAGE:
      return { ...state, loading: true, loadingError: false };
    case PackagingActions.SEND_PACKAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        loadingError: false,
        shipmentDetails: action.payload,
      };
    case PackagingActions.SEND_PACKAGE_FAILURE:
      return { ...state, loading: false, loadingError: true };

    default:
      return state;
  }
};

export default packagingReducer;
