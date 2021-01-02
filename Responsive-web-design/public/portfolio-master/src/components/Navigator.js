import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
export const Navigator = (props) => {

  return (
    <>
      <div className="my-10">
        <ul className="flex justify-between w-72">
          <li className="w-9 h-9 border border-gray-500 hover:border-blue-500 flex justify-center items-center rounded-lg text-gray-600 hover:text-blue-500  cursor-pointer">
            <NavigateBeforeIcon />
          </li>
          <li className="w-9 h-9 border border-gray-500 hover:border-blue-500 flex justify-center items-center rounded-lg text-gray-600 hover:text-blue-500 cursor-pointer">
            1
          </li>
          <li className="w-9 h-9 border border-gray-500 hover:border-blue-500 flex justify-center items-center rounded-lg xl:text-gray-600 hover:text-blue-500 cursor-pointer">
            2
          </li>
          <li className="w-9 h-9 border border-gray-500 hover:border-blue-500 flex justify-center items-center rounded-lg text-gray-600 hover:text-blue-500 cursor-pointer">
            3
          </li>
          <li className="w-9 h-9 border border-blue-500 bg-blue-500 hover:border-blue-500 flex justify-center items-center rounded-lg text-white hover:text-blue-500  cursor-pointer">
            4
          </li>
          <li className="w-9 h-9 border border-gray-500 hover:border-blue-500 flex justify-center items-center rounded-lg text-gray-600 hover:text-blue-500  cursor-pointer">
            <NavigateNextIcon />
          </li>
        </ul>
      </div>
    </>
  );
};
