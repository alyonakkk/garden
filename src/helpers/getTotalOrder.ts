import { OrderItemType, OrderTotalType } from "./getTypes";

function getTotalOrder(
  orderTotal: OrderTotalType,
  prop: string,
  value: OrderItemType[] | string | null
): OrderTotalType {
  return {
    ...orderTotal,
    [prop]: value,
  };
}

export default getTotalOrder;
