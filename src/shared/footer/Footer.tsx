import GardenItem from "./GardenItem";
import StoresItem from "./StoresItem";
import PaymentItem from "./PaymentItem";
import { setActivePayment } from "../../store/actions";
import { connect } from "react-redux";
import { TransitionGroup } from "react-transition-group";
import React from "react";
import Payment from "../../pages/payment/Payment";
import { RootState } from "../../store/store";
import { FooterEl, List } from "./FooterStyle";

interface IsetActivePayment {
  activePayment: boolean;
  setActivePayment: (activePayment: boolean) => void;
}

const Footer: React.FC<IsetActivePayment> = ({
  activePayment,
  setActivePayment,
}) => {
  function handlePayment() {
    setActivePayment(true);
  }

  return (
    <>
      <FooterEl>
        <List>
          <GardenItem path="/account" title="Garden" id="garden" />
          <StoresItem path="/catalog" title="Кофейни" id="stores" />
          <PaymentItem title="К оплате" id="payment" onClick={handlePayment} />
        </List>
      </FooterEl>
      <TransitionGroup>
        <Payment />
      </TransitionGroup>
    </>
  );
};

const mapStateToProps = ({ payment }: RootState) => {
  return {
    activePayment: payment.activePayment,
  };
};

const mapDispatchToProps = {
  setActivePayment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
