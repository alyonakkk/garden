import style from "./orderCard.module.css";
import PropTypes from "prop-types";

function OrderHeader({ title, ...props }) {
  return (
    <div className={style.title_wrapper} {...props}>
      <p className={style.title}>{title}</p>
    </div>
  );
}

OrderHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default OrderHeader;
