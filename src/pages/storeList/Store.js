import Footer from "../../shared/footer/Footer";
import Header from "./components/header/Header";
import StoreList from "./components/storeList/StoreList";
import storeList from "./storeList.module.css";

function Store() {
  return (
    <div className={storeList.store}>
      <Header title="Выберите кофейню" />
      <StoreList />
      <Footer />
    </div>
  );
}

export default Store;
