import { connect } from "react-redux";
import { setActivePayment, setOrder } from "../../../../store/actions";
import { clickAdd, clickRemove } from "../../../../helpers/ProdAddRemove";
import { getProd, getProdIndex } from "../../../../helpers/getProd";
import ButtonCart from "../../../../shared/buttonCart/ButtonCart";
import PaymentItem from "../../../../shared/footer/PaymentItem";
import { TransitionGroup } from "react-transition-group";
import React from "react";
import Payment from "../../../payment/Payment";
import { OrderItemType } from "../../../../helpers/getTypes";
import { RootState } from "../../../../store/store";
import styled from "styled-components";
import {
  Button,
  ButtonContainet,
  FooterFlex,
} from "../../../../shared/footer/FooterStyle";

interface IFooter {
  detailCard: any;
  order: OrderItemType[];
  setOrder: (order: any) => void;
  modification: any;
  detailActiveNav: string;
  setActivePayment: (activePayment: boolean) => void;
}

interface IButtonCard {
  activeNav: string;
}

const ButtonBlock = styled(ButtonContainet)`
  display: flex;
  align-items: center;
  gap: 8px;

  background-color: #f3f4f0;
  border-radius: 10px;
`;

const ButtonCard = styled(Button)<IButtonCard>`
  color: ${(props) => (props.activeNav === "information" ? "#14ad99;" : "red")};
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  width: max-content;

  background-color: #383838;
  border-radius: 10px;
`;

const Price = styled.p`
  padding: 10px;

  font-size: 12px;
  font-weight: 800;

  color: #f3f4f0;
`;

const ButtonContainer = styled(ButtonCart)`
  display: flex;
  justify-content: center;
  width: 143px;
  height: 55px;
`;

const Footer: React.FC<IFooter> = ({
  detailCard,
  order,
  setOrder,
  modification,
  detailActiveNav,
  setActivePayment,
}) => {
  const prod = getProd(order, detailCard.slug, modification);
  const prodIndex = getProdIndex(order, detailCard.slug, modification);

  function handleAdd(): void {
    clickAdd(prod!, prodIndex, detailCard, modification, setOrder, order);
  }

  function handleRemove(): void {
    clickRemove(prod!, prodIndex, order, setOrder);
  }

  function handlePayment(): void {
    setActivePayment(true);
  }

  return (
    <FooterFlex>
      {prod === undefined ? (
        <Card>
          <ButtonBlock>
            <ButtonCard activeNav={detailActiveNav} onClick={handleAdd}>
              Добавить
            </ButtonCard>
          </ButtonBlock>
          <Price>{detailCard.price} ₽</Price>
        </Card>
      ) : (
        <ButtonContainer
          count={prod.count}
          price={Number(prod.price)}
          handleAdd={handleAdd}
          handleRemove={handleRemove}
          activeNav={detailActiveNav}
          black={false}
        />
      )}
      <PaymentItem title="К оплате" id="payment" onClick={handlePayment} />
      <TransitionGroup>
        <Payment />
      </TransitionGroup>
    </FooterFlex>
  );
};

const mapStateToProps = ({ card, main }: RootState) => {
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
