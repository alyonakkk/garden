import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import React, { Suspense } from "react";
import { RootState } from "../../store/store";
import styled, { createGlobalStyle } from "styled-components";
import decorate from "./img/decorate.png";

const ModalWindow = React.lazy(() => import("../../shared/modal/ModalWindow"));

interface IPayment {
  activePayment: boolean;
  activeStore: string;
  response: string;
  activeModal: boolean;
}

interface IWindowStyle {
  flag: boolean;
}

const GlobalStyles = createGlobalStyle`
.win-enter {
  transform: translateY(100vh);
}
.win-enter-active {
  transform: translateY(0);
  transition: 400ms all;
}
.win-exit {
  transform: translateY(0);
}
.win-exit-active {
  transform: translateY(100vh);
  transition: 400ms all;
}`;

const Window = styled.div<IWindowStyle>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  display: ${(props) => (props.flag ? "flex" : "none")};
  align-items: flex-end;

  background-color: #00000040;
`;

const PaymentWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;
`;

const Decoration = styled.div`
  position: absolute;
  top: -8px;

  width: 100%;
  height: 16px;

  background: url(${decorate});
`;

const PaymentEl = styled.div`
  height: 566px;
  width: 100%;

  overflow: auto;

  background-color: #f3f4f0;
`;

const Wrapper = styled.div`
  padding: 0 0 20px 20px;
`;

const Payment: React.FC<IPayment> = ({
  activePayment,
  activeStore,
  response,
  activeModal,
}) => {
  return (
    <>
      <GlobalStyles />
      <Window flag={activePayment}></Window>
      <CSSTransition
        in={activePayment}
        timeout={400}
        classNames="win"
        unmountOnExit
      >
        <PaymentWrapper>
          <Decoration></Decoration>
          <PaymentEl>
            <Header />
            <Wrapper>
              {activeStore.length !== 0 ? (
                <>
                  <Banner />
                </>
              ) : (
                "Выберите кофейню"
              )}
            </Wrapper>
          </PaymentEl>
        </PaymentWrapper>
      </CSSTransition>
      {response.length !== 0 && (
        <Suspense fallback={<div>Loading...</div>}>
          <ModalWindow response={response} activeModal={activeModal} />
        </Suspense>
      )}
    </>
  );
};

const mapStateToProps = ({ payment, stores, modal }: RootState) => {
  return {
    activePayment: payment.activePayment,
    activeStore: stores.activeStore,
    response: modal.response,
    activeModal: modal.activeModal,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
