import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchDetailCardGET, setModification } from "../../store/actions";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Information from "./components/banner/information/Information";
import Modification from "./components/banner/modification/Modification";
import Nav from "./components/banner/nav/Nav";
import initModification from "../../helpers/getInitModification";
import React from "react";
import { RootState } from "../../store/store";
import { ModificationType } from "../../helpers/getTypes";
import styled from "styled-components";
import informBC from "./components/img/bc-inform.png";
import modifBC from "./components/img/bc-modif.png";
import coffeeImg from "./components/img/bc-coffee.png";

interface IDetails {
  activeStore: string;
  activeItem: string;
  detailCard: any;
  setModification: (modification: ModificationType) => void;
  detailActiveNav: string;
  fetchDetailCardGET: (url: string) => void;
}

interface BCStyle {
  activeNav: string;
}

const Img = styled.div`
  margin: auto;

  height: 334px;
  width: 375px;

  object-fit: cover;
  background-image: url(${coffeeImg});
  background-repeat: no-repeat;
`;

const DetailsEl = styled.div`
  width: 100%;
  height: max-content;
`;

const Content = styled.div`
  padding: 20px;
`;

const Banner = styled.div<BCStyle>`
  position: fixed;
  bottom: 0;

  width: 100%;
  height: max-content;

  background-color: ${(props) =>
    props.activeNav === "information" ? "#000000" : "#ffc633"};
  border-radius: 15px 15px 0px 0px;
`;

const BC = styled.div<BCStyle>`
  position: absolute;
  z-index: -1;

  width: 100%;
  height: 100%;
  opacity: 20%;

  background: url(${(props) =>
    props.activeNav === "information" ? informBC : modifBC});
`;

const Details: React.FC<IDetails> = ({
  activeStore,
  activeItem,
  detailCard,
  setModification,
  detailActiveNav,
  fetchDetailCardGET,
}) => {
  useEffect(() => {
    fetchDetailCardGET(`/catalog/${activeStore}/${activeItem}`);
    setModification(initModification);
  }, []);

  return (
    <div>
      <Header detailCard={detailCard} activeStore={activeStore} />
      <Img></Img>
      <Banner activeNav={detailActiveNav}>
        <DetailsEl>
          <BC activeNav={detailActiveNav}></BC>
          <Content>
            <Nav />
            {detailActiveNav === "information" ? (
              <Information detailCard={detailCard} />
            ) : (
              <Modification />
            )}
          </Content>
        </DetailsEl>
        <Footer />
      </Banner>
    </div>
  );
};

const mapStateToProps = ({ card, stores, catalog }: RootState) => {
  return {
    activeStore: stores.activeStore,
    activeItem: catalog.activeItem,
    detailCard: card.detailCard,
    detailActiveNav: card.detailActiveNav,
  };
};

const mapDispatchToProps = {
  setModification,
  fetchDetailCardGET,
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
