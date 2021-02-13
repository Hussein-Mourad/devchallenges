import Icon from "@material-ui/core/Icon";

const ListItem = ({ children }) => {
  return (
    <li className="flex items-center my-3 ">
      {" "}
      <input className="mr-2 transform scale-125" type="radio" />{" "}
      <label className="text-gray-600 dark:text-gray-500 text-lg">
        {children}
      </label>
    </li>
  );
};

function SearchFilter() {
  return (
    <div className="mt-8 md:mt-4 font-medium">
      <div className="align-middle">
        {" "}
        <input
          className="transform scale-125 mr-2 bg-red-200"
          type="checkbox"
        />{" "}
        <label className="text-gray-600 dark:text-gray-500 text-lg">
          Full time
        </label>{" "}
      </div>
      <div className="mt-6">
        <h2 className="font-bold text-gray-400 text-lg uppercase">Location</h2>
        <div className="flex items-center bg-white rounded-md mt-4">
          <Icon className="text-gray-400 ml-2 mt-1">public</Icon>
          <input
            className="px-2 py-4 placeholder-gray-400 w-full"
            type="text"
            placeholder="City, state, zip code or country"
          />
        </div>
        <ul className="mt-6">
          <ListItem>London</ListItem>
          <ListItem>Amsterdam</ListItem>
          <ListItem>New York</ListItem>
          <ListItem>Berlin</ListItem>
        </ul>
      </div>
    </div>
  );
}

export default SearchFilter;
