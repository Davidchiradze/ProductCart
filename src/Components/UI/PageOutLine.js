import React from "react";
import Header from "./Header";

const PageOutLine = ({ children, ...propsebi }) => {
  return (
    <div>
      <Header {...propsebi} />
      {children}
    </div>
  );
};

export default PageOutLine;
