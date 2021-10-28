import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setClose } from "../../../../store/actions";

function StoreItem({ address, name, slug, color, close, setClose, onClick }) {
  const style = {
    backgroundColor: color,
  };

  useEffect(() => {
    const date = new Date();

    if (date.getHours() >= 23 || date.getHours() < 8) {
      setClose(true);
    } else {
      setClose(false);
    }
  }, []);

  return (
    <li className="store__item" style={style} onClick={onClick}>
      <div className="store__content content">
        <div className="content__wrapper">
          <p className="content__title">{name}</p>
          <p className="content__address">{address}</p>
        </div>
        <div className="content__info-wtapper">
          {close === true && (
            <p className="content__info">
              Закрыто до: <span className="content__info--red">08:00</span>
            </p>
          )}
        </div>
      </div>
      <Link to={`/catalog/${slug}`}>
        <div className="store__button">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.7194 9.27591C16.5417 9.09923 16.3012 9.00006 16.0506 9.00006C15.8 9.00006 15.5596 9.09923 15.3818 9.27591L11.9763 12.634L8.61816 9.27591C8.44042 9.09923 8.19999 9.00006 7.94938 9.00006C7.69877 9.00006 7.45834 9.09923 7.2806 9.27591C7.19169 9.3641 7.12112 9.46902 7.07296 9.58462C7.0248 9.70022 7 9.82421 7 9.94944C7 10.0747 7.0248 10.1987 7.07296 10.3143C7.12112 10.4299 7.19169 10.5348 7.2806 10.623L11.3028 14.6451C11.3909 14.734 11.4959 14.8046 11.6115 14.8528C11.7271 14.9009 11.8511 14.9257 11.9763 14.9257C12.1015 14.9257 12.2255 14.9009 12.3411 14.8528C12.4567 14.8046 12.5616 14.734 12.6498 14.6451L16.7194 10.623C16.8083 10.5348 16.8789 10.4299 16.927 10.3143C16.9752 10.1987 17 10.0747 17 9.94944C17 9.82421 16.9752 9.70022 16.927 9.58462C16.8789 9.46902 16.8083 9.3641 16.7194 9.27591Z"
              fill="#F3F4F0"
            />
          </svg>
        </div>
      </Link>
    </li>
  );
}

const mapStateToProps = ({ close }) => {
  return {
    close,
  };
};

const mapDispatchToProps = {
  setClose,
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreItem);