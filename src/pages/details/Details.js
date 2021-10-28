import { useEffect } from "react";
import { connect } from "react-redux";
import { setDetailCard, fetchDataGET } from "../../store/actions";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./details.css";

function Details({
  activeStore,
  activeItem,
  detailCard,
  setDetailCard,
  fetchDataGET,
}) {
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
      <Header title={detailCard.name} size={detailCard.size} />
      <Footer />
    </div>
  );
}

const mapStateToProps = ({ activeStore, activeItem, detailCard }) => {
  return {
    activeStore,
    activeItem,
    detailCard,
  };
};

const mapDispatchToProps = {
  setDetailCard,
  fetchDataGET,
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
