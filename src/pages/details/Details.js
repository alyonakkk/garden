import { useEffect } from "react";
import { connect } from "react-redux";
import {
  setDetailCard,
  fetchDataGET,
  setModification,
} from "../../store/actions";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import details from "./details.module.css";
import Information from "./components/banner/information/Information";
import Modification from "./components/banner/modification/Modification";
import Nav from "./components/banner/nav/Nav";
import classNames from "classnames";
import Error from "../../shared/error/Error";
import initModification from "../../helpers/getInitModification";

function Details({
  activeStore,
  activeItem,
  detailCard,
  setDetailCard,
  setModification,
  detailActiveNav,
  fetchDataGET,
}) {
  useEffect(() => {
    fetchDataGET(
      "http://localhost:3001/api/catalog/:shop/:item",
      setDetailCard,
      activeStore,
      activeItem
    );

    setModification(initModification);
  }, []);

  let classBanner = classNames({
    [details.banner]: true,
    [details.information_banner]: detailActiveNav === "information",
    [details.modification_banner]: detailActiveNav === "modification",
  });

  let classBc = classNames({
    [details.bc]: true,
    [details.information_bc]: detailActiveNav === "information",
    [details.modification_bc]: detailActiveNav === "modification",
  });

  return (
    <div>
      {detailCard !== undefined ? (
        <>
          <Header
            title={detailCard.name}
            size={detailCard.size}
            activeStore={activeStore}
          />
          <div className={details.img}></div>
          <div className={classBanner}>
            <div className={details.details}>
              <div className={classBc}></div>
              <div className={details.content}>
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
        <Error />
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
  setModification,
  fetchDataGET,
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
