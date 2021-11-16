import classNames from "classnames";

export default function useCheck(
  className,
  classNameActive,
  id,
  active,
  setActive
) {
  let classCheckIcon = classNames({
    [className]: true,
    [classNameActive]: active === id,
  });

  function handleRadio() {
    setActive((active = id));
  }

  return { classCheckIcon, handleRadio };
}
