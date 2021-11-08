function quantityProds(order) {
  return order.reduce((acc, el) => {
    return acc + Number(el.count);
  }, 0);
}

export default quantityProds;
