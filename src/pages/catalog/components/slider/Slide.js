import { connect } from "react-redux";
import countProd from "../../../../helpers/countProd";
import catalog from "../../catalog.module.css";

function Slide({ title, price, slug, order }) {
  const prodCount = countProd(order, slug);

  return (
    <>
      <div className={catalog.slide}>
        <div className={catalog.slide_content}>
          <div className={catalog.slide_icon}></div>
          <p className={catalog.slide_title}>{title}</p>
        </div>
        <div className={catalog.slider_wrapper}>
          {prodCount !== 0 ? (
            <p className={catalog.slide_count}>x{prodCount}</p>
          ) : (
            <p className={catalog.slide_count}></p>
          )}
          <p className={catalog.slide_price}>{price} ₽</p>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = ({ order }) => {
  return {
    order,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Slide);
