export enum PackagingActions {
  SEND_PACKAGE = "packaging/SEND_PACKAGE",
  SEND_PACKAGE_SUCCESS = "packaging/SEND_PACKAGE_SUCCESS",
  SEND_PACKAGE_FAILURE = "packaging/SEND_PACKAGE_FAILURE"
}

export interface ContainerData {
    containerId: string
    Wdt: string,
    Hgt: string,
    Dpt: string,
    MaxWgt: string,
}

export interface ItemData {
    itemId: string
    Wdt: string,
    Hgt: string,
    Dpt: string,
    Wgt: string,
    vr: boolean,
    Qty: string,
}

export const sendPackage = (containers: ContainerData, items: ItemData ) => ({
  type: PackagingActions.SEND_PACKAGE,
  payload: {
    containers,
    items
  }
});
