function Slide({ title, price }) {
  return (
    <>
      <div className="slide">
        <div className="slide__content">
          <div className="slide__icon"></div>
          <p className="slide__title">{title}</p>
        </div>
        <div className="slider__wrapper">
          <p className="slide__count">x1</p>
          <p className="slide__price">{price} ₽</p>
        </div>
      </div>
    </>
  );
}

export default Slide;
