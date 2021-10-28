import { connect } from "react-redux";
import { setOrder } from "../../../../../store/actions";

function ModificationList({ title, list, order, setOrder }) {
  function renderList(list) {
    return list.map((item) => {
      function changeCheckBox() {}

      return (
        <label className="banner__label" key={item.title}>
          <input
            className="banner__checkbox"
            type="checkbox"
            onChange={changeCheckBox}
          />
          {item.title}
          {item.price !== undefined && (
            <span className="banner__price">{item.price} ₽</span>
          )}
        </label>
      );
    });
  }

  return (
    <form className="banner__form">
      <label className="banner__title">{title}</label>
      <div className="banner__list">{renderList(list)}</div>
    </form>
  );
}

const mapStateToProps = ({ order }) => {
  return {
    order,
  };
};

const mapDispatchToProps = {
  setOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModificationList);
