import radio from "./radio.module.css";
import PropTypes from "prop-types";
import useCheck from "../../../hooks/useCheck";

function Radio({ title, name, id, active, setActive }) {
  let radioCheck = useCheck(
    radio.radio_new,
    radio.radio_active,
    id,
    active,
    setActive
  );

  return (
    <label
      className={radioCheck.classCheckIcon}
      onClick={radioCheck.handleRadio}
    >
      {title}
      <input className={radio.radio} name={name} type="radio" />
    </label>
  );
}

Radio.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default Radio;
