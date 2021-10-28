import Footer from "../../shared/footer/Footer";
import Header from "./components/header/Header";
import StoreList from "./components/storeList/StoreList";
import "./storeList.css";

function Store() {
  return (
    <div className="store-list">
      <Header title="Выберите кофейню" />
      <StoreList />
      <Footer />
    </div>
  );
}

export default Store;
