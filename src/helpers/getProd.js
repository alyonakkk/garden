function getProd(order, slug, modification) {
  return order.find(
    (el) =>
      el.slug === slug &&
      JSON.stringify(el.modification) === JSON.stringify(modification)
  );
}

function getProdIndex(order, slug, modification) {
  return order.findIndex(
    (el) =>
      el.slug === slug &&
      JSON.stringify(el.modification) === JSON.stringify(modification)
  );
}

export { getProd, getProdIndex };
