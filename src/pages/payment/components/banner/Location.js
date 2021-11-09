import { connect } from "react-redux";
import payment from "../../payment.module.css";
import filterOrder from "../../../../helpers/filterOrder";
import PropTypes from "prop-types";

function Location({ shopData, activeStore }) {
  const store = filterOrder(shopData, activeStore);

  return (
    <div className={payment.location}>
      <div className={payment.icon_wrapper}>
        <div className={payment.icon_location}></div>
      </div>
      <p className={payment.street}>
        {activeStore.length !== 0 ? store[0]["address"] : ""}
      </p>
    </div>
  );
}

Location.propTypes = {
  shopData: PropTypes.array.isRequired,
  activeStore: PropTypes.string.isRequired,
};

const mapStateToProps = ({ shopData, activeStore }) => {
  return {
    shopData,
    activeStore,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Location);
