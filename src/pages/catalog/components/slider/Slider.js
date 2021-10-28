import { useEffect } from "react";
import Slide from "./Slide";
import { connect } from "react-redux";
import {
  setShopItem,
  setActiveItem,
  fetchDataGET,
} from "../../../../store/actions";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { Link } from "react-router-dom";

function Slider({
  shopItem,
  setShopItem,
  setActiveItem,
  activeStore,
  fetchDataGET,
}) {
  SwiperCore.use([Navigation]);

  useEffect(() => {
    fetchDataGET(
      "http://localhost:3001/api/catalog/:shop",
      setShopItem,
      activeStore
    );
  }, []);

  function renderSlide() {
    return shopItem.map((item) => {
      function handleItem() {
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
    <div className="slider-container">
      {shopItem !== undefined ? (
        <>
          <p className="slider__title">Кофе</p>
          <Swiper
            navigation={true}
            spaceBetween={12}
            slidesPerView={"auto"}
            className="mySwiper"
          >
            {renderSlide()}
          </Swiper>
        </>
      ) : (
        <p>Сначала необходимо выбрать кофейню ^-^</p>
      )}
    </div>
  );
}

const mapStateToProps = ({ shopItem, activeStore }) => {
  return {
    shopItem,
    activeStore,
  };
};

const mapDispatchToProps = {
  setShopItem,
  setActiveItem,
  fetchDataGET,
};

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
