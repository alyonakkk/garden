import { connect } from "react-redux";
import payment from "../../payment.module.css";
import filterOrder from "../../../../helpers/filterOrder";

function Location({ shopData, activeStore }) {
  const store = filterOrder(shopData, activeStore);

  return (
    <div className={payment.location}>
      <div className={payment.icon_wrapper}>
        <div className={payment.icon_location}></div>
      </div>
      <p className={payment.street}>{store[0]["address"]}</p>
    </div>
  );
}

const mapStateToProps = ({ shopData, activeStore }) => {
  return {
    shopData,
    activeStore,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Location);
