import { Link } from "react-router-dom";
import { connect } from "react-redux";
import style from "./footer.module.css";

function FooterItem({
  activeStore,
  order,
  title,
  d,
  path,
  checked,
  counter,
  ...props
}) {
  return (
    <Link to={path}>
      <li {...props}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={d} fill="currentColor" />
        </svg>
        <p>{title}</p>
        {checked !== undefined && activeStore.length !== 0 && (
          <div className={style.checked}></div>
        )}
        {counter !== undefined &&
        activeStore.length !== 0 &&
        order.lenght !== undefined ? (
          <div className={style.price}>
            <div className={style.counter__wrapper}>
              <p className={style.counter}>2</p>
            </div>
            <div>99999 P</div>
          </div>
        ) : (
          ""
        )}
      </li>
    </Link>
  );
}

const mapStateToProps = ({ activeStore, order }) => {
  return {
    activeStore,
    order,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FooterItem);
