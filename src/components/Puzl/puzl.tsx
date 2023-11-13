import React from "react";
import puzl from "../../img/puzl.png";

import "./puzl.scss";

const Puzl = () => {
  return (
    <section id="puzl">
      <div className="container">
        <div className="puzl">
          <img src={puzl} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Puzl;
