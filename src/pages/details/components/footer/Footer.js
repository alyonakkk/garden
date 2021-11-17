import { connect } from "react-redux";
import style from "../../../../shared/footer/footer.module.css";
import { setActivePayment, setOrder } from "../../../../store/actions";
import { clickAdd, clickRemove } from "../../../../helpers/ProdAddRemove";
import { getProd, getProdIndex } from "../../../../helpers/getProd";
import ButtonCart from "../../../../shared/buttonCart/ButtonCart";
import button from "../../../../shared/buttonCart/button.module.css";
import PaymentItem from "../../../../shared/footer/PaymentItem";
import { TransitionGroup } from "react-transition-group";
import details from "../../details.module.css";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import Payment from "../../../payment/Payment";

function Footer({
  detailCard,
  order,
  setOrder,
  modification,
  detailActiveNav,
  setActivePayment,
}) {
  const prod = getProd(order, detailCard.slug, modification);
  const prodIndex = getProdIndex(order, detailCard.slug, modification);
  let classButton = classNames({
    [style.button]: true,
    [details.information_btn]: detailActiveNav === "information",
    [details.modification_btn]: detailActiveNav === "modification",
  });

  function handleAdd() {
    clickAdd(prod, prodIndex, detailCard, modification, setOrder, order);
  }

  function handleRemove() {
    clickRemove(prod, prodIndex, order, setOrder);
  }

  function handlePayment() {
    setActivePayment(true);
  }

  return (
    <footer className={style.footer + " " + style.footer__flex}>
      {prod === undefined ? (
        <div className={button.card_footer + " " + details.card_bc}>
          <div className={button.button_block + " " + style.button_container}>
            <button className={classButton} onClick={handleAdd}>
              Добавить
            </button>
          </div>
          <p className={button.price}>{detailCard.price} ₽</p>
        </div>
      ) : (
        <ButtonCart
          count={prod.count}
          price={Number(prod.price)}
          handleAdd={handleAdd}
          handleRemove={handleRemove}
          color={details.card_bc}
          className={style.button_container}
          classButton={classButton}
        />
      )}
      <PaymentItem title="К оплате" id="payment" onClick={handlePayment} />
      <TransitionGroup>
        <Payment />
      </TransitionGroup>
    </footer>
  );
}

Footer.propTypes = {
  detailCard: PropTypes.object.isRequired,
  order: PropTypes.array.isRequired,
  setOrder: PropTypes.func.isRequired,
  modification: PropTypes.object.isRequired,
  detailActiveNav: PropTypes.string.isRequired,
  setActivePayment: PropTypes.func.isRequired,
};

const mapStateToProps = ({ card, main }) => {
  return {
    detailCard: card.detailCard,
    order: main.order,
    modification: main.modification,
    detailActiveNav: card.detailActiveNav,
  };
};

const mapDispatchToProps = {
  setOrder,
  setActivePayment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
