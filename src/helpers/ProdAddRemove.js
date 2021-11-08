function clickAdd(prod, prodIndex, detailCard, modification, setOrder, order) {
  if (prod === undefined) {
    let data = {
      name: detailCard.name,
      slug: detailCard.slug,
      price: detailCard.price,
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

function clickRemove(prod, prodIndex, order, setOrder) {
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

function addProd(prod) {
  return {
    ...prod,
    count: prod.count + 1,
  };
}

function removeProd(prod) {
  return {
    ...prod,
    count: prod.count - 1,
  };
}

export { clickAdd, clickRemove };
