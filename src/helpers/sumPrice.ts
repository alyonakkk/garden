import { OrderItemType } from "./getTypes";
import sumModidfication from "./sumModification";

function sumPrice(order: OrderItemType[]): number {
  return order.reduce((acc, el) => {
    return (
      acc + (Number(el.price) + Number(sumModidfication(el))) * Number(el.count)
    );
  }, 0);
}

export default sumPrice;
