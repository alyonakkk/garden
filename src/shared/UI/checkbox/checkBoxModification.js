import classNames from "classnames";
import checkbox from "./checkBoxModification.module.css";
import PropTypes from "prop-types";

function CheckBoxModification({ item, changeCheckBox, isChecked, isDisabled }) {
  let classLabel = classNames({
    [checkbox.text]: true,
    [checkbox.disabled]: isDisabled(),
  });

  let classCheckIcon = classNames({
    [checkbox.check_icon]: true,
    [checkbox.check_icon_visible]: isChecked(),
  });

  return (
    <label className={classLabel} key={item.title}>
      <div className={checkbox.new}>
        <div className={classCheckIcon}></div>
      </div>
      <input
        type="checkbox"
        className={checkbox.checkbox}
        onChange={changeCheckBox}
        checked={isChecked()}
        disabled={isDisabled()}
      />
      {item.title}
    </label>
  );
}

CheckBoxModification.propTypes = {
  item: PropTypes.object.isRequired,
  changeCheckBox: PropTypes.func.isRequired,
  isChecked: PropTypes.func.isRequired,
  isDisabled: PropTypes.func.isRequired,
};

export default CheckBoxModification;
