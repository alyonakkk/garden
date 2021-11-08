import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Radio from "../../../../shared/UI/radio/Radio";
import payment from "../../payment.module.css";
import { setOrderTotal } from "../../../../store/actions";
import getTotalOrder from "../../../../helpers/getTotalOrder";

function Time({ orderTotal, setOrderTotal }) {
  let [active, setActive] = useState(null);
  const radioData = ["5 минут", "10 минут", "15 минут", "20 минут"];

  useEffect(() => {
    setOrderTotal(getTotalOrder(orderTotal, "time", active));
  }, [active]);

  function renderRadio() {
    return radioData.map((radio) => {
      return (
        <Radio
          title={radio}
          active={active}
          setActive={setActive}
          name="time"
          id={radio}
          key={radio}
        />
      );
    });
  }

  return <div className={payment.time}>{renderRadio()}</div>;
}

const mapStateToProps = ({ orderTotal }) => {
  return {
    orderTotal,
  };
};

const mapDispatchToProps = {
  setOrderTotal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Time);