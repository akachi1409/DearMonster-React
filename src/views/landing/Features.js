import React from "react";
import { Fade } from "react-reveal";

import Feature_Training from "../../assets/images/landing/feature/feature-1.png";
import Feature_Guilds from "../../assets/images/landing/feature/feature-2.png";
import Feature_Trading from "../../assets/images/landing/feature/feature-3.png";
import Feature_Farming from "../../assets/images/landing/feature/feature-4.png";
import Feature_Raffle from "../../assets/images/landing/feature/feature-5.png";
import Feature_Other from "../../assets/images/landing/feature/feature-6.png";

function Features() {
  return (
    <div className="flex flex-col partial-features" id="features">
      <Fade top>
        <div className="uppercase lg:text-7xl md:text-3xl sm:text-3xl text-center lg:py-20 md:py-10 sm:py-5">Features</div>
      </Fade>
      <div className="flex flex-row flex-wrap">
        {/* Start Feature Card */}
        <div className="flex-col xl:w-1/3 lg:w-1/2 md:w-1/2 w-full p-8">
          <Fade bottom>
            <div className="flex items-center justify-center feature-item-title mb-9">
              <span className="w-1/3 sm:w-1/2 text-center">
                Training Ground
                <br /> Play to Earn
              </span>
            </div>
            <div className="feature-item-content flex flex-col items-center lg:py-8 sm:py-4 md:py-8">
              <img
                src={Feature_Training}
                alt="coloseum"
                className="lg:w-64 lg:h-64 sm:w-56 sm:lg-56"
              />
              <p className="2xl:w-3/5 xl:w-4/5 md:w-3/5 sm:w-4/6 xl:mt-2 lg:mt-1 xl:px-10 px-4 text-center md:pt-1 sm:pt-1 sm:text-sm sm:px-1">
                At the training ground, players will battle minions to earn DMS
                tokens and EXP to level up their DearMonsters
              </p>
            </div>
          </Fade>
        </div>
        {/* End Feature Card */}
        {/* feature card */}
        <div className="flex-col xl:w-1/3 lg:w-1/2 md:w-1/2 w-full p-8">
          <Fade bottom>
            <div className="flex items-center justify-center feature-item-title mb-9">
              <span className="w-1/3 text-center">Guilds</span>
            </div>
            <div className="feature-item-content flex flex-col items-center lg:py-8 sm:py-4 md:py-8">
              <img src={Feature_Guilds} alt="coloseum" className="lg:w-64 lg:h-64 sm:w-56 sm:lg-56" />
              <p className="2xl:w-3/5 xl:w-4/5 md:w-3/5 sm:w-4/6 xl:mt-2 lg:mt-1 xl:px-10 px-4 text-center md:pt-1 sm:pt-1 sm:text-sm sm:px-1">
                Guilds will be introduced progressively across phases. Guilds
                allows players to band together to share tips and item knowledge
                and as well as to devise strategies to participate and dominate
                in guild wars event
              </p>
            </div>
          </Fade>
        </div>
        {/* feature card */}
        {/* feature card */}
        <div className="flex-col xl:w-1/3 lg:w-1/2 md:w-1/2 w-full p-8">
          <Fade bottom>
            <div className="flex items-center justify-center feature-item-title mb-9">
              <span className="w-1/3 text-center">Trading Post</span>
            </div>
            <div className="feature-item-content flex flex-col items-center lg:py-8 sm:py-4 md:py-8">
              <img src={Feature_Trading} alt="coloseum" className="lg:w-64 lg:h-64 sm:w-56 sm:lg-56" />
              <p className="2xl:w-3/5 xl:w-4/5 md:w-3/5 sm:w-4/6 xl:mt-2 lg:mt-1 xl:px-10 px-4 text-center md:pt-1 sm:pt-1 sm:text-sm sm:px-1">
              There will be a trading post for players to trade commodities and DearMonsters
              </p>
            </div>
          </Fade>
        </div>
        {/* feature card */}
        {/* feature card */}
        <div className="flex-col xl:w-1/3 lg:w-1/2 md:w-1/2 w-full p-8">
          <Fade bottom>
            <div className="flex items-center justify-center feature-item-title mb-9">
              <span className="w-1/3 text-center">Farming (staking)</span>
            </div>
            <div className="feature-item-content flex flex-col items-center lg:py-8 sm:py-4 md:py-8">
              <img src={Feature_Farming} alt="coloseum" className="lg:w-64 lg:h-64 sm:w-56 sm:lg-56" />
              <p className="2xl:w-3/5 xl:w-4/5 lg:w-3/5 md:w-3/5 sm:w-4/6 xl:mt-2 lg:mt-1 xl:px-10 px-4 text-center md:pt-1 sm:pt-1 sm:text-sm sm:px-1">
                Players are able to place their DearMonsters into the farm for
                recurring income. This is especially for those who are unable to
                commit time to the game. Farming rewards are earned in the form
                DMS tokens.
              </p>
            </div>
          </Fade>
        </div>
        {/* feature card */}
        {/* feature card */}
        <div className="flex-col xl:w-1/3 lg:w-1/2 md:w-1/2 w-full p-8">
          <Fade bottom>
            <div className="flex items-center justify-center feature-item-title mb-9">
              <span className="w-1/3 text-center">Raffle</span>
            </div>
            <div className="feature-item-content flex flex-col items-center lg:py-8 sm:py-4 md:py-8">
              <img src={Feature_Raffle} alt="coloseum" className="lg:w-64 lg:h-64 sm:w-56 sm:lg-56" />
              <p className="2xl:w-3/5 xl:w-4/5 lg:w-3/5 md:w-3/5 sm:w-4/6 xl:mt-2 lg:mt-1 xl:px-8 px-4 text-center md:pt-1 sm:pt-1 sm:text-sm sm:px-1">
              To create more interaction within the community, we will be releasing this raffle feature. 
              Players can participate in the weekly raffle for free to stand a chance to win DearMonsters.  
              Winners will get to have a rare Dearmonster and other collectibles
              </p>
            </div>
          </Fade>
        </div>
        {/* feature card */}
        {/* feature card */}
        <div className="flex-col xl:w-1/3 lg:w-1/2 md:w-1/2 w-full p-8">
          <Fade bottom>
            <div className="flex items-center justify-center feature-item-title mb-9">
              <span className="text-center">Other Features</span>
            </div>
            <div className="feature-item-content flex flex-col items-center lg:py-8 sm:py-4 md:py-8">
              <img src={Feature_Other} alt="coloseum" className="xl:w-64 lg:h-64 sm:w-56 sm:lg-56" />
              <p className="2xl:w-3/5 xl:w-4/5 lg:w-3/5 md:w-3/5 sm:w-4/6 xl:mt-2 lg:mt-1 xl:px-8 px-4 text-center md:pt-1 sm:pt-1 sm:text-sm sm:px-1">
                More features are currently in development and announcements
                will be made when they are ready
              </p>
            </div>
          </Fade>
        </div>
        {/* feature card */}
      </div>
    </div>
  );
}

export default Features;
