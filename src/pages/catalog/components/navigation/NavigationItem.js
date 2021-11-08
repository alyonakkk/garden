import { connect } from "react-redux";

function NavigationItem({ activeStore, title, svg, path, ...props }) {
  return (
    <li {...props}>
      {svg}
      <p>{title}</p>
    </li>
  );
}

const mapStateToProps = ({ activeStore }) => {
  return {
    activeStore,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationItem);
