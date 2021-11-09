import modal from "./modal.module.css";
import PropTypes from "prop-types";

function Title({ data }) {
  return <h1 className={modal.title}>{data.title}</h1>;
}

Title.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Title;
