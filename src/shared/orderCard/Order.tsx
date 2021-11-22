import { connect } from "react-redux";
import OrderHeader from "./OrderHeader";
import ProdInfo from "./ProdInfo";
import ProdTitle from "./ProdTitle";
import { RootState } from "../../store/store";
import { OrderItemType } from "../../helpers/getTypes";
import styled from "styled-components";

interface IOrder {
  order: OrderItemType[];
  white: boolean;
}

const Item = styled.li`
  width: max-content;
  height: max-content;

  background-color: #383838;
  border-radius: 10px;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.28));
`;

const OrderEl = styled.div`
  padding-right: 20px;
  margin-bottom: 20px;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Order: React.FC<IOrder> = ({ order, white }) => {
  function renderOrderCard() {
    return order.map((item, index) => {
      return (
        <Item key={index}>
          <ProdTitle title={item.name ? item.name : ""} />
          <ProdInfo item={item} />
        </Item>
      );
    });
  }

  return (
    <OrderEl>
      <OrderHeader title="Выбрано" white={white} />
      <List>{renderOrderCard()}</List>
    </OrderEl>
  );
};

const mapStateToProps = ({ main }: RootState) => {
  return {
    order: main.order,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
