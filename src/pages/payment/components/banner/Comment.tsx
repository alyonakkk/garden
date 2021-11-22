import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Input from "../../../../shared/UI/input/Input";
import { setOrderTotal } from "../../../../store/actions";
import getTotalOrder from "../../../../helpers/getTotalOrder";
import { RootState } from "../../../../store/store";
import { OrderTotalType } from "../../../../helpers/getTypes";

interface IComment {
  orderTotal: OrderTotalType;
  setOrderTotal: (orderTotal: any) => void;
}

const Comment: React.FC<IComment> = ({ orderTotal, setOrderTotal }) => {
  let [value, setValue] = useState("");

  useEffect(() => {
    setOrderTotal(getTotalOrder(orderTotal, "comment", value));
  }, [value]);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>): void {
    setValue((value = e.target.value));
  }

  return (
    <Input
      placeholder="Вселенную в кофе"
      value={value}
      onChange={handleInput}
    />
  );
};

const mapStateToProps = ({ main }: RootState) => {
  return {
    orderTotal: main.orderTotal,
  };
};

const mapDispatchToProps = {
  setOrderTotal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
