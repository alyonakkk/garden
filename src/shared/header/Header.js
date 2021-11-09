import style from "./header.module.css";
import PropTypes from "prop-types";

function Header({ title, headerStyle }) {
  const { classHeader, image, map } = headerStyle;
  return (
    <header className={style.header + " " + classHeader}>
      <div className={style.title}>{title}</div>
      <div className={style.wrapper}>
        <div className={style.map}>{map && map}</div>
        <div className={style.logo} style={{ backgroundImage: image }}></div>
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  headerStyle: PropTypes.object.isRequired,
};

export default Header;
