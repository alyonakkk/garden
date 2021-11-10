import classNames from "classnames";
import { useState } from "react";
import NavigationItem from "./NavigationItem";
import { Swiper, SwiperSlide } from "swiper/react";
import catalog from "../../catalog.module.css";
import getSvg from "../../../../helpers/getSvg";

function Navigation() {
  const navData = [
    {
      id: "breakfast",
      title: "Завтраки",
    },
    {
      id: "drinks",
      title: "Напитки",
    },
    {
      id: "food",
      title: "Еда",
    },
    {
      id: "coffee",
      title: "Зерновой кофе",
    },
    {
      id: "acc",
      title: "Аксессуары",
    },
  ];
  let [active, setActive] = useState("drinks");

  function renderNavItem() {
    return navData.map((nav) => {
      let classNavItem = classNames({
        [catalog.nav_item_wrapper]: true,
        [catalog.nav_item_active]: active === nav.id,
      });

      function handleNavItem() {
        setActive((active = nav.id));
      }

      return (
        <SwiperSlide className={classNavItem} key={nav.id}>
          <NavigationItem
            title={nav.title}
            svg={getSvg(nav.id)}
            className={catalog.nav_item}
            onClick={handleNavItem}
          />
        </SwiperSlide>
      );
    });
  }

  return (
    <nav className={catalog.nav}>
      <ul className={catalog.mySwiper}>
        <Swiper spaceBetween={20} slidesPerView={"auto"}>
          {renderNavItem()}
        </Swiper>
      </ul>
    </nav>
  );
}

export default Navigation;
