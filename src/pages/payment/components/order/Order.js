import { connect } from "react-redux";
import payment from "../../payment.module.css";
import OrderHeader from "./OrderHeader";
import ProdInfo from "./ProdInfo";
import ProdTitle from "./ProdTitle";

function Order({ order }) {
  function renderOrderCard() {
    return order.map((item, index) => {
      return (
        <li className={payment.card} key={index}>
          <ProdTitle title={item.name} />
          <ProdInfo item={item} />
        </li>
      );
    });
  }

  return (
    <div className={payment.order}>
      <OrderHeader title="Выбрано" />
      <ul className={payment.card_list}>{renderOrderCard()}</ul>
    </div>
  );
}

const mapStateToProps = ({ order }) => {
  return {
    order,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
