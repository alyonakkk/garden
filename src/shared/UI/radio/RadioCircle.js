import classNames from "classnames";
import radio from "./radioCircle.module.css";
import PropTypes from "prop-types";
import useCheck from "../../../hooks/useCheck";

function RadioCircle({ title, name, id, active, setActive }) {
  let radioCircle = useCheck(
    radio.check_icon,
    radio.check_icon_visible,
    id,
    active,
    setActive
  );
  // let classCheckIcon = classNames({
  //   [radio.check_icon]: true,
  //   [radio.check_icon_visible]: active === id,
  // });

  // function handleRadio() {
  //   setActive((active = id));
  // }

  return (
    <label className={radio.text}>
      <input
        className={radio.radio}
        type="radio"
        name={name}
        id={id}
        onChange={radioCircle.handleRadio}
      />
      <div className={radio.new}>
        <div className={radioCircle.classCheckIcon}></div>
      </div>
      {title}
    </label>
  );
}

RadioCircle.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default RadioCircle;
