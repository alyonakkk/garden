import classNames from "classnames";
import style from "./footer.module.css";
import GardenItem from "./GardenItem";
import StoresItem from "./StoresItem";
import PaymentItem from "./PaymentItem";
import { setActivePayment } from "../../store/actions";
import { connect } from "react-redux";
import { TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";
import React from "react";
import Payment from "../../pages/payment/Payment";

function Footer({ setActivePayment }) {
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
            path="/account"
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

const mapStateToProps = ({}) => {
  return {};
};

const mapDispatchToProps = {
  setActivePayment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
