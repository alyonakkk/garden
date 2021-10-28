import { useEffect } from "react";
import { connect } from "react-redux";
import { setDetailCard, fetchDataGET } from "../../store/actions";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./details.css";
import Information from "./components/banner/information/Information";
import Modification from "./components/banner/modification/Modification";
import Nav from "./components/banner/nav/Nav";
import classNames from "classnames";

function Details({
  activeStore,
  activeItem,
  detailCard,
  setDetailCard,
  detailActiveNav,
  fetchDataGET,
}) {
  let classBanner = classNames({
    information__banner: true,
    "information-banner": detailActiveNav === "information",
    "modification-banner": detailActiveNav === "modification",
  });

  let classBc = classNames({
    information__bc: true,
    "information-bc": detailActiveNav === "information",
    "modification-bc": detailActiveNav === "modification",
  });

  useEffect(() => {
    fetchDataGET(
      "http://localhost:3001/api/catalog/:shop/:item",
      setDetailCard,
      activeStore,
      activeItem
    );
  }, []);

  return (
    <div>
      {detailCard !== undefined ? (
        <>
          <Header
            title={detailCard.name}
            size={detailCard.size}
            activeStore={activeStore}
          />
          <div className={classBanner}>
            <div className="inforamtion">
              <div className={classBc}></div>
              <div className="information__content">
                <Nav />
                {detailActiveNav === "information" ? (
                  <Information desc={detailCard.desc} />
                ) : (
                  <Modification />
                )}
              </div>
            </div>
            <Footer />
          </div>
        </>
      ) : (
        <p>Выбирете сначала кофейню и напиток ^-^</p>
      )}
    </div>
  );
}

const mapStateToProps = ({
  activeStore,
  activeItem,
  detailCard,
  detailActiveNav,
}) => {
  return {
    activeStore,
    activeItem,
    detailCard,
    detailActiveNav,
  };
};

const mapDispatchToProps = {
  setDetailCard,
  fetchDataGET,
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
