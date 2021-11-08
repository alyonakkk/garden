import classNames from "classnames";
import checkbox from "./checkBoxRules.module.css";

function CheckBoxRules({ title, name, id, active, setActive }) {
  let classCheckIcon = classNames({
    [checkbox.check_icon]: true,
    [checkbox.check_icon_visible]: active,
  });

  function handleCheckBox() {
    setActive(!active);
  }

  return (
    <label className={checkbox.text}>
      <div className={checkbox.new}>
        <div className={classCheckIcon}></div>
      </div>
      <input
        className={checkbox.checkbox}
        type="checkbox"
        name={name}
        id={id}
        onChange={handleCheckBox}
      />
      {title}
    </label>
  );
}

export default CheckBoxRules;
