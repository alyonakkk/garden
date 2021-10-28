import classNames from "classnames";
import { connect } from "react-redux";
import { setDetailActiveNav } from "../../../../../store/actions";

function Nav({ detailActiveNav, setDetailActiveNav }) {
  const navData = [
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
      let classNavItem = classNames({
        information__item: true,
        "information-item": detailActiveNav === "information",
        "modification-item": detailActiveNav === "modification",
        "information__item-active": detailActiveNav === data.id,
        "information-item-active":
          detailActiveNav === data.id && detailActiveNav === "information",
        "modification-item-active":
          detailActiveNav === data.id && detailActiveNav === "modification",
      });

      function handleItem() {
        setDetailActiveNav(data.id);
      }
      return (
        <li className={classNavItem} onClick={handleItem} key={data.id}>
          {data.title}
        </li>
      );
    });
  }

  return (
    <nav className="information__nav">
      <ul className="information__list">{renderNavItem()}</ul>
    </nav>
  );
}

const mapStateToProps = ({ detailActiveNav }) => {
  return {
    detailActiveNav,
  };
};

const mapDispatchToProps = {
  setDetailActiveNav,
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
