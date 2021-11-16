import style from "../../autorization.module.css";
import { useState } from "react";
import InputMask from "react-input-mask";
import classNames from "classnames";
import {
  setAutorizationActive,
  setUserName,
  setUserPhone,
  fetchDataAutorizationPOST,
} from "../../../../store/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Modal({
  data,
  setAutorizationActive,
  setUserName,
  userPhone,
  setUserPhone,
  fetchDataAutorizationPOST,
}) {
  let [value, setValue] = useState("");
  let [invalid, setInvalid] = useState(false);

  let classInput = classNames({
    [style.input]: true,
    [style.input_invalid]: invalid,
  });

  let classLink = classNames({
    [style.text]: true,
    [style.text_link]: data.func,
  });

  function handleForm(e) {
    e.preventDefault();

    if (data.name === "phone") {
      if (value.length !== 13) {
        setInvalid((invalid = true));
      } else {
        setInvalid((invalid = false));
        setValue("");
        setUserPhone(`+7 ${value}`);
        setAutorizationActive("code");
      }
    } else if (data.name === "code") {
      if (value.length !== 5) {
        setInvalid((invalid = true));
      } else {
        setInvalid((invalid = false));
        setValue("");
        setAutorizationActive("name");
      }
    } else {
      if (value.length === 0 || value.length <= 3) {
        setInvalid((invalid = true));
      } else {
        setInvalid((invalid = false));
        setValue("");
        setUserName(value);
        fetchDataAutorizationPOST("/login");
        localStorage.setItem("name", value);
        localStorage.setItem("phone", userPhone);
      }
    }
  }

  return (
    <div className={style.modal}>
      <p className={style.title}>{data.title}</p>
      <form onSubmit={handleForm}>
        <label className={style.label}>
          {data.form.lable}
          <InputMask
            className={classInput}
            mask={data.form.mask}
            maskPlaceholder={null}
            onChange={(e) => setValue((value = e.target.value))}
            value={value}
            placeholder={data.form.placeholder}
          />
        </label>
        <button className={style.button}>{data.form.button}</button>
      </form>
      <div className={classLink} onClick={data.func ? data.func : null}>
        {data.text}
      </div>
    </div>
  );
}

const mapStateToProps = ({ user }) => {
  return {
    userPhone: user.phone,
  };
};

const mapDispatchToProps = {
  setAutorizationActive,
  setUserName,
  setUserPhone,
  fetchDataAutorizationPOST,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
