import { useEffect } from "react";
import Slide from "./Slide";
import { connect } from "react-redux";
import { setActiveItem, fetchShopItemGET } from "../../../../store/actions";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { Link } from "react-router-dom";
import { RootState } from "../../../../store/store";
import { ShopItemItemType } from "../../../../helpers/getTypes";
import styled, { createGlobalStyle } from "styled-components";
import arrow from "../img/arrow.svg";

interface ISlider {
  shopItem: ShopItemItemType[];
  setActiveItem: (activeItem: string) => void;
  activeStore: string;
  fetchShopItemGET: (url: string) => void;
}

const GlobalStyles = createGlobalStyle`
.swiper-wrapper {
  position: relative;

  display: flex;
}

.swiper-button-next {
  position: absolute;
  right: 20px;
  top: 0;

  width: 24px;
  height: 24px;

  background: url(${arrow});
  background-repeat: no-repeat;
  background-position: center;

  cursor: pointer;
}
`;

const Container = styled.div`
  padding: 0 20px;
  margin-top: 14px;

  position: relative;
`;

const Title = styled.p`
  font-size: 14px;
  font-weight: 800;
  line-height: 20px;
`;

const MySwiper = styled(Swiper)`
  margin-top: 12px;

  overflow: hidden;
`;

const Slider: React.FC<ISlider> = ({
  shopItem,
  setActiveItem,
  activeStore,
  fetchShopItemGET,
}) => {
  SwiperCore.use([Navigation]);

  useEffect(() => {
    fetchShopItemGET(`/catalog/${activeStore}`);
  }, []);

  function renderSlide() {
    return shopItem.map((item: ShopItemItemType) => {
      function handleItem(): void {
        setActiveItem(item.slug);
      }

      return (
        <SwiperSlide key={item.slug}>
          <Link
            to={`/catalog/${activeStore}/${item.slug}`}
            onClick={handleItem}
          >
            <Slide title={item.name} price={item.price} slug={item.slug} />
          </Link>
        </SwiperSlide>
      );
    });
  }

  return (
    <>
      <GlobalStyles />
      <Container>
        <Title>Кофе</Title>
        <MySwiper navigation={true} spaceBetween={12} slidesPerView={"auto"}>
          {renderSlide()}
        </MySwiper>
      </Container>
    </>
  );
};

const mapStateToProps = ({ stores, catalog }: RootState) => {
  return {
    shopItem: catalog.shopItem,
    activeStore: stores.activeStore,
  };
};

const mapDispatchToProps = {
  setActiveItem,
  fetchShopItemGET,
};

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
