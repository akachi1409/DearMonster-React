import React from "react";

function Timer(){
    return(
        <div className="flex flex-col" id="presale-timer">
            <div className="flex flex-col w-full justify-center">
                <div className="flex xl:flex-row lg:flex-col-reverse md:flex-col-reverse sm:flex-col-reverse xl:p-10 lg:p-10 md:p-3 sm:p-3 ">
                    <div className="presale-comment flex flex-col p-5 md:py-10 sm:py-10 md:mt-5 text-center">
                        <h1 className="uppercase lg:text-5xl md:text-2xl sm:text-xl text-center lg:py-10 md:py-5 sm:py-3 presale-title px-1">presale</h1>
                        <p className="xl:text-base lg:text-base md:text-sm sm:text-sm py-1 px-1 ">
                            Presale DMS Price:0.01 BUSD per DMS
                        </p>
                        <p className="xl:text-base lg:text-base md:text-sm sm:text-sm py-1 px-1 sm:px-5">
                            Minimum Purchase Amount per Wallet Address : 200 BUSD
                        </p>
                        <p className="xl:text-base lg:text-base md:text-sm sm:text-sm py-1 px-1 sm:px-5">
                            Maximum Purchase Amount per Wallet Address : 2000 BUSD
                        </p>
                        <p className="xl:text-base lg:text-base md:text-sm sm:text-sm py-1 px-1">
                            Maximum Presale Allocation: 50,000,000 DMS
                        </p>
                    </div>
                    <div className="presale-timer flex flex-6 flex-col p-5 md:mb-5 sm:mb-5">
                        <h1 className="uppercase lg:text-5xl md:text-2xl sm:text-xl  md:py-10 sm:py-5 presale-title px-10">countdown timer</h1>
                        <div className="flex flex-row lg:pr-40">
                            <div className="presale-count">
                                <h1 className="uppercase lg:text-5xl md:text-2xl sm:text-xl text-center lg:pt-10 md:py-5 sm:py-2 presale-title">09</h1>
                                <p className="xl:text-2lg lg:text-lg md:text-base sm:text-sm py-5 text-center">
                                    Days
                                </p>
                            </div>
                            <div className="presale-count">
                                <h1 className="uppercase lg:text-5xl md:text-2xl sm:text-xl text-center lg:pt-10 md:py-5 sm:py-2 presale-title">23</h1>
                                <p className="xl:text-2lg lg:text-lg md:text-base sm:text-sm py-5 text-center">
                                    Hours
                                </p>
                            </div>
                            <div className="presale-count">
                                <h1 className="uppercase lg:text-5xl md:text-2xl sm:text-xl text-center lg:pt-10 md:py-5 sm:py-2 presale-title">56</h1>
                                <p className="xl:text-2lg lg:text-lg md:text-base sm:text-sm py-5 text-center">
                                    Minutes
                                </p>
                            </div>
                            <div className="presale-count">
                                <h1 className="uppercase lg:text-5xl md:text-2xl sm:text-xl text-center lg:pt-10 md:py-5 sm:py-2 presale-title">30</h1>
                                <p className="xl:text-2lg lg:text-lg md:text-base sm:text-sm py-5 text-center">
                                    Seconds
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center my-2 md:my-6">
                    <div className="presale-paper xl:w-3/5 lg:w-3/5 md:w-3/5 sm:w-full">
                        <h1 className="uppercase lg:text-4xl md:text-2xl sm:text-xl text-center xl:pt-30 lg:pt-20 md:pt-40 sm:pt-52 presale-title text-black">tokens bought</h1>
                        <div className="presale-progress">
                            <div className="presale-progress-bar">
                            </div>
                            <p className="float-right text-black mt-2">50,000,000DMS</p>
                            <div className="presale-buy float-left mt-10 mb-20 xl:p-10 lg:p-8 p-10 xl:text-3lg lg:text-2lg">
                                Buy now
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Timer;