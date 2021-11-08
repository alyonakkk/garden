import Footer from "../../shared/footer/Footer";
import Header from "./components/header/Header";
import catalog from "./catalog.module.css";
import Navigation from "./components/navigation/Navigation";
import Slider from "./components/slider/Slider";

function Catalog() {
  return (
    <div className={catalog.catalog}>
      <Header title="Что желаете?" />
      <Navigation />
      <Slider />
      <Footer />
    </div>
  );
}

export default Catalog;
