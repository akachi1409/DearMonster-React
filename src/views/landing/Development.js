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
        <h1 className="uppercase text-7xl text-center lg:py-20 md:py-10 sm:py-5">
          Development Map
        </h1>
      </Fade>
      <div className="flex flex-col lg:m-40 md:m-20 sm:m-10">
        {/* Start MapRow */}
        <div className="flex flex-row">
          <div className="flex flex-1 justify-between flex-row border-r-2 border-white">
            <Fade left>
              <div className="flex flex-1 flex-col justify-center items-center dev-mapcard px-6">
                <div className="lg:w-2/5 md:w sm:w">
                  <h1 className="color-blackblue text-2xl font-bold">
                    Conceptualization of Idea for Game
                  </h1>
                  <h1 className="color-blackblue text-2xl font-bold">
                    - Apr 2021
                  </h1>
                  <p className="text-black m-5">
                    - Brainstorming of ideas for play to earn' feature
                    <br /> -Ensuring soundness and sustainability of play to
                    earn concept
                  </p>
                </div>
              </div>
              <div className="w-10 flex flex-col justify-center">
                <img
                  src={ArrowLeftForMap}
                  alt="leftForMap"
                  width="40"
                  height="40"
                />
              </div>
            </Fade>
          </div>
          <div className="flex flex-1 justify-center items-center border-l-2 border-white">
            <Fade right>
              <img src={MonsterOne} alt="monster_one" width="60%" />
            </Fade>
          </div>
        </div>
        {/* End MapRow */}
        {/* Start MapRow */}
        <div className="flex flex-row">
          <div className="flex flex-1 justify-center items-center border-r-2 border-white">
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
              <div className="flex flex-1 flex-col justify-center items-center dev-mapcard px-6">
                <div className="lg:w-2/5">
                  <h1 className="color-blackblue text-2xl font-bold">
                    Development Begins
                  </h1>
                  <h1 className="color-blackblue text-2xl font-bold">
                    - Jun 2021
                  </h1>
                  <p className="text-black m-5">
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
          <div className="flex flex-1 justify-between flex-row border-r-2 border-white">
            <Fade left>
              <div className="flex flex-1 flex-col justify-center items-center dev-mapcard px-6">
                <div className="lg:w-2/5">
                  <h1 className="color-blackblue text-2xl font-bold">
                    Creation of Token
                  </h1>
                  <h1 className="color-blackblue text-2xl font-bold">
                    - Nov 2021
                  </h1>
                  <p className="text-black m-5">
                    - Presale 1<br /> - Marketing of game
                    <br /> - Listing on PancakeSwap and CoinGekco
                    <br /> - Launching of social platforms
                    <br /> - Beta launch and testing
                    <br /> - Audit contract
                    <br /> - Launching of NFTs
                  </p>
                </div>
              </div>
              <div className="w-10 flex flex-col justify-center">
                <img
                  src={ArrowLeftForMap}
                  alt="leftForMap"
                  width="40"
                  height="40"
                />
              </div>
            </Fade>
          </div>
          <div className="flex flex-1 justify-center items-center border-l-2 border-white">
            <Fade right>
              <img src={MonsterThree} alt="monster_three" width="60%" />
            </Fade>
          </div>
        </div>
        {/* End MapRow */}
        {/* Start MapRow */}
        <div className="flex flex-row">
          <div className="flex flex-1 justify-center items-center border-r-2 border-white">
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
              <div className="flex flex-1 flex-col justify-center items-center dev-mapcard px-6">
                <div className="lg:w-2/5">
                  <h1 className="color-blackblue text-2xl font-bold">
                    Launch of Website Initial Version
                  </h1>
                  <h1 className="color-blackblue text-2xl font-bold">
                    - Dec 2021
                  </h1>
                  <p className="text-black m-5">
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
