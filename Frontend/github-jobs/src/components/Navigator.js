import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

export default function Navigator({ items, className }) {
  const btnStyle =
    "w-8 h-8  border border-gray-400 hover:border-blue-500 flex justify-center items-center rounded text-gray-700 hover:text-blue-500 cursor-pointer disabled:cursor-not-allowed disabled:text-gray-400 disabled:border-gray-300 dark:border-gray-100 dark:text-gray-200 dark:hover:border-blue-600 dark:hover:text-blue-600 dark:disabled:border-gray-400 dark:disabled:text-gray-700 mr-2";
  const btnActiveStyle =
    "w-8 h-8 border border-blue-600 bg-blue-500 hover:border-blue-500 flex justify-center items-center rounded text-white mr-2 dark:bg-blue-600";
  return (
    <nav className={className}>
      <ul className="flex">
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = (
              <span
                key={index}
                className="flex justify-center items-center w-8 h-8 mr-1 text-gray-700 "
              >
                ...
              </span>
            );
          } else if (type === "page") {
            children = (
              <button
                key={index}
                className={selected ? btnActiveStyle : btnStyle}
                type="button"
                {...item}
              >
                {page}
              </button>
            );
          } else if (type === "previous") {
            children = (
              <button key={index} className={btnStyle} type="button" {...item}>
                <NavigateBeforeIcon />
              </button>
            );
          } else {
            children = (
              <button
                key={index}
                //  changes class name (mr-3 to mr-3fix)
                className={`${btnStyle}fix`}
                type="button"
                {...item}
              >
                <NavigateNextIcon />
              </button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </ul>
    </nav>
  );
}
