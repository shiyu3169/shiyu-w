import React from "react";
import Navbar from "./Navbar";

const InnerHeader = ({ current }) => {
  return (
    <header id="header-inner">
      <div className="container">
        <Navbar current={current} />
      </div>
    </header>
  );
};

export default InnerHeader;
