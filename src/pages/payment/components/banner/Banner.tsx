import Order from "../../../../shared/orderCard/Order";
import OrderHeader from "../../../../shared/orderCard/OrderHeader";
import Place from "./Place";
import Time from "./Time";
import Comment from "./Comment";
import Pay from "./Pay";
import Location from "./Location";
import { connect } from "react-redux";
import {
  setOrderTotal,
  setResponse,
  setActiveModal,
  fetchDataPOST,
} from "../../../../store/actions";
import getTotalOrder from "../../../../helpers/getTotalOrder";
import React, { useEffect } from "react";
import { RootState } from "../../../../store/store";
import { OrderItemType, OrderTotalType } from "../../../../helpers/getTypes";
import styled from "styled-components";

interface IBanner {
  order: OrderItemType[];
  orderTotal: OrderTotalType;
  setOrderTotal: (orderTotal: any) => void;
  fetchDataPOST: (url: string, orderTotal: OrderTotalType) => void;
}

const BannerEl = styled.div`
  height: max-content;

  border: 2px solid #383838;
  border-right: none;
  border-top-left-radius: 20px;
`;

const Container = styled.div`
  padding: 0 22px;
`;

const Banner: React.FC<IBanner> = ({
  order,
  orderTotal,
  setOrderTotal,
  fetchDataPOST,
}) => {
  useEffect(() => {
    setOrderTotal(getTotalOrder(orderTotal, "order", order));
  }, [order]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (
      orderTotal.place.length !== 0 &&
      orderTotal.time.length !== 0 &&
      orderTotal.order!.length !== 0
    ) {
      fetchDataPOST("https://jsonplaceholder.typicode.com/todos", orderTotal);
    } else {
      console.log("error");
    }
  }

  return (
    <>
      <BannerEl>
        <Location />

        <div>
          <form onSubmit={handleSubmit}>
            <Container>
              <Place />
              <OrderHeader white={false} title="Приготовить заказ через" />
              <Time />
              <Order white={false} />
              <OrderHeader white={false} title="Комментарий" />
              <Comment />
            </Container>
            <Pay />
          </form>
        </div>
      </BannerEl>
    </>
  );
};

const mapStateToProps = ({ main }: RootState) => {
  return {
    order: main.order,
    orderTotal: main.orderTotal,
  };
};

const mapDispatchToProps = {
  setOrderTotal,
  setResponse,
  setActiveModal,
  fetchDataPOST,
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
