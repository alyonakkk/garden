import classNames from "classnames";
import radio from "./radioCircle.module.css";

function RadioCircle({ title, name, id, active, setActive }) {
  let classCheckIcon = classNames({
    [radio.check_icon]: true,
    [radio.check_icon_visible]: active === id,
  });

  function handleRadio() {
    setActive((active = id));
  }

  return (
    <label className={radio.text}>
      <input
        className={radio.radio}
        type="radio"
        name={name}
        id={id}
        onChange={handleRadio}
      />
      <div className={radio.new}>
        <div className={classCheckIcon}></div>
      </div>
      {title}
    </label>
  );
}

export default RadioCircle;
