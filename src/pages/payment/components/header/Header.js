import style from "../../../../shared/header/header.module.css";
import payment from "../../payment.module.css";
import { connect } from "react-redux";
import sumPrice from "../../../../helpers/sumPrice";
import { setActivePayment } from "../../../../store/actions";

function Header({ setActivePayment, order }) {
  function handleClose() {
    setActivePayment(false);
  }

  return (
    <div className={style.header + " " + payment.header}>
      <div className={style.wrapper}>
        <p className={style.title + " " + style.title__detail}>
          Итого: <span className={style.title__green}>{sumPrice(order)} ₽</span>
        </p>
      </div>

      <div
        className={style.back + " " + style.hide__modal}
        onClick={handleClose}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 5.99994H3.41L6.71 2.70994C6.89831 2.52164 7.00409 2.26624 7.00409 1.99994C7.00409 1.73364 6.89831 1.47825 6.71 1.28994C6.5217 1.10164 6.2663 0.99585 6 0.99585C5.7337 0.99585 5.47831 1.10164 5.29 1.28994L0.290003 6.28994C0.198963 6.38505 0.127598 6.49719 0.0800031 6.61994C-0.0200149 6.8634 -0.0200149 7.13648 0.0800031 7.37994C0.127598 7.50269 0.198963 7.61484 0.290003 7.70994L5.29 12.7099C5.38297 12.8037 5.49357 12.8781 5.61543 12.9288C5.73729 12.9796 5.86799 13.0057 6 13.0057C6.13202 13.0057 6.26272 12.9796 6.38458 12.9288C6.50644 12.8781 6.61704 12.8037 6.71 12.7099C6.80373 12.617 6.87813 12.5064 6.92889 12.3845C6.97966 12.2627 7.0058 12.132 7.0058 11.9999C7.0058 11.8679 6.97966 11.7372 6.92889 11.6154C6.87813 11.4935 6.80373 11.3829 6.71 11.2899L3.41 7.99994H11C11.2652 7.99994 11.5196 7.89458 11.7071 7.70705C11.8946 7.51951 12 7.26516 12 6.99994C12 6.73472 11.8946 6.48037 11.7071 6.29283C11.5196 6.1053 11.2652 5.99994 11 5.99994Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}

const mapStateToProps = ({ order }) => {
  return {
    order,
  };
};

const mapDispatchToProps = {
  setActivePayment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
