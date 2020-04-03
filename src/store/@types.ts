export interface PackagingReducer {
  loading: boolean;
  loadingError: boolean;
  shipmentDetails: any;
}

interface ReduxTypes {
  packagingReducer: PackagingReducer;
}

export default ReduxTypes;
