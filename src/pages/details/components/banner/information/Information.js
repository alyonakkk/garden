import details from "../../../details.module.css";
import PropTypes from "prop-types";

function Information({ detailCard }) {
  return (
    <div className={details.container}>
      <div className={details.desc}>{detailCard.desc}</div>
    </div>
  );
}

Information.propTypes = {
  detailCard: PropTypes.object.isRequired,
};

export default Information;
