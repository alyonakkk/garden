import { useEffect, useState } from "react";
import { connect } from "react-redux";
import RadioCircle from "../../../../shared/UI/radio/RadioCircle";
import payment from "../../payment.module.css";
import { setOrderTotal } from "../../../../store/actions";
import getTotalOrder from "../../../../helpers/getTotalOrder";

function Place({ orderTotal, setOrderTotal }) {
  let [active, setActive] = useState(null);
  const radioData = ["С собой", "В кофейне"];

  useEffect(() => {
    setOrderTotal(getTotalOrder(orderTotal, "place", active));
  }, [active]);

  function renderRadio() {
    return radioData.map((radio) => {
      return (
        <RadioCircle
          title={radio}
          name="place"
          id={radio}
          active={active}
          setActive={setActive}
          key={radio}
        />
      );
    });
  }

  return <div className={payment.place}>{renderRadio()}</div>;
}

const mapStateToProps = ({ orderTotal }) => {
  return {
    orderTotal,
  };
};

const mapDispatchToProps = {
  setOrderTotal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Place);
