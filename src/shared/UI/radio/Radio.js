import classNames from "classnames";
import radio from "./radio.module.css";
import PropTypes from "prop-types";

function Radio({ title, name, id, active, setActive }) {
  let classRadio = classNames({
    [radio.radio_new]: true,
    [radio.radio_active]: active === id,
  });

  function handleRadio() {
    setActive((active = id));
  }

  return (
    <label className={classRadio} onClick={handleRadio}>
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
