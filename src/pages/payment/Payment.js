import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import payment from "./payment.module.css";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import "./transition.css";

function Payment({ activePayment }) {
  return (
    <div
      className={`${payment.window} ${activePayment && payment.window_block}`}
    >
      <CSSTransition
        in={activePayment}
        timeout={500}
        classNames="window"
        unmountOnExit
      >
        <div className={payment.payment_wrap}>
          <div className={payment.decoration}></div>
          <div className={payment.payment}>
            <Header />
            <div className={payment.wrapper}>
              <Banner />
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}

const mapStateToProps = ({ activePayment }) => {
  return {
    activePayment,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
