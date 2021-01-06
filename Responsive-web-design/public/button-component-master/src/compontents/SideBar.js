import React from "react";

const SideBar = ({ children, className }) => {
  return <div className={`sidebar ${className}`}>{children}</div>;
};

export default SideBar;
