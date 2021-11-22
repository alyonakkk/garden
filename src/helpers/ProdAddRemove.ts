import { ModificationType, OrderItemType } from "./getTypes";

function clickAdd(
  prod: OrderItemType,
  prodIndex: number,
  item: any,
  modification: ModificationType,
  setOrder: (order: OrderItemType[]) => void,
  order: OrderItemType[]
): void {
  if (prod === undefined) {
    let data: OrderItemType = {
      name: item.name,
      slug: item.slug,
      price: item.price,
      count: 1,
      modification: modification,
    };
    setOrder([...order, data]);
  } else {
    setOrder([
      ...order.slice(0, prodIndex),
      addProd(prod),
      ...order.slice(prodIndex + 1),
    ]);
  }
}

function clickRemove(
  prod: OrderItemType,
  prodIndex: number,
  order: OrderItemType[],
  setOrder: (order: OrderItemType[]) => void
): void {
  if (prod.count === 1) {
    setOrder([...order.slice(0, prodIndex), ...order.slice(prodIndex + 1)]);
  } else {
    setOrder([
      ...order.slice(0, prodIndex),
      removeProd(prod),
      ...order.slice(prodIndex + 1),
    ]);
  }
}

function addProd(prod: OrderItemType): OrderItemType {
  return {
    ...prod,
    count: prod.count + 1,
  };
}

function removeProd(prod: OrderItemType): OrderItemType {
  return {
    ...prod,
    count: prod.count - 1,
  };
}

export { clickAdd, clickRemove };
