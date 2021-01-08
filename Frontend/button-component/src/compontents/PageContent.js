import React from "react";

const PageContent = ({ className, children }) => {
  return <div className={`ml-5 md:ml-64 ${className}`}>{children}</div>;
};

export default PageContent;
