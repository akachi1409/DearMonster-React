import React from "react";
import SmoothScroll from "smooth-scroll";

import Title from "./presale/Title";

new SmoothScroll('a[href*="#"]', {
    speed: 2000,
    speedAsDuration: true,
});

function Presale(){
    return(
        <div className="flex flex-col text-white presale">
            <Title/>
        </div>
    )
}
export default Presale;