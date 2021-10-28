import { connect } from "react-redux";
import { Link } from "react-router-dom";

function NavigationItem({ activeStore, title, svg, path, ...props }) {
  return (
    // <Link to={`/catalog/${activeStore}/${path}`}>
    <li {...props}>
      {svg}
      <p>{title}</p>
    </li>
    // </Link>
  );
}

const mapStateToProps = ({ activeStore }) => {
  return {
    activeStore,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationItem);
