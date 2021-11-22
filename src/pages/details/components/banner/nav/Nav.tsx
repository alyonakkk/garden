import { connect } from "react-redux";
import { setDetailActiveNav } from "../../../../../store/actions";
import { NavDataType } from "../../../../../helpers/getTypes";
import { RootState } from "../../../../../store/store";
import styled from "styled-components";

interface INav {
  detailActiveNav: string;
  setDetailActiveNav: (detailActiveNav: string) => void;
}

interface IItem {
  activeNav: string;
}

const NavEl = styled.nav`
  margin-bottom: 24px;
`;

const List = styled.ul`
  padding: 0 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  list-style: none;

  border-bottom: 2px solid #383838;
`;

const Item = styled.li<IItem>`
  padding: 6px 0;

  color: ${(props) =>
    props.id === props.activeNav
      ? "#f3f4f0"
      : props.activeNav === "information"
      ? "#bebebe"
      : "#383838"};
  font-size: 14px;
  font-weight: 800;
  line-height: 20px;

  border-bottom: ${(props) =>
    props.activeNav === "information"
      ? props.id === props.activeNav
        ? "2px solid #14ad99"
        : "none"
      : props.id === props.activeNav
      ? "2px solid #ff0000"
      : "none"};

  cursor: pointer;
`;

const Nav: React.FC<INav> = ({ detailActiveNav, setDetailActiveNav }) => {
  const navData: NavDataType[] = [
    {
      id: "modification",
      title: "Модификации",
    },
    {
      id: "information",
      title: "Информация",
    },
  ];

  function renderNavItem() {
    return navData.map((data) => {
      function handleItem() {
        setDetailActiveNav(data.id);
      }
      return (
        <Item
          id={data.id}
          activeNav={detailActiveNav}
          onClick={handleItem}
          key={data.id}
        >
          {data.title}
        </Item>
      );
    });
  }

  return (
    <NavEl>
      <List>{renderNavItem()}</List>
    </NavEl>
  );
};

const mapStateToProps = ({ card }: RootState) => {
  return {
    detailActiveNav: card.detailActiveNav,
  };
};

const mapDispatchToProps = {
  setDetailActiveNav,
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
