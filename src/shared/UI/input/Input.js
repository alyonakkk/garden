import input from "./input.module.css";

function Input({ ...props }) {
  return <input className={input.input} type="text" {...props} />;
}

export default Input;
