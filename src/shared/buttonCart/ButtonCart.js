import style from "./button.module.css";
import ButtonCounter from "./ButtonCounter";
import ButtonPrice from "./ButtonPrice";

function ButtonCart({
  count,
  price,
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

export default ButtonCart;
