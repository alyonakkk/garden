import { connect } from "react-redux";
import style from "../../../../shared/footer/footer.module.css";
import {
  setActivePayment,
  setDetailActiveNav,
  setOrder,
} from "../../../../store/actions";
import { clickAdd, clickRemove } from "../../../../helpers/ProdAddRemove";
import { getProd, getProdIndex } from "../../../../helpers/getProd";
import ButtonCart from "../../../../shared/buttonCart/ButtonCart";
import button from "../../../../shared/buttonCart/button.module.css";
import PaymentItem from "../../../../shared/footer/PaymentItem";
import Payment from "../../../payment/Payment";
import { TransitionGroup } from "react-transition-group";
import details from "../../details.module.css";
import classNames from "classnames";

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
          price={prod.price}
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

const mapStateToProps = ({
  detailCard,
  order,
  modification,
  detailActiveNav,
}) => {
  return {
    detailCard,
    order,
    modification,
    detailActiveNav,
  };
};

const mapDispatchToProps = {
  setOrder,
  setActivePayment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
