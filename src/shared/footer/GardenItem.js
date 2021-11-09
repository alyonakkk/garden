import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function GardenItem({ path, title, ...props }) {
  return (
    <Link to={path}>
      <li {...props}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.87 11.5L17.37 3.71C17.2819 3.55739 17.155 3.43078 17.0023 3.34298C16.8495 3.25517 16.6762 3.2093 16.5 3.21H7.50001C7.3238 3.2093 7.15053 3.25517 6.99775 3.34298C6.84498 3.43078 6.71811 3.55739 6.63001 3.71L2.13001 11.5C2.04224 11.652 1.99603 11.8245 1.99603 12C1.99603 12.1755 2.04224 12.348 2.13001 12.5L6.63001 20.29C6.71811 20.4426 6.84498 20.5692 6.99775 20.657C7.15053 20.7448 7.3238 20.7907 7.50001 20.79H16.5C16.6762 20.7907 16.8495 20.7448 17.0023 20.657C17.155 20.5692 17.2819 20.4426 17.37 20.29L21.87 12.5C21.9578 12.348 22.004 12.1755 22.004 12C22.004 11.8245 21.9578 11.652 21.87 11.5ZM15.87 18.79H8.08001L4.15001 12L8.08001 5.21H15.92L19.85 12L15.87 18.79Z"
            fill="currentColor"
          />
        </svg>
        <p>{title}</p>
      </li>
    </Link>
  );
}

GardenItem.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default GardenItem;
