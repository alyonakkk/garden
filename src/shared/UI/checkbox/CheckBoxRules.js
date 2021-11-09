import classNames from "classnames";
import checkbox from "./checkBoxRules.module.css";
import PropTypes from "prop-types";

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

CheckBoxRules.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default CheckBoxRules;
