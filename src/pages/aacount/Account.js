import style from "./account.module.css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import LogOut from "./components/logOut/LogOut";
import OrderList from "./components/orderList/OrderList";

function Account() {
  return (
    <div className={style.bc}>
      <div className={style.container}>
        <Header />
        <Card />
        <OrderList classTitle={style.title} />
        <LogOut />
      </div>
    </div>
  );
}

export default Account;
