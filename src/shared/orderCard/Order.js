import { connect } from "react-redux";
import style from "./orderCard.module.css";
import OrderHeader from "./OrderHeader";
import ProdInfo from "./ProdInfo";
import ProdTitle from "./ProdTitle";
import PropTypes from "prop-types";

function Order({ order, ...props }) {
  function renderOrderCard() {
    return order.map((item, index) => {
      return (
        <li className={style.card} key={index}>
          <ProdTitle title={item.name} />
          <ProdInfo item={item} />
        </li>
      );
    });
  }

  return (
    <div className={style.order}>
      <OrderHeader title="Выбрано" {...props} />
      <ul className={style.card_list}>{renderOrderCard()}</ul>
    </div>
  );
}

Order.propTypes = {
  order: PropTypes.array.isRequired,
};

const mapStateToProps = ({ main }) => {
  return {
    order: main.order,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
