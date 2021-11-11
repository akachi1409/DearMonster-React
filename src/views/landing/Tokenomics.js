import React from "react";
import { Fade } from "react-reveal";

function Tokenomics() {
  return (
    <div className="flex flex-col lg:py-36 md:py-12 sm:py-4" id="tokenomics">
      <Fade top>
        <h1 className="uppercase lg:text-7xl md:text-3xl sm:text-3xl text-center lg:py-20 md:py-10 sm:py-5">Tokenomics</h1>
        <div className="tokenomics"></div>
      </Fade>
    </div>
  );
}

export default Tokenomics;
