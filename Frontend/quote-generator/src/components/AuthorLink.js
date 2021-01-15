import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";

function AuthorLink({ author, genre, onClick }) {
  return (
    <Link to={`/author`}>
    <button
      className="inline-flex items-center justify-between hover:bg-gray-800 min-h-full w-full mt-6 px-4 py-6 transition-all ease-in-out duration-300 group focus:outline-none"
      onClick={onClick}
    >
        <div className="text-left">
          <p className="text-gray-600 group-hover:text-white ">{author}</p>
          <span className="text-gray-500 text-xs group-hover:text-white">
            {genre}
          </span>
        </div>

        <Icon className="hidden group-hover:text-white group-hover:block">
          arrow_right_alt
        </Icon>
      </button>
    </Link>
  );
}

export default AuthorLink;
