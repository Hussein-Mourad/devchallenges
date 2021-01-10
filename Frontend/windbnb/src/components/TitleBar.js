import PropTypes from "prop-types";


function TitleBar({ className, stays }) {
  const staysNumber = Object.keys(stays).length;
  return (
    <div
      className={`${className} flex justify-between items-center mt-16 mb-3 sm:mb-8`}
    >
      <h1 className="text-gray-800 font-bold text-2xl">
        Stays in Finland
      </h1>
      <span className="text-gray-800 font-medium">
        {staysNumber > 12 ? "12+" : staysNumber} stays
      </span>
    </div>
  );
}

TitleBar.propTypes = {
  className: PropTypes.string,
};

export default TitleBar;
