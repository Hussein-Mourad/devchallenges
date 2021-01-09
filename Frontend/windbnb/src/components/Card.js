import PropTypes from "prop-types";
import Icon from "@material-ui/core/Icon";

function Card({ superhost, title, rating, type, beds, photo }) {
  return (
    <div>
      <div className="h-64 overflow-hidden flex items-center rounded-xl">
        <img
          src={photo}
          className="rounded-xl w-full h-auto hover:w-10"
          alt={title}
        />
      </div>
      <div className="my-2 flex justify-between w-full">
        <div>
          {superhost ? (
            <span className="cursor-default px-3 py-2 mr-3 border border-gray-800 text-gray-800 rounded-xl text-xs font-extrabold">
              SUPER HOST
            </span>
          ) : (
            ""
          )}
          <span className="font-medium text-gray-400 text-sm">
            {type}. {beds} beds
          </span>
        </div>

        <div className="inline-flex items-center">
          <Icon className="text-primary mr-3">star</Icon>
          <span className="text-sm text-gray-700 font-medium">{rating}</span>
        </div>
      </div>
      <div className="text-gray-800 font-semibold">{title}</div>
    </div>
  );
}

Card.propTypes = {
  //   city: PropTypes.string,
  //   coutry: PropTypes.string,
  superhost: PropTypes.bool,
  title: PropTypes.string,
  rating: PropTypes.number,
  //   maxGuests: PropTypes.number,
  type: PropTypes.string,
  beds: PropTypes.number,
  photo: PropTypes.string,
};

export default Card;
