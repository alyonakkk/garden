import payment from "../../payment.module.css";
import PropTypes from "prop-types";

function OrderHeader({ title }) {
  return (
    <div className={payment.title_wrapper}>
      <p className={payment.title}>{title}</p>
    </div>
  );
}

OrderHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default OrderHeader;
