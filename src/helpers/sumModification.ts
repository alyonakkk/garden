import { OrderItemType } from "./getTypes";

function sumModidfication(el: OrderItemType): number {
  return Object.values(el.modification).reduce((acc, mod) => {
    return acc + (mod.value ? mod.price : 0);
  }, 0);
}

export default sumModidfication;
