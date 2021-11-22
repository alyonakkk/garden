import { ShopDataItemType } from "./getTypes";

function filterOrder(
  shopData: ShopDataItemType[],
  activeStore: string
): ShopDataItemType[] {
  return shopData.filter((data) => {
    return data.slug === activeStore;
  });
}

export default filterOrder;
