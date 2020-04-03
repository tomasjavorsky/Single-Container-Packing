export interface PackagingReducer {
  loading: boolean;
  loadingError: boolean;
}

interface ReduxTypes {
  packagingReducer: PackagingReducer;
}

export default ReduxTypes;
