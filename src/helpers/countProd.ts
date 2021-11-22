import { OrderItemType } from "./getTypes";

function countProd(order: OrderItemType[], slug: string): number {
  let sum = 0;

  for (let el in order) {
    if (order[el]["slug"] === slug) {
      sum += order[el]["count"];
    }
  }

  return sum;
}

export default countProd;
