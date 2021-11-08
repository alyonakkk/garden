import classNames from "classnames";
import style from "./footer.module.css";
import GardenItem from "./GardenItem";
import StoresItem from "./StoresItem";
import PaymentItem from "./PaymentItem";
import Payment from "../../pages/payment/Payment";
import { setActivePayment } from "../../store/actions";
import { connect } from "react-redux";
import { TransitionGroup } from "react-transition-group";
import { useState } from "react";

function Footer({ activePayment, setActivePayment }) {
  let classFooterItem = classNames({
    [style.item]: true,
  });

  function handlePayment() {
    setActivePayment(true);
  }

  return (
    <footer className={style.footer}>
      <ul className={style.list}>
        <GardenItem
          path="/"
          title="Garden"
          id="garden"
          className={classFooterItem}
        />
        <StoresItem
          path="/"
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
  );
}

const mapStateToProps = ({ activePayment }) => {
  return {
    activePayment,
  };
};

const mapDispatchToProps = {
  setActivePayment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
