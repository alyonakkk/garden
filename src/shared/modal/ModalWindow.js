import modal from "./modal.module.css";
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
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./window.css";
import getTimeReady from "../../helpers/getTimeReady";
import filterOrder from "../../helpers/filterOrder";

function ModalWindow({
  response,
  activeModal,
  orderTotal,
  shopData,
  activeStore,
}) {
  const name = filterOrder(shopData, activeStore)[0]["name"];
  const address = filterOrder(shopData, activeStore)[0]["address"];
  const modalData = {
    success: {
      img: rabbitImg,
      title: `Всё прошло успешно`,
      modal: {
        title: "До встречи в кофейне",
        list: {
          item1: {
            img: stark,
            title: "Коти Старк",
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

  const data = modalData[response];

  return (
    <CSSTransition
      in={activeModal}
      timeout={500}
      classNames="window"
      unmountOnExit
    >
      <div
        className={modal.window}
        style={{ backgroundColor: `${data.style.backgroundColorBody}` }}
      >
        <Image data={data} />
        <Title data={data} />
        <Modal data={data} />
      </div>
    </CSSTransition>
  );
}

const mapStateToProps = ({ orderTotal, shopData, activeStore }) => {
  return {
    orderTotal,
    shopData,
    activeStore,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);
