import classNames from "classnames";
import { connect } from "react-redux";
import { setDetailActiveNav } from "../../../../../store/actions";
import details from "../../../details.module.css";
import PropTypes from "prop-types";

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
        [details.nav_item]: true,
        [details.information_item]: detailActiveNav === "information",
        [details.modification_item]: detailActiveNav === "modification",
        [details.nav_item_active]: detailActiveNav === data.id,
        [details.information_item_active]:
          detailActiveNav === data.id && detailActiveNav === "information",
        [details.modification_item_active]:
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
    <nav className={details.nav}>
      <ul className={details.nav_list}>{renderNavItem()}</ul>
    </nav>
  );
}

Nav.propTypes = {
  detailActiveNav: PropTypes.string.isRequired,
  setDetailActiveNav: PropTypes.func.isRequired,
};

const mapStateToProps = ({ detailActiveNav }) => {
  return {
    detailActiveNav,
  };
};

const mapDispatchToProps = {
  setDetailActiveNav,
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
