import style from "./orderCard.module.css";
import { clickAdd, clickRemove } from "../../helpers/ProdAddRemove";
import { setOrder } from "../../store/actions";
import { connect } from "react-redux";
import { getProd, getProdIndex } from "../../helpers/getProd";
import ButtonCart from "../buttonCart/ButtonCart";
import sumModidfication from "../../helpers/sumModification";
import PropTypes from "prop-types";

function ProdInfo({ item, order, setOrder }) {
  const { slug, price, count, modification } = item;
  const prod = getProd(order, slug, modification);
  const prodIndex = getProdIndex(order, slug, modification);
  const totalProdPrice = Number(price) + Number(sumModidfication(item));

  function handleAdd(e) {
    e.preventDefault();

    clickAdd(prod, prodIndex, item, modification, setOrder, order);
  }

  function handleRemove(e) {
    e.preventDefault();

    clickRemove(prod, prodIndex, order, setOrder);
  }

  function renderModification() {
    return Object.values(modification).map((mod, index) => {
      return (
        mod.value === true && (
          <li className={style.modification_item} key={index}>
            + {mod.name}
          </li>
        )
      );
    });
  }

  return (
    <div className={style.wrapper_card}>
      <ul className={style.modification_list}>{renderModification()}</ul>
      <ButtonCart
        count={count}
        price={totalProdPrice}
        handleAdd={handleAdd}
        handleRemove={handleRemove}
        color={style.card_bc}
      />
    </div>
  );
}

ProdInfo.propTypes = {
  item: PropTypes.object.isRequired,
  order: PropTypes.array.isRequired,
  setOrder: PropTypes.func.isRequired,
};

const mapStateToProps = ({ main }) => {
  return {
    order: main.order,
  };
};

const mapDispatchToProps = {
  setOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProdInfo);