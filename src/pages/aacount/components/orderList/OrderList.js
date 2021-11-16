import Order from "../../../../shared/orderCard/Order";

function OrderList({ classTitle }) {
  return (
    <div>
      <Order className={classTitle} />
    </div>
  );
}

export default OrderList;
