import sumModidfication from "./sumModification";

function sumPrice(order) {
  return order.reduce((acc, el) => {
    return (
      acc + (Number(el.price) + Number(sumModidfication(el))) * Number(el.count)
    );
  }, 0);
}

export default sumPrice;
