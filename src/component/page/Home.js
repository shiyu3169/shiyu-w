import React from "react";

import Header from "../home/Header";
import Applications from "../home/work/Applications";
import Design from "../home/work/Design";
import FunLab from "../home/work/FunLab";

const Home = () => {
  return (
    <>
      <Header />
      <Applications />
      <div className="py-3 text-center">
        <a
          href="https://github.com/shiyu3169?tab=repositories"
          rel="noopener noreferrer"
          target="_blank"
          className="btn-dark"
        >
          More on GitHub
        </a>
      </div>
      <Design />
      <div className="py-3 text-center">
        <a
          href="https://github.com/shiyu3169?tab=repositories"
          rel="noopener noreferrer"
          target="_blank"
          className="btn-dark"
        >
          More on GitHub
        </a>
      </div>
      <FunLab />
      <div className="py-3 text-center">
        <a
          href="https://github.com/shiyu3169?tab=repositories"
          rel="noopener noreferrer"
          target="_blank"
          className="btn-dark"
        >
          More on GitHub
        </a>
      </div>
    </>
  );
};

export default Home;
