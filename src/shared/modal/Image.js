import modal from "./modal.module.css";
import PropTypes from "prop-types";

function Image({ data }) {
  return (
    <div className={modal.img_wrapper}>
      <div
        className={modal.img}
        style={{ backgroundImage: `url(${data.img})` }}
      ></div>
    </div>
  );
}

Image.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Image;
