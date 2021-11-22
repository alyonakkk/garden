import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Radio from "../../../../shared/UI/radio/Radio";
import { setOrderTotal } from "../../../../store/actions";
import getTotalOrder from "../../../../helpers/getTotalOrder";
import { OrderTotalType } from "../../../../helpers/getTypes";
import { RootState } from "../../../../store/store";
import styled from "styled-components";

interface ITime {
  orderTotal: OrderTotalType;
  setOrderTotal: (orderTotal: any) => void;
}

const TimeEl = styled.div`
  margin-bottom: 20px;

  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const Time: React.FC<ITime> = ({ orderTotal, setOrderTotal }) => {
  let [active, setActive] = useState("");
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

  return <TimeEl>{renderRadio()}</TimeEl>;
};

const mapStateToProps = ({ main }: RootState) => {
  return {
    orderTotal: main.orderTotal,
  };
};

const mapDispatchToProps = {
  setOrderTotal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Time);
