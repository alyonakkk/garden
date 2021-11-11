import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchDetailCardGET, setModification } from "../../store/actions";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import details from "./details.module.css";
import Information from "./components/banner/information/Information";
import Modification from "./components/banner/modification/Modification";
import Nav from "./components/banner/nav/Nav";
import classNames from "classnames";
import Error from "../../shared/error/Error";
import initModification from "../../helpers/getInitModification";
import PropTypes from "prop-types";

function Details({
  activeStore,
  activeItem,
  detailCard,
  setModification,
  detailActiveNav,
  fetchDetailCardGET,
}) {
  useEffect(() => {
    fetchDetailCardGET(`/catalog/${activeStore}/${activeItem}`);
    setModification(initModification);
  }, [activeItem]);

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
      {Object.keys(detailCard).length !== 0 ? (
        <>
          <Header detailCard={detailCard} activeStore={activeStore} />
          <div className={details.img}></div>
          <div className={classBanner}>
            <div className={details.details}>
              <div className={classBc}></div>
              <div className={details.content}>
                <Nav />
                {detailActiveNav === "information" ? (
                  <Information detailCard={detailCard} />
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

Details.propTypes = {
  activeStore: PropTypes.string.isRequired,
  activeItem: PropTypes.string.isRequired,
  detailCard: PropTypes.object,
  setModification: PropTypes.func.isRequired,
  detailActiveNav: PropTypes.string.isRequired,
  fetchDetailCardGET: PropTypes.func.isRequired,
};

const mapStateToProps = ({ main, card }) => {
  return {
    activeStore: main.activeStore,
    activeItem: main.activeItem,
    detailCard: card.detailCard,
    detailActiveNav: card.detailActiveNav,
  };
};

const mapDispatchToProps = {
  setModification,
  fetchDetailCardGET,
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
