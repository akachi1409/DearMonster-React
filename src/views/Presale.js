import React from "react";
import SmoothScroll from "smooth-scroll";

import Title from "./presale/Title";
import Timer from "./presale/Timer";
new SmoothScroll('a[href*="#"]', {
    speed: 2000,
    speedAsDuration: true,
});

function Presale(){
    return(
        <div className="flex flex-col text-white presale px-20 md:px-3 sm:px-3">
            <Title/>
            <Timer/>
        </div>
    )
}
export default Presale;