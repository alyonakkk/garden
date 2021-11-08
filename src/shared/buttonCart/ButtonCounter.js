import style from "./button.module.css";

function ButtonCounter({
  count,
  handleAdd,
  handleRemove,
  className,
  classButton,
}) {
  return (
    <div className={style.button_block + " " + className}>
      <button
        className={style.button + " " + classButton}
        onClick={handleRemove}
        type="button"
      >
        -
      </button>
      <div className={style.counter}>{count}</div>
      <button
        className={style.button + " " + classButton}
        onClick={handleAdd}
        type="button"
      >
        +
      </button>
    </div>
  );
}

export default ButtonCounter;
