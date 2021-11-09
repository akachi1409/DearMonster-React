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
        <h1 className="uppercase text-7xl text-center py-9">Features</h1>
      </Fade>
      <div className="flex flex-row flex-wrap">
        {/* Start Feature Card */}
        <div className="flex-col xl:w-1/3 lg:w-1/2 w-full p-8">
          <Fade bottom>
            <div className="flex items-center justify-center feature-item-title mb-9">
              <span className="w-1/3 text-center">
                Training Ground
                <br /> Play to Earn
              </span>
            </div>
            <div className="feature-item-content flex flex-col items-center py-16">
              <img
                src={Feature_Training}
                alt="coloseum"
                className="w-64 h-64"
              />
              <p className="xl:w-2/3 lg:w-1/2 w-1/3 px-4 text-center">
                At the training ground, players will battle minions to earn DMS
                tokens and EXP to level up their DearMonsters
              </p>
            </div>
          </Fade>
        </div>
        {/* End Feature Card */}
        {/* feature card */}
        <div className="flex-col xl:w-1/3 lg:w-1/2 w-full p-8">
          <Fade bottom>
            <div className="flex items-center justify-center feature-item-title mb-9">
              <span className="w-1/3 text-center">Guilds</span>
            </div>
            <div className="feature-item-content flex flex-col items-center py-16">
              <img src={Feature_Guilds} alt="coloseum" className="w-64 h-64" />
              <p className="xl:w-2/3 lg:w-1/2 w-1/3 px-4 text-center">
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
        <div className="flex-col xl:w-1/3 lg:w-1/2 w-full p-8">
          <Fade bottom>
            <div className="flex items-center justify-center feature-item-title mb-9">
              <span className="w-1/3 text-center">Trading Post</span>
            </div>
            <div className="feature-item-content flex flex-col items-center py-16">
              <img src={Feature_Trading} alt="coloseum" className="w-64 h-64" />
              <p className="xl:w-2/3 lg:w-1/2 w-1/3 mt-4 px-4 text-center">
              There will be a trading post for players to trade commodities and DearMonsters
              </p>
            </div>
          </Fade>
        </div>
        {/* feature card */}
        {/* feature card */}
        <div className="flex-col xl:w-1/3 lg:w-1/2 w-full p-8">
          <Fade bottom>
            <div className="flex items-center justify-center feature-item-title mb-9">
              <span className="w-1/3 text-center">Farming (staking)</span>
            </div>
            <div className="feature-item-content flex flex-col items-center py-16">
              <img src={Feature_Farming} alt="coloseum" className="w-64 h-64" />
              <p className="xl:w-2/3 lg:w-1/2 w-1/3 mt-4 px-4 text-center">
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
        <div className="flex-col xl:w-1/3 lg:w-1/2 w-full p-8">
          <Fade bottom>
            <div className="flex items-center justify-center feature-item-title mb-9">
              <span className="w-1/3 text-center">Raffle</span>
            </div>
            <div className="feature-item-content flex flex-col items-center py-16">
              <img src={Feature_Raffle} alt="coloseum" className="w-64 h-64" />
              <p className="xl:w-2/3 lg:w-1/2 w-1/3 mt-4 px-4 text-center">
                To create more interaction within the community, we will be
                releasing this raffle feature. Players can participate in the
                weekly raffle for free to stand a chance to win DearMonsters.
                Winners will get to have a rare monster and other collectibles
              </p>
            </div>
          </Fade>
        </div>
        {/* feature card */}
        {/* feature card */}
        <div className="flex-col xl:w-1/3 lg:w-1/2 w-full p-8">
          <Fade bottom>
            <div className="flex items-center justify-center feature-item-title mb-9">
              <span className="text-center">Other Features</span>
            </div>
            <div className="feature-item-content flex flex-col items-center py-16">
              <img src={Feature_Other} alt="coloseum" className="w-64 h-64" />
              <p className="xl:w-2/3 lg:w-1/2 w-1/3 mt-4 px-4 text-center">
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
