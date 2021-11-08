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
import Error from "../../../../shared/error/Error";
import catalog from "../../catalog.module.css";
import "../../slider.css";

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
    <div className={catalog.slider_container}>
      {shopItem !== undefined ? (
        <>
          <p className={catalog.slider_title}>Кофе</p>
          <Swiper
            navigation={true}
            spaceBetween={12}
            slidesPerView={"auto"}
            className={catalog.mySwiper}
          >
            {renderSlide()}
          </Swiper>
        </>
      ) : (
        <Error />
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
