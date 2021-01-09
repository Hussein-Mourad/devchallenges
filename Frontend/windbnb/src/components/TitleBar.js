import PropTypes from "prop-types";
import stays from "../assets/stays.json";

function TitleBar({ className }) {
  const staysNumber = Object.keys(stays).length;
  return (
    <div
      className={`${className} flex justify-between items-center mt-16 mb-8`}
    >
      <h1 className="text-gray-800 font-bold text-2xl">
        Stays in {stays[0].country}
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
