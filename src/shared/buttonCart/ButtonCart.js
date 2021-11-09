import style from "./button.module.css";
import ButtonCounter from "./ButtonCounter";
import ButtonPrice from "./ButtonPrice";
import PropTypes from "prop-types";

function ButtonCart({
  count,
  price = 0,
  handleAdd,
  handleRemove,
  color,
  ...props
}) {
  return (
    <div className={style.card_footer + " " + color}>
      <ButtonCounter
        count={count}
        handleAdd={handleAdd}
        handleRemove={handleRemove}
        {...props}
      />
      <ButtonPrice price={price} />
    </div>
  );
}

ButtonCart.propTypes = {
  count: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  handleAdd: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default ButtonCart;
