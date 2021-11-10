import React from "react";
import { Fade, Slide } from "react-reveal";

import ArrowLeftForRoadMap from "../../assets/images/landing/roadmap/arrow-left.png";
import ArrowRightForRoadMap from "../../assets/images/landing/roadmap/arrow-right.png";
import ArrowDownForRoadMap from "../../assets/images/landing/roadmap/arrow-down.png";

function RoadMap() {
  return (
    <div className="flex flex-col items-center py-24" id="roadmap">
      <Slide top>
        <h1 className="text-white text-7xl my-16">FUTURE ROADMAP</h1>
      </Slide>
      <div className="flex flex-col w-full">
        <div className="flex flex-row">
          {/* Start Roadmap Card */}
          <Fade left>
            <div className="flex flex-1 flex-col text-center">
              <h1 className="uppercase text-4xl mb-4">Phase 1</h1>
              <div className="road-mapcard text-black flex justify-center items-center xl:text-2xl text-lg">
                <p className="w-4/5">
                  • Pre-Sales
                  <br /> • Graphics for DearMonsters
                  <br /> • UX/UI Development
                  <br /> • Official Launch
                  <br />  of Social Platforms
                  <br /> • Launch Marketing
                  <br /> • Listing on Pancake Swap
                  <br />  Coingecko and Coinmarketcap
                  <br /> • Launch of DearMonsters V1
                  <br /> • DearMonsters Trading Post
                  <br /> • DearMonsters Raffle
                  <br /> • Sale of Caves
                  <br /> • Audit Contract
                </p>
              </div>
            </div>
          </Fade>
          {/* End Roadmap Card */}
          {/* Start the right arrow */}
          <div className="xl:w-72 w-48 px-3 flex items-center">
            <Fade left>
              <img src={ArrowRightForRoadMap} alt="arrow-right" />
            </Fade>
          </div>
          {/* Start the right arrow */}
          {/* Start Roadmap Card */}
          <div className="flex flex-1 flex-col text-center">
            <Fade left>
              <h1 className="uppercase text-4xl mb-4">Phase 2</h1>
              <div className="road-mapcard text-black flex justify-center items-center xl:text-2xl text-lg">
                <p className="w-2/3">
                  • DearMonsters Farm
                  <br /> • More Listings at CEX
                  <br /> • Guilds Beta
                  <br /> • Content & Affiliate Marketing
                  <br /> • Launch of Daily/Weekly Tasks
                  <br /> • Release of more DearMonsters
                </p>
              </div>
            </Fade>
          </div>
          {/* End Roadmap Card */}
        </div>
        <div className="flex flex-row justify-end my-5">
          {/* Start the right arrow */}
          <div className="flex flex-1"></div>
          <div className="xl:w-72 w-48"></div>
          <div className="flex flex-1 justify-center">
            <Fade down>
              <img
                src={ArrowDownForRoadMap}
                alt="arrow-down"
                className="xl:h-72 h-48"
              />
            </Fade>
          </div>
          {/* Start the right arrow */}
        </div>
        <div className="flex flex-row">
          {/* Start Roadmap Card */}
          <Fade right>
            <div className="flex flex-1 flex-col text-center">
              <h1 className="uppercase text-4xl mb-4">Phase 4</h1>
              <div className="road-mapcard text-black flex justify-center items-center xl:text-2xl text-lg">
                <p className="w-2/3">
                  • Partnerships with
                  <br /> retailers for
                  <br /> players to redeem
                  <br /> products with DMS
                  <br />• Game Client Beta
                  <br />• Skill and Strategy based PvP
                </p>
              </div>
            </div>
          </Fade>
          {/* End Roadmap Card */}
          {/* Start the right arrow */}
          <div className="xl:w-72 lg:w-48 px-3 flex items-center">
            <Fade right>
              <img src={ArrowLeftForRoadMap} alt="arrow-left" />
            </Fade>
          </div>
          {/* Start the right arrow */}
          {/* Start Roadmap Card */}
          <Fade right>
            <div className="flex flex-1 flex-col text-center">
              <h1 className="uppercase text-4xl mb-4">Phase 3</h1>
              <div className="road-mapcard text-black flex justify-center items-center xl:text-2xl text-lg">
                <p className="w-2/3">
                  • Guilds Gameplay
                  <br />• Guild Wars
                  <br />• Guild Leaderboard
                  <br />• Guild Dungeon
                  <br />• Progression of DearMonsters
                  <br />• Enhancement of DearMonsters Ecosystem
                  <br />• Release of skins
                  <br />• DearMonsters Evolution to develop skills
                </p>
              </div>
            </div>
          </Fade>
          {/* End Roadmap Card */}
        </div>
      </div>
    </div>
  );
}

export default RoadMap;
