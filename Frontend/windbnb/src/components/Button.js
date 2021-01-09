import PropTypes from "prop-types";

function Button({ children, className, textColor, onClick, display, bgColor }) {
  return (
    <button
      className={` ${className} search-wrapper-item relative ${display}  px-4 py-2 border border-gray-200 border-opacity-70 bg-${bgColor} leading-5 ${textColor} transition ease-in-out duration-150 rounded-2xl hover:text-gray-600 focus:z-10  focus:border-blue-300 focus:outline-none active:bg-${bgColor}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  textColor: PropTypes.string,
  display: PropTypes.string,
  bgColor: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  textColor: "text-gray-800",
  display: "inline-flex",
  bgColor: "white",
};

export default Button;
