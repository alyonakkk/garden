import style from "../../account.module.css";

function LogOut() {
  function handleButton() {
    localStorage.removeItem("name");
    localStorage.removeItem("phone");
  }

  return (
    <a href="/" onClick={handleButton} type="button" className={style.button}>
      Выйти
    </a>
  );
}

export default LogOut;
