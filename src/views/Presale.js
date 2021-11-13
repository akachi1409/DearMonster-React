import React from "react";
import SmoothScroll from "smooth-scroll";

import Title from "./presale/Title";
import Timer from "./presale/Timer";
import Faq from "./presale/Faq";
import Community from "./landing/Community";
new SmoothScroll('a[href*="#"]', {
    speed: 2000,
    speedAsDuration: true,
});

function Presale(){
    return(
        <div className="flex flex-col text-white presale">
            <Title/>
            <Timer/>
            <Faq/>
            <Community/>
        </div>
    )
}
export default Presale;