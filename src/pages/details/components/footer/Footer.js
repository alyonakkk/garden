import { connect } from "react-redux";
import style from "../../../../shared/footer/footer.module.css";

function Footer({ detailCard }) {
  return (
    <footer className={style.footer}>
      <div className={style.price + " " + style.price__detail}>
        <button className={style.button}>Добавить</button>
        <p>{detailCard.price} ₽</p>
      </div>
    </footer>
  );
}

const mapStateToProps = ({ detailCard }) => {
  return {
    detailCard,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
