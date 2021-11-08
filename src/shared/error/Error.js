import { Link } from "react-router-dom";
import error from "./error.module.css";

function Error() {
  return (
    <div className={error.error}>
      <div className={error.wrapper}>
        <p className={error.text}>Выбирете сначала кофейню ^-^</p>
        <Link to="/catalog" className={error.back}>
          Выбрать кофейню
        </Link>
      </div>
    </div>
  );
}

export default Error;
