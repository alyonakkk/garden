import { useEffect } from "react";
import Slide from "./Slide";
import { connect } from "react-redux";
import { setActiveItem, fetchShopItemGET } from "../../../../store/actions";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { Link } from "react-router-dom";
import Error from "../../../../shared/error/Error";
import catalog from "../../catalog.module.css";
import "../../slider.css";
import PropTypes from "prop-types";

function Slider({ shopItem, setActiveItem, activeStore, fetchShopItemGET }) {
  SwiperCore.use([Navigation]);

  useEffect(() => {
    fetchShopItemGET(`/catalog/${activeStore}`);
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

Slider.propTypes = {
  shopItem: PropTypes.array,
  setActiveItem: PropTypes.func.isRequired,
  activeStore: PropTypes.string.isRequired,
  fetchShopItemGET: PropTypes.func.isRequired,
};

const mapStateToProps = ({ stores, catalog }) => {
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
