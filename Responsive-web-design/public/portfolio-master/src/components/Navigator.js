import React, { useState } from "react";

import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
export const Navigator = ({ totalProjects, projectsPerPage, paginate, previousPage, nextPage }) => {
  const btnStyle =
    "w-9 h-9 border border-gray-500 hover:border-blue-500 flex justify-center items-center rounded-lg text-gray-600 hover:text-blue-500  cursor-pointer mr-3";
  const btnActiveStyle =
    "w-9 h-9 border border-blue-500 bg-blue-500 hover:border-blue-500 flex justify-center items-center rounded-lg text-white mr-3";
  const [active, setActive] = useState("1");
  const handleClick = (e, number) => {
    if (e.target.className === btnStyle && e.target.id !== active) {
      e.target.className = btnActiveStyle;
      document.getElementById(active).className = btnStyle;
      setActive(e.target.id);
      paginate(number);
    }
  };

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="my-10">
      <ul className="flex">
        <li className={btnStyle} onClick={previousPage}>
          <NavigateBeforeIcon />
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={number == active ? btnActiveStyle : btnStyle}
            id={number}
            onClick={(e) => handleClick(e, number)}
          >
            {number}{" "}
          </li>
        ))}
        <li className={btnStyle} onClick={nextPage}>
          <NavigateNextIcon />
        </li>
      </ul>
    </div>
  );
};
