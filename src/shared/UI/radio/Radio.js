import classNames from "classnames";
import radio from "./radio.module.css";

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

export default Radio;
