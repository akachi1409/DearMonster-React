import React from "react";
import { Fade } from "react-reveal";

function Tokenomics() {
  return (
    <div className="flex flex-col py-36" id="tokenomics">
      <Fade top>
        <h1 className="uppercase text-7xl text-center py-20">Tokenomics</h1>
        <div className="tokenomics"></div>
      </Fade>
    </div>
  );
}

export default Tokenomics;
