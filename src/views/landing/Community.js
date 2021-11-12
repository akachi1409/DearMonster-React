import React from "react";
import { Slide } from "react-reveal";

import Twitter from "../../assets/images/landing/community/twitter.png";
import Discord from "../../assets/images/landing/community/discord.png";
import Telegram from "../../assets/images/landing/community/telegram.png";

function Community() {
  return (
    <div id="community">
      <div className="flex flex-col items-center py-24">
        <Slide top>
          <h1 className="uppercase lg:text-7xl md:text-3xl sm:text-3xl text-center lg:py-20 md:py-10 sm:py-5">JOIN US NOW</h1>
        </Slide>
        <Slide bottom>
          <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col w-full justify-center">
            <a href="https://twitter.com/DearMonstersBSC">
              <div className="flex flex-col items-center m-4">
                <img src={Twitter} alt="twitter" className="w-1/2" />
                <span className="my-2 text-3xl md:inline hidden">
                  @DearMonstersBSC
                </span>
              </div>
            </a>
            <a href="https://discord.gg/dearmonsters">
              <div className="flex flex-col items-center m-4">
                <img src={Discord} alt="discord" className="w-1/2" />
                <span className="my-2 text-3xl md:inline hidden">
                  DearMonsters
                </span>
              </div>
            </a>
            <a href="https://t.me/DearMonsters">
              <div className="flex flex-col items-center m-4">
                <img src={Telegram} alt="telegram" className="w-1/2" />
                <span className="my-2 text-3xl md:inline hidden">
                  DearMonsters
                </span>
              </div>
            </a>
          </div>
        </Slide>
      </div>
      {/* Start Partial Footer */}
      <div className="flex items-center justify-center h-32 bg-blackblue">
        <h1 className="text-3xl md:text-2xl sm:text-xl text-center ">
          Copyright @2021. All Rights Reserved By DearMonsters
        </h1>
      </div>
      {/* End Partial Footer */}
    </div>
  );
}

export default Community;
