import style from "./loader.module.css";

function Loader() {
  return (
    <div className={style.wrapper}>
      <img
        className={style.loader}
        src="https://i.gifer.com/XOsX.gif"
        alt="loader"
      />
    </div>
  );
}

export default Loader;
