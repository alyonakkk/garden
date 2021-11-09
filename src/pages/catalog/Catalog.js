import Footer from "../../shared/footer/Footer";
import Header from "../../shared/header/Header";
import catalog from "./catalog.module.css";
import Navigation from "./components/navigation/Navigation";
import Slider from "./components/slider/Slider";
import logo from "./components/img/catalog-login.png";

function Catalog() {
  const headerStyle = {
    classHeader: catalog.header,
    image: `url(${logo})`,
  };

  return (
    <div className={catalog.catalog}>
      <div>
        <Header title="Что желаете?" headerStyle={headerStyle} />
        <Navigation />
        <Slider />
      </div>
      <Footer />
    </div>
  );
}

export default Catalog;
