import { PackagingActions } from "./actions";
import { PackagingReducer } from "../@types";

const initialState: PackagingReducer = {
  loading: false,
  loadingError: false,
};

const packagingReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default packagingReducer;
