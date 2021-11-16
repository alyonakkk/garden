import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import payment from "./payment.module.css";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import "./transition.css";
import PropTypes from "prop-types";
import React, { Suspense } from "react";

const ModalWindow = React.lazy(() => import("../../shared/modal/ModalWindow"));

function Payment({ activePayment, activeStore, response, activeModal }) {
  return (
    <>
      <div
        className={`${payment.window} ${activePayment && payment.window_block}`}
      ></div>
      <CSSTransition
        in={activePayment}
        timeout={400}
        classNames="win"
        unmountOnExit
      >
        <div className={payment.payment_wrap}>
          <div className={payment.decoration}></div>
          <div className={payment.payment}>
            <Header />
            <div className={payment.wrapper}>
              {activeStore.length !== 0 ? (
                <>
                  <Banner />
                </>
              ) : (
                "Выберите кофейню"
              )}
            </div>
          </div>
        </div>
      </CSSTransition>
      {response.length !== 0 && (
        <Suspense fallback={<div>Loading...</div>}>
          <ModalWindow response={response} activeModal={activeModal} />
        </Suspense>
      )}
    </>
  );
}

Payment.propTypes = {
  activePayment: PropTypes.bool.isRequired,
  activeStore: PropTypes.string.isRequired,
};

const mapStateToProps = ({ payment, stores, modal }) => {
  return {
    activePayment: payment.activePayment,
    activeStore: stores.activeStore,
    response: modal.response,
    activeModal: modal.activeModal,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
