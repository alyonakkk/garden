import { useEffect, useState } from "react";
import { connect } from "react-redux";
import RadioCircle from "../../../../shared/UI/radio/RadioCircle";
import { setOrderTotal } from "../../../../store/actions";
import getTotalOrder from "../../../../helpers/getTotalOrder";
import { OrderTotalType } from "../../../../helpers/getTypes";
import { RootState } from "../../../../store/store";
import styled from "styled-components";

interface IPlace {
  orderTotal: OrderTotalType;
  setOrderTotal: (orderTotal: any) => void;
}

const PlaceEl = styled.div`
  margin-bottom: 24px;

  display: flex;
  gap: 40px;
`;

const Place: React.FC<IPlace> = ({ orderTotal, setOrderTotal }) => {
  let [active, setActive] = useState("");
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

  return <PlaceEl>{renderRadio()}</PlaceEl>;
};

const mapStateToProps = ({ main }: RootState) => {
  return {
    orderTotal: main.orderTotal,
  };
};

const mapDispatchToProps = {
  setOrderTotal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Place);
