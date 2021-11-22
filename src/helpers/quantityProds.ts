import { OrderItemType } from "./getTypes";

function quantityProds(order: OrderItemType[]): number {
  return order.reduce((acc, el) => {
    return acc + Number(el.count);
  }, 0);
}

export default quantityProds;
