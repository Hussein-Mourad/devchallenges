import { usePagination } from "@material-ui/lab/Pagination";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

export default function Navigator() {
  const { items } = usePagination({
    count: 10,
  });
  const btnStyle =
    "w-8 h-8 border border-gray-600 hover:border-blue-500 flex justify-center items-center rounded text-gray-600 hover:text-blue-500 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-400 disabled:border-gray-300 dark:border-gray-100 dark:text-gray-200 dark:hover:border-blue-600 dark:hover:text-blue-600 dark:disabled:bg-gray-400 dark:disabled:border-gray-400 dark:disabled:text-gray-600 mr-3";
  const btnActiveStyle =
    "w-8 h-8 border border-blue-600 bg-blue-500 hover:border-blue-500 flex justify-center items-center rounded text-white mr-3 dark:bg-blue-600";
  return (
    <nav>
      <ul className="flex">
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "…";
          } else if (type === "page") {
            children = (
              <button
                className={selected ? btnActiveStyle : btnStyle}
                type="button"
                {...item}
              >
                {page}
              </button>
            );
          } else if (type === "previous") {
            children = (
              <button type="button" {...item}>
                {type}
              </button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </ul>
    </nav>
  );
}

export function Nav({
  className,
  totalProjects,
  projectsPerPage,
  currentPage,
  setCurrentPage,
}) {
  const btnStyle =
    "w-9 h-9 border border-gray-600 hover:border-blue-500 flex justify-center items-center rounded-lg text-gray-600 hover:text-blue-500  cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-400 disabled:border-gray-300 dark:border-gray-100 dark:text-gray-200 dark:hover:border-blue-600 dark:hover:text-blue-600 dark:disabled:bg-gray-400 dark:disabled:border-gray-400 dark:disabled:text-gray-600 mr-3";
  const btnActiveStyle =
    "w-9 h-9 border border-blue-600 bg-blue-500 hover:border-blue-500 flex justify-center items-center rounded-lg text-white mr-3 dark:bg-blue-600";

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={`my-5 ${className}`}>
      <ul className="flex">
        <button
          className={btnStyle}
          onClick={() => {
            setCurrentPage(currentPage - 1);
          }}
          disabled={currentPage - 1 < pageNumbers[0]}
        >
          <NavigateBeforeIcon />
        </button>
        {pageNumbers.map((number) => {
          if (number > 5) {
            return (
              <>
                <li
                  key={number}
                  className={number === currentPage ? btnActiveStyle : btnStyle}
                  id={number}
                  onClick={(e) => setCurrentPage(number)}
                >
                  {number}{" "}
                </li>
              </>
            );
          }
        })}

        <button
          //  changes class name (mr-3 to mr-3fix)
          className={`${btnStyle}fix`}
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
          disabled={currentPage + 1 > pageNumbers[pageNumbers.length - 1]}
        >
          <NavigateNextIcon />
        </button>
      </ul>
    </nav>
  );
}
