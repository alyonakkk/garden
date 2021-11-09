import classNames from "classnames";
import style from "./footer.module.css";
import GardenItem from "./GardenItem";
import StoresItem from "./StoresItem";
import PaymentItem from "./PaymentItem";
import Payment from "../../pages/payment/Payment";
import { setActivePayment } from "../../store/actions";
import { connect } from "react-redux";
import { TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";
import ModalWindow from "../modal/ModalWindow";

function Footer({ setActivePayment, response, activeModal }) {
  let classFooterItem = classNames({
    [style.item]: true,
  });

  function handlePayment() {
    setActivePayment(true);
  }

  return (
    <>
      <footer className={style.footer}>
        <ul className={style.list}>
          <GardenItem
            path="/catalog"
            title="Garden"
            id="garden"
            className={classFooterItem}
          />
          <StoresItem
            path="/catalog"
            title="Кофейни"
            id="stores"
            className={classFooterItem}
          />
          <PaymentItem
            title="К оплате"
            id="payment"
            className={classFooterItem}
            onClick={handlePayment}
          />

          <TransitionGroup>
            <Payment />
          </TransitionGroup>
        </ul>
      </footer>
    </>
  );
}

Footer.propTypes = {
  setActivePayment: PropTypes.func.isRequired,
};

const mapStateToProps = ({ response, activeModal }) => {
  return { response, activeModal };
};

const mapDispatchToProps = {
  setActivePayment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
