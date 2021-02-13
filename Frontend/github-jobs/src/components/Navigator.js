import React, { useState } from "react";

import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

function Navigator({
  totalProjects,
  projectsPerPage,
  paginate,
  currentPage,
}) {
  const btnStyle =
    "w-9 h-9 border border-gray-600 hover:border-blue-500 flex justify-center items-center rounded-lg text-gray-600 hover:text-blue-500  cursor-pointer mr-3 dark:border-gray-100 dark:text-gray-100 dark:hover:border-blue-600 dark:hover:text-blue-600";
  const btnActiveStyle =
    "w-9 h-9 border border-blue-600 bg-blue-500 hover:border-blue-500 flex justify-center items-center rounded-lg text-white mr-3 dark:bg-blue-600";
  const [active, setActive] = useState(1);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i++) {
    pageNumbers.push(i);
  }
  const handleClick = (e, number, previous, next) => {
    const previousPage = number - 1;
    const nextPage = number + 1;

    if (previous) {
      if (previousPage >= pageNumbers[0]) {
        setActive(number - 1);
        paginate(number, previous, next);
      }
    } else if (next) {
      if (nextPage <= pageNumbers[pageNumbers.length - 1]) {
        paginate(number, previous, next);
        setActive(number + 1);
      }
    } else if (e.target.localName === "li") {
      setActive(number);
      paginate(number, false, false);
    }
    document.getElementById(active).className = btnActiveStyle;
  };

  return (
    <nav className="my-10">
      <ul className="flex">
        <button
          className={btnStyle}
          onClick={(e) => {
            handleClick(e, active, true, false);
          }}
        >
          <NavigateBeforeIcon />
        </button>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={number === active ? btnActiveStyle : btnStyle}
            id={number}
            onClick={(e) => handleClick(e, number, false, false)}
          >
            {number}{" "}
          </li>
        ))}
        <button
          className={btnStyle}
          onClick={(e) => {
            handleClick(e, active, false, true);
          }}
        >
          <NavigateNextIcon />
        </button>
      </ul>
    </nav>
  );
}

export default Navigator
