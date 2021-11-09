import style from "./button.module.css";
import PropTypes from "prop-types";

function ButtonPrice({ price }) {
  return <p className={style.price}>{price} P</p>;
}

ButtonPrice.propTypes = {
  price: PropTypes.number.isRequired,
};

export default ButtonPrice;
