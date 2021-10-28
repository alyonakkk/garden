import style from "../../../../shared/header/header.module.css";

function Header({ title }) {
  return (
    <header className={style.header + " " + style.header__catalog}>
      <div className={style.title}>{title}</div>
      <div className={style.logo + " " + style.logo__catalog}></div>
    </header>
  );
}

export default Header;
