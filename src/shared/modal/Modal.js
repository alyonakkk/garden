import { connect } from "react-redux";
import { Link } from "react-router-dom";
import modal from "./modal.module.css";
import { setActiveModal } from "../../store/actions";

function Modal({ data, setActiveModal }) {
  function handleLink() {
    setActiveModal(false);
    setTimeout(() => {
      window.location.reload();
    }, 450);
  }

  function renderSuccessList() {
    return Object.values(data.modal.list).map((el) => {
      return (
        <li className={modal.item} key={el.title}>
          <div
            className={modal.item_icon}
            style={{ backgroundImage: `url(${el.img})` }}
          ></div>
          <div className={modal.item_text_wrapper}>
            <p className={modal.item_title}>{el.title}</p>
            <p className={modal.item_subtitle}>{el.subtitle}</p>
          </div>
        </li>
      );
    });
  }

  return (
    <div className={modal.modal}>
      <p className={modal.modal_title}>{data.modal.title}</p>
      {data.modal.list !== undefined ? (
        <ul className={modal.list}>{renderSuccessList()}</ul>
      ) : (
        <p className={modal.modal_text}>{data.modal.text}</p>
      )}
      <Link
        to="/"
        className={modal.button}
        style={{ backgroundColor: `${data.style.backgroundColorButton}` }}
        onClick={handleLink}
      >
        Ok
      </Link>
    </div>
  );
}

const mapStateToProps = ({ orderTotal }) => {
  return {
    orderTotal,
  };
};

const mapDispatchToProps = {
  setActiveModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
