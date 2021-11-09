import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Input from "../../../../shared/UI/input/Input";
import { setOrderTotal } from "../../../../store/actions";
import getTotalOrder from "../../../../helpers/getTotalOrder";
import PropTypes from "prop-types";

function Comment({ orderTotal, setOrderTotal }) {
  let [value, setValue] = useState("");

  useEffect(() => {
    setOrderTotal(getTotalOrder(orderTotal, "comment", value));
  }, [value]);

  function handleInput(e) {
    setValue((value = e.target.value));
  }

  return (
    <Input
      placeholder="Вселенную в кофе"
      value={value}
      onChange={handleInput}
    />
  );
}

Comment.propTypes = {
  orderTotal: PropTypes.object.isRequired,
  setOrderTotal: PropTypes.func.isRequired,
};

const mapStateToProps = ({ orderTotal }) => {
  return {
    orderTotal,
  };
};

const mapDispatchToProps = {
  setOrderTotal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
