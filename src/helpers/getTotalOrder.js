function getTotalOrder(orderTotal, prop, value) {
  return {
    ...orderTotal,
    [prop]: value,
  };
}

export default getTotalOrder;
