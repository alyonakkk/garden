import PropTypes from "prop-types";

function NavigationItem({ title, svg, onClick, className }) {
  return (
    <li className={className} onClick={onClick}>
      <div dangerouslySetInnerHTML={svg} />
      <p>{title}</p>
    </li>
  );
}

NavigationItem.propTypes = {
  title: PropTypes.string.isRequired,
  svg: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default NavigationItem;
