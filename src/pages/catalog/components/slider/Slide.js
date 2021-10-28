import { connect } from "react-redux";

function Slide({ title, price, slug, order }) {
  let filtered = order.filter((el) => el.slug === slug);

  return (
    <>
      <div className="slide">
        <div className="slide__content">
          <div className="slide__icon"></div>
          <p className="slide__title">{title}</p>
        </div>
        <div className="slider__wrapper">
          {filtered.length !== 0 ? (
            <p className="slide__count">x{filtered[0].counter}</p>
          ) : (
            <p className="slide__count"></p>
          )}
          <p className="slide__price">{price} ₽</p>
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
