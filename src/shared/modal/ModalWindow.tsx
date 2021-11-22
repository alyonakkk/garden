import rabbitImg from "./img/rabbit.png";
import loadingImg from "./img/loading.png";
import faildImg from "./img/faild.png";
import stark from "./img/stark.png";
import map from "./img/map.png";
import clock from "./img/clock.png";
import Modal from "./Modal";
import { connect } from "react-redux";
import Title from "./Title";
import Image from "./Image";
import { CSSTransition } from "react-transition-group";
import getTimeReady from "../../helpers/getTimeReady";
import filterOrder from "../../helpers/filterOrder";
import React from "react";
import {
  ModalDataItemType,
  ModalDataType,
  OrderTotalType,
  ShopDataItemType,
} from "../../helpers/getTypes";
import { RootState } from "../../store/store";
import styled, { createGlobalStyle } from "styled-components";

interface IModalWindow {
  response: string;
  activeModal: boolean;
  orderTotal: OrderTotalType;
  shopData: ShopDataItemType[];
  activeStore: string;
  userName: string;
}

interface IWindowStyle {
  bc: string;
}

const GlobalStyles = createGlobalStyle`
.window-enter {
  transform: translateY(800px);
}
.window-enter-active {
  transform: translateY(0);
  transition: 500ms all;
}
.window-exit {
  transform: translateY(0);
}
.window-exit-active {
  transform: translateY(-800px);
  transition: 500ms all;
}`;

const Window = styled.div<IWindowStyle>`
  padding: 40px 20px;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;

  display: flex;
  flex-direction: column;
  gap: 32px;

  background-color: ${(props) => props.bc};
`;

const ModalWindow: React.FC<IModalWindow> = ({
  response,
  activeModal,
  orderTotal,
  shopData,
  activeStore,
  userName,
}) => {
  const name: string = filterOrder(shopData, activeStore)[0]["name"];
  const address: string = filterOrder(shopData, activeStore)[0]["address"];
  const modalData: ModalDataType = {
    success: {
      img: rabbitImg,
      title: `Всё прошло успешно`,
      modal: {
        title: "До встречи в кофейне",
        list: {
          item1: {
            img: stark,
            title: userName,
            subtitle: "К вам обратятся",
          },
          item2: {
            img: map,
            title: name,
            subtitle: address,
          },
          item3: {
            img: clock,
            title: getTimeReady(orderTotal),
            subtitle: "Готовность заказа",
          },
        },
      },
      style: {
        backgroundColorBody: "#a5dfdd",
        backgroundColorButton: "#f769a2",
      },
    },
    loading: {
      img: loadingImg,
      title: "Проверка платежа",
      modal: {
        title: "Пожалуйста, ожидайте",
        text: "Скоро всё будет супер—пупер!",
      },
      style: {
        backgroundColorBody: "#A36EBE",
        backgroundColorButton: "#FFC633",
      },
    },
    faild: {
      img: faildImg,
      title: "Что-то пошло не так",
      modal: {
        title: "Приносим наши извинения",
        text: "Пожалуйста попробуйте повторить заказ",
      },
      style: {
        backgroundColorBody: "#FE6A69",
        backgroundColorButton: "#01A9D5",
      },
    },
  };

  function getData() {
    if (response === "success") return modalData.success;
    else if (response === "faild") return modalData.faild;
    else return modalData.loading;
  }

  const data: ModalDataItemType = getData();

  return (
    <>
      <GlobalStyles />
      <CSSTransition
        in={activeModal}
        timeout={500}
        classNames="window"
        unmountOnExit
      >
        <Window bc={data.style.backgroundColorBody}>
          <Image data={data} />
          <Title data={data} />
          <Modal data={data} />
        </Window>
      </CSSTransition>
    </>
  );
};

const mapStateToProps = ({ stores, main, user }: RootState) => {
  return {
    orderTotal: main.orderTotal,
    shopData: stores.shopData,
    activeStore: stores.activeStore,
    userName: user.name,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);
