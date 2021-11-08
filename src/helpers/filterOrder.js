function filterOrder(shopData, activeStore) {
  return shopData.filter((data) => {
    return data.slug === activeStore;
  });
}

export default filterOrder;
