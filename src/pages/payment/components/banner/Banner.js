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
import PropTypes from "prop-types";

function Banner({ order, orderTotal, setOrderTotal, fetchDataPOST }) {
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

Banner.propTypes = {
  order: PropTypes.array.isRequired,
  orderTotal: PropTypes.object.isRequired,
  setOrderTotal: PropTypes.func.isRequired,
  fetchDataPOST: PropTypes.func.isRequired,
};

const mapStateToProps = ({ main }) => {
  return {
    order: main.order,
    orderTotal: main.orderTotal,
  };
};

const mapDispatchToProps = {
  setOrderTotal,
  setResponse,
  setActiveModal,
  fetchDataPOST,
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
