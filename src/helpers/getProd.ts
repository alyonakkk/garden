import { ModificationType, OrderItemType } from "./getTypes";

function getProd(
  order: OrderItemType[],
  slug: string,
  modification: ModificationType
): OrderItemType | undefined {
  return order.find(
    (el) =>
      el.slug === slug &&
      JSON.stringify(el.modification) === JSON.stringify(modification)
  );
}

function getProdIndex(
  order: OrderItemType[],
  slug: string,
  modification: ModificationType
): number {
  return order.findIndex(
    (el) =>
      el.slug === slug &&
      JSON.stringify(el.modification) === JSON.stringify(modification)
  );
}

export { getProd, getProdIndex };
