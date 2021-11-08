import style from "../../../../shared/header/header.module.css";
import catalog from "../../catalog.module.css";

function Header({ title }) {
  return (
    <header className={style.header + " " + catalog.header}>
      <div className={style.title}>{title}</div>
      <div className={style.logo + " " + style.logo__catalog}></div>
    </header>
  );
}

export default Header;
