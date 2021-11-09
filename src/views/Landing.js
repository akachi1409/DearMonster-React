import React from "react";
import SmoothScroll from "smooth-scroll";

import Home from "./landing/Home";
import Features from "./landing/Features";
import Tokenomics from "./landing/Tokenomics";
import Development from "./landing/Development";
import RoadMap from "./landing/RoadMap";
import Community from "./landing/Community";

new SmoothScroll('a[href*="#"]', {
  speed: 2000,
  speedAsDuration: true,
});

function Landing() {
  return (
    <div className="flex flex-col text-white landing">
      {/* Start Partial Home */}
      <Home />
      {/* End Partial Home */}
      {/* Start Partial Features */}
      <Features />
      {/* End Partial Features */}
      {/* Start Partial Tokenomics */}
      <Tokenomics />
      {/* End Partial Tokenomics */}
      {/* Start Partial Development map*/}
      <Development />
      {/* End Partial Development map*/}
      {/* Start Partial Future Roadmap */}
      <RoadMap />
      {/* End Partial Future Roadmap */}
      {/* Start Partial Community */}
      <Community />
      {/* End Partial Community */}
    </div>
  );
}

export default Landing;
