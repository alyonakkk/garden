import { useState } from "react";
import CheckBoxRules from "../../../../shared/UI/checkbox/CheckBoxRules";
import payment from "../../payment.module.css";

function Pay() {
  let [active, setActive] = useState(null);

  return (
    <div className={payment.pay_container}>
      <CheckBoxRules
        title="Согласен с правилами оплаты"
        name="rules"
        id="rules"
        active={active}
        setActive={setActive}
      />
      <div className={payment.line}></div>
      <button disabled={!active} className={payment.pay}>
        Оплатить
      </button>
    </div>
  );
}

export default Pay;
