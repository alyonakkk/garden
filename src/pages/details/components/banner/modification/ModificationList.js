import { connect } from "react-redux";
import initModification from "../../../../../helpers/getInitModification";
import CheckBoxModification from "../../../../../shared/UI/checkbox/checkBoxModification";
import { setOrder, setModification } from "../../../../../store/actions";
import details from "../../../details.module.css";

function ModificationList({ title, list, modification, setModification }) {
  function renderList(list) {
    return list.map((item, index) => {
      function changeCheckBox() {
        item.checked = !item.checked;

        if (index === 0 && item.checked) {
          setModification(initModification);
        } else {
          setModification(updateModification(item.id, item.checked));
        }
      }

      function updateModification(prop, val) {
        return {
          ...modification,
          [prop]: {
            ...modification[prop],
            value: val,
          },
        };
      }

      function isChecked() {
        if (index !== 0 && list[0].checked) {
          item.checked = false;
        }
        return item.checked;
      }

      function isDisabled() {
        return index !== 0 && list[0].checked;
      }

      return (
        <div className={details.container_wrapper} key={item.id}>
          <CheckBoxModification
            item={item}
            isChecked={isChecked}
            isDisabled={isDisabled}
            changeCheckBox={changeCheckBox}
          />
          {item.price !== undefined && (
            <span className={details.container_price}>{item.price} ₽</span>
          )}
        </div>
      );
    });
  }

  return (
    <form className={details.container_form}>
      <label className={details.container_title}>{title}</label>
      <div className={details.container_list}>{renderList(list)}</div>
    </form>
  );
}

const mapStateToProps = ({ order, detailCard, modification }) => {
  return {
    order,
    detailCard,
    modification,
  };
};

const mapDispatchToProps = {
  setOrder,
  setModification,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModificationList);
