import React from "react";

import Logo from "../../logo.svg";

function Title(){
    return(
        <div id="presale-title">
            <div className="flex flex-col items-center py-24">
                <img src={Logo} alt="🙌Logo" width={234} />
                <h1 className="uppercase lg:text-5xl md:text-2xl sm:text-xl text-center lg:py-20 md:py-10 sm:py-5 presale-title">the anticipation begins........</h1>
                <p className="xl:text-2lg lg:text-lg md:text-base sm:text-sm presale-wallet py-3 px-24">
                    Connect Wallet
                </p>
            </div>
        </div>
    )
}
export default Title;