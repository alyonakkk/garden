import payment from "../../payment.module.css";
import Order from "../order/Order";
import OrderHeader from "../order/OrderHeader";
import Place from "./Place";
import Time from "./Time";
import Comment from "./Comment";
import Pay from "./Pay";
import Location from "./Location";
import { connect } from "react-redux";
import {
  setOrderTotal,
  setResponse,
  setActiveModal,
  fetchDataPOST,
} from "../../../../store/actions";
import getTotalOrder from "../../../../helpers/getTotalOrder";
import isNull from "../../../../helpers/isNull";
import { useEffect } from "react";

function Banner({
  order,
  orderTotal,
  setOrderTotal,
  setResponse,
  setActiveModal,
  fetchDataPOST,
}) {
  useEffect(() => {
    setOrderTotal(getTotalOrder(orderTotal, "order", order));
  }, [order]);

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !isNull(orderTotal.place) &&
      !isNull(orderTotal.time) &&
      orderTotal.order.length !== 0
    ) {
      fetchDataPOST("https://jsonplaceholder.typicode.com/todos", orderTotal);
    } else {
      setTimeout(() => {
        setActiveModal(true);
      }, 100);
      setResponse("faild");
    }
  }

  return (
    <>
      <div className={payment.banner}>
        <Location />

        <div className={payment.registration_order}>
          <form onSubmit={handleSubmit}>
            <div className={payment.container}>
              <Place />
              <OrderHeader title="Приготовить заказ через" />
              <Time />
              <Order />
              <OrderHeader title="Комментарий" />
              <Comment />
            </div>
            <Pay />
          </form>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = ({ order, orderTotal }) => {
  return {
    order,
    orderTotal,
  };
};

const mapDispatchToProps = {
  setOrderTotal,
  setResponse,
  setActiveModal,
  fetchDataPOST,
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
