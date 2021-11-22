import Footer from "../../shared/footer/Footer";
import Header from "../../shared/header/Header";
import Navigation from "./components/navigation/Navigation";
import Slider from "./components/slider/Slider";
import logo from "./components/img/catalog-login.png";
import { HeaderStyleType } from "../../helpers/getTypes";
import styled from "styled-components";

const CatalogEl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const Wrapper = styled.div`
  height: 100vh;
`;

const Catalog: React.FC = () => {
  const headerStyle: HeaderStyleType = {
    black: false,
    image: `url(${logo})`,
  };

  return (
    <CatalogEl>
      <Wrapper>
        <Header title="Что желаете?" headerStyle={headerStyle} />
        <Navigation />
        <Slider />
      </Wrapper>
      <Footer />
    </CatalogEl>
  );
};

export default Catalog;
