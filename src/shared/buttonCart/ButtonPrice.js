import style from "./button.module.css";

function ButtonPrice({ price }) {
  return <p className={style.price}>{price} P</p>;
}

export default ButtonPrice;
