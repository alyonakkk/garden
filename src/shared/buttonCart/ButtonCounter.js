import style from "./button.module.css";
import PropTypes from "prop-types";

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

ButtonCounter.propTypes = {
  count: PropTypes.number.isRequired,
  handleAdd: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  className: PropTypes.string,
  classButton: PropTypes.string,
};

export default ButtonCounter;
