import React from "react";
import { Fade } from "react-reveal";

import MonsterOne from "../../assets/images/landing/map/monster-1.png";
import MonsterTwo from "../../assets/images/landing/map/monster-2.png";
import MonsterThree from "../../assets/images/landing/map/monster-3.png";
import MonsterFour from "../../assets/images/landing/map/monster-4.png";
import ArrowLeftForMap from "../../assets/images/landing/map/arrow-left.png";
import ArrowRightForMap from "../../assets/images/landing/map/arrow-right.png";

function Development() {
  return (
    <div className="flex flex-col" id="development">
      <Fade top>
        <h1 className="uppercase lg:text-7xl md:text-3xl sm:text-3xl text-center lg:py-20 md:py-10 sm:py-5">
          Development Map
        </h1>
      </Fade>
      <div className="flex flex-col lg:m-40 md:m-20 sm:m-10">
        {/* Start MapRow */}
        <div className="flex">
          <div className="flex flex-1 justify-between  development-responsive-flow">
            <Fade left>
              <div className="flex flex-1 flex-col justify-center items-center dev-mapcard px-6 my-2 lg:my-3 md:my-3 sm:my-4">
                <div className="lg:w-3/5">
                  <h1 className="color-blackblue text-2xl lg:text-xl md:text-lg sm:text-base lg:p-4 md:p-5 sm:p-10 font-bold text-center">
                    Conceptualization of Idea for Game
                  </h1>
                  <h1 className="color-blackblue text-2xl lg:text-xl md:text-lg sm:text-base lg:px-4 md:px-3 sm:px-2  font-bold text-center">
                    - Apr 2021
                  </h1>
                  <p className="text-black m-5 md:p-5 sm:p-7">
                    - Brainstorming of ideas for play to earn' feature
                    <br /> -Ensuring soundness and sustainability of play to
                    earn concept
                  </p>
                </div>
              </div>
              <div className="w-10 flex flex-col justify-center right-response-left-border">
                <img
                  src={ArrowLeftForMap}
                  className="rotate-reverse"
                  alt="leftForMap"
                  width="40"
                  height="40"
                />
              </div>
            </Fade>
          </div>
          <div className="flex-1 justify-center items-center invisible-mobile">
            <Fade right>
              <img src={MonsterOne} alt="monster_one" width="60%" className="auto-margin"/>
            </Fade>
          </div>
        </div>
        {/* End MapRow */}
        {/* Start MapRow */}
        <div className="flex flex-row">
          <div className="flex-1 justify-center items-center invisible-mobile">
            <Fade left>
              <img src={MonsterTwo} alt="monster_two" width="80%" />
            </Fade>
          </div>
          <div className="flex flex-1 justify-between flex-row border-l-2 border-white">
            <Fade right>
              <div className="w-10 flex flex-col justify-center">
                <img
                  src={ArrowRightForMap}
                  alt="rightForMap"
                  width="40"
                  height="40"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center items-center dev-mapcard px-6 my-2 lg:my-3 md:my-3 sm:my-4">
                <div className="lg:w-3/5">
                  <h1 className="color-blackblue text-2xl lg:text-xl md:text-lg sm:text-base lg:p-4 md:p-5 sm:p-10 font-bold text-center">
                    Development Begins
                  </h1>
                  <h1 className="color-blackblue text-2xl lg:text-xl md:text-lg sm:text-base lg:px-4 md:px-3 sm:px-2  font-bold text-center">
                    - Jun 2021
                  </h1>
                  <p className="text-black m-5 md:p-5 sm:p-7">
                    - Gathering of team
                    <br /> - Generation of content
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
        {/* End MapRow */}
        {/* Start MapRow */}
        <div className="flex flex-row">
          <div className="flex flex-1 justify-between development-responsive-flow">
            <Fade left>
              <div className="flex flex-1 flex-col justify-center items-center dev-mapcard px-6 my-2 lg:my-3 md:my-3 sm:my-4">
                <div className="lg:w-3/5">
                  <h1 className="color-blackblue text-2xl lg:text-xl md:text-lg sm:text-base lg:p-4 md:p-5 sm:p-10 font-bold text-center">
                    Creation of Token
                  </h1>
                  <h1 className="color-blackblue text-2xl lg:text-xl md:text-lg sm:text-base lg:px-4 md:px-3 sm:px-2  font-bold text-center">
                    - Nov 2021
                  </h1>
                  <p className="text-black m-5 md:p-5 sm:p-7">
                    - Presale 1<br /> - Marketing of game
                    <br /> - Listing on PancakeSwap and CoinGekco
                    <br /> - Launching of social platforms
                    <br /> - Beta launch and testing
                    <br /> - Audit contract
                    <br /> - Launching of NFTs
                  </p>
                </div>
              </div>
              <div className="w-10 flex flex-col justify-center right-response-left-border">
                <img
                  src={ArrowLeftForMap}
                  className="rotate-reverse"
                  alt="leftForMap"
                  width="40"
                  height="40"
                />
              </div>
            </Fade>
          </div>
          <div className="flex-1 justify-center items-center border-white invisible-mobile">
            <Fade right>
              <img src={MonsterThree} alt="monster_three" width="60%" />
            </Fade>
          </div>
        </div>
        {/* End MapRow */}
        {/* Start MapRow */}
        <div className="flex flex-row">
          <div className="flex-1 justify-center items-center invisible-mobile">
            <Fade left>
              <img src={MonsterFour} alt="monster_four" width="60%" />
            </Fade>
          </div>
          <div className="flex flex-1 justify-between flex-row border-l-2 border-white">
            <Fade right>
              <div className="w-10 flex flex-col justify-center">
                <img
                  src={ArrowRightForMap}
                  alt="rightForMap"
                  width="40"
                  height="40"
                  className="align-middle"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center items-center dev-mapcard px-6 my-2 lg:my-3 md:my-3 sm:my-4">
                <div className="xl:w-2/5 lg:w-3/5 md:2-3/5 ">
                  <h1 className="color-blackblue text-2xl lg:text-xl md:text-lg sm:text-base lg:p-4 md:p-5 sm:p-10 font-bold text-center">
                    Launch of Website Initial Version
                  </h1>
                  <h1 className="color-blackblue text-2xl lg:text-xl md:text-lg sm:text-base lg:px-4 md:px-3 sm:px-2  font-bold text-center">
                    - Dec 2021
                  </h1>
                  <p className="text-black m-5 md:p-5 sm:p-7">
                    - Marketing
                    <br /> - Partnerships with CEX
                    <br /> - DearMonsters V1 game play launch
                    <br /> - Marketplace
                    <br /> - Sale of Caves
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
        {/* End MapRow */}
      </div>
    </div>
  );
}

export default Development;
