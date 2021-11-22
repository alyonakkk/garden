import { useState } from "react";
import NavigationItem from "./NavigationItem";
import { Swiper, SwiperSlide } from "swiper/react";
import getSvg from "../../../../helpers/getSvg";
import { NavDataType } from "../../../../helpers/getTypes";
import styled from "styled-components";

interface IItemWrapperStyle {
  act: string;
}

const Nav = styled.nav`
  border-bottom: 1px solid #959595;

  overflow: hidden;
`;

const MySwiper = styled.ul`
  margin-top: 12px;

  overflow: hidden;
`;

const ItemWrapper = styled.div<IItemWrapperStyle>`
  padding: 8px 0;

  display: flex;
  gap: 6px;

  color: ${(props) => (props.act === props.id ? "#000000" : "#bebebe")};

  border-bottom: ${(props) =>
    props.act === props.id ? "3px solid #ffb92a" : "3px solid transparent"};

  cursor: pointer;
`;

const Navigation: React.FC = () => {
  const navData: NavDataType[] = [
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
  let [active, setActive] = useState<string>("drinks");

  function renderNavItem() {
    return navData.map((nav: NavDataType) => {
      function handleNavItem(): void {
        setActive((active = nav.id));
      }

      return (
        <SwiperSlide key={nav.id}>
          <ItemWrapper act={active} id={nav.id}>
            <NavigationItem
              title={nav.title}
              svg={getSvg(nav.id)}
              onClick={handleNavItem}
            />
          </ItemWrapper>
        </SwiperSlide>
      );
    });
  }

  return (
    <Nav>
      <MySwiper>
        <Swiper spaceBetween={20} slidesPerView={"auto"}>
          {renderNavItem()}
        </Swiper>
      </MySwiper>
    </Nav>
  );
};

export default Navigation;
