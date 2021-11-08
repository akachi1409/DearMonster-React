import React from "react";
import { Fade, Slide } from "react-reveal";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Logo from "../logo.svg";
import Feature_Training from "../assets/images/landing/feature/feature-1.png";
import Feature_Guilds from "../assets/images/landing/feature/feature-2.png";
import Feature_Trading from "../assets/images/landing/feature/feature-3.png";
import Feature_Farming from "../assets/images/landing/feature/feature-4.png";
import Feature_Raffle from "../assets/images/landing/feature/feature-5.png";
import Feature_Other from "../assets/images/landing/feature/feature-6.png";
import Dianosor_Young from "../assets/images/landing/dragon/young.png";
import Dianosor_Middle from "../assets/images/landing/dragon/middle.png";
import Dianosor_Old from "../assets/images/landing/dragon/old.png";
import Twitter from "../assets/images/landing/community/twitter.png";
import Discord from "../assets/images/landing/community/discord.png";
import Telegram from "../assets/images/landing/community/telegram.png";

function Landing() {
  return (
    <div className="flex flex-col text-white landing">
      {/* Partial Home */}
      <div className="flex flex-col px-16 py-4 partial-home justify-around">
        <div className="flex flex-row justify-between items-center">
          <Fade top>
            <img src={Logo} alt="🙌Logo" width={234} />
            <div className="flex flex-row">
              <span className="landing-home-item p-3 m-3 text-2xl rounded-md">
                Home
              </span>
              <span className="landing-home-item p-3 m-3 text-2xl rounded-md">
                Features
              </span>
              <span className="landing-home-item p-3 m-3 text-2xl rounded-md">
                Tokenomics
              </span>
              <span className="landing-home-item p-3 m-3 text-2xl rounded-md">
                Development
              </span>
              <span className="landing-home-item p-3 m-3 text-2xl rounded-md">
                Future Roadmap
              </span>
              <span className="landing-home-item p-3 m-3 text-2xl rounded-md">
                Community
              </span>
            </div>
          </Fade>
        </div>
        <div>
          <Fade top>
            <h1 className="py-12 text-5xl">
              The Universe where blockchain and dreams meet
            </h1>
            <p className="text-2xl">
              The world of DearMonsters has existed since the advent of
              blockchain technology. Through years of exploration efforts, we
              have finally unearthed the fabled and mythical Universe of
              DearMonsters. Friendly and lovable creatures, DearMonsters seek to
              find a trainer they adore to travel and live with in the vast
              lands of the DearMonsters Universe. Currently, we have discovered
              the Hunter's Valley and set up a trading post and training ground
              for friends alike to start their trainer dreams. Join us as we
              explore more wonders together in an exhilarating journey of great
              discovery and rewards!
            </p>
          </Fade>
        </div>
        <div className="flex flex-row justify-between my-9">
          <Fade top>
            <div>
              <img src={Dianosor_Young} alt="young" />
            </div>
            <div>
              <img src={Dianosor_Middle} alt="middle" />
            </div>
            <div>
              <img src={Dianosor_Old} alt="old" />
            </div>
          </Fade>
        </div>
      </div>
      {/* Partial Home */}
      {/* Partial Features */}
      <div className="flex flex-col partial-features">
        <Fade top>
          <h1 className="uppercase text-7xl text-center py-9">Features</h1>
        </Fade>
        <div className="flex flex-row flex-wrap">
          {/* feature card */}
          <div className="flex-col w-1/3 py-8">
            <Fade bottom>
              <div className="flex items-center justify-center feature-item-title mb-9">
                <span className="w-1/3 text-center">
                  Training Ground Play to Earn
                </span>
              </div>
              <div className="feature-item-content flex flex-col items-center px-16 py-16">
                <img
                  src={Feature_Training}
                  alt="coloseum"
                  className="w-64 h-64"
                />
                <p className="w-2/3 text-center">
                  At the training ground, players will battle minions to earn
                  DMS tokens and EXP to level up their DearMonsters
                </p>
              </div>
            </Fade>
          </div>
          {/* feature card */}
          {/* feature card */}
          <div className="flex-col w-1/3 py-8">
            <Fade bottom>
              <div className="flex items-center justify-center feature-item-title mb-9">
                <span className="w-1/3 text-center">Guilds</span>
              </div>
              <div className="feature-item-content flex flex-col items-center px-16 py-16">
                <img
                  src={Feature_Guilds}
                  alt="coloseum"
                  className="w-64 h-64"
                />
                <p className="w-2/3 text-center">
                  Guilds will be introduced progressively across phases. Guilds
                  allows players to band together to share tips and item
                  knowledge and as well as to devise strategies to participate
                  and dominate in guild wars event
                </p>
              </div>
            </Fade>
          </div>
          {/* feature card */}
          {/* feature card */}
          <div className="flex-col w-1/3 py-8">
            <Fade bottom>
              <div className="flex items-center justify-center feature-item-title mb-9">
                <span className="w-1/3 text-center">Trading Post</span>
              </div>
              <div className="feature-item-content flex flex-col items-center px-16 py-16">
                <img
                  src={Feature_Trading}
                  alt="coloseum"
                  className="w-64 h-64"
                />
                <p className="w-2/3 mt-4 text-center">
                  There will be an open marketplace for players to trade
                  commodities and their DearMonsters
                </p>
              </div>
            </Fade>
          </div>
          {/* feature card */}
          {/* feature card */}
          <div className="flex-col w-1/3 py-8">
            <Fade bottom>
              <div className="flex items-center justify-center feature-item-title mb-9">
                <span className="w-1/3 text-center">Farming (staking)</span>
              </div>
              <div className="feature-item-content flex flex-col items-center px-16 py-16">
                <img
                  src={Feature_Farming}
                  alt="coloseum"
                  className="w-64 h-64"
                />
                <p className="w-2/3 mt-4 text-center">
                  Players are able to place their DearMonsters into the farm for
                  recurring income. This is especially for those who are unable
                  to commit time to the game. Farming rewards are earned in the
                  form DMS tokens.
                </p>
              </div>
            </Fade>
          </div>
          {/* feature card */}
          {/* feature card */}
          <div className="flex-col w-1/3 py-8">
            <Fade bottom>
              <div className="flex items-center justify-center feature-item-title mb-9">
                <span className="w-1/3 text-center">Raffle</span>
              </div>
              <div className="feature-item-content flex flex-col items-center px-16 py-16">
                <img
                  src={Feature_Raffle}
                  alt="coloseum"
                  className="w-64 h-64"
                />
                <p className="w-2/3 mt-4 text-center">
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
          <div className="flex-col w-1/3 py-8">
            <Fade bottom>
              <div className="flex items-center justify-center feature-item-title mb-9">
                <span className="text-center">Other Features</span>
              </div>
              <div className="feature-item-content flex flex-col items-center px-16 py-16">
                <img src={Feature_Other} alt="coloseum" className="w-64 h-64" />
                <p className="w-2/3 mt-4 text-center">
                  More features are currently in development and announcements
                  will be made when they are ready
                </p>
              </div>
            </Fade>
          </div>
          {/* feature card */}
        </div>
      </div>
      {/* Partial Features */}
      {/* Partial Tokenomics */}
      <div className="flex flex-col py-36">
        <Fade top>
          <h1 className="uppercase text-7xl text-center py-20">Tokenomics</h1>
          <div className="tokenomics"></div>
        </Fade>
      </div>
      {/* Partial Tokenomics */}
      <div className="flex flex-col p- 8">
        <Fade top>
          <h1 className="uppercase text-7xl text-center py-40">
            Development Map
          </h1>
        </Fade>
        <Fade>
          <div className="mx-10">
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date="Apr 2021"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title font-bold">
                  Conceptualization of Idea for Game
                </h3>
                <p>
                  - Brainstorming of ideas for 'play to earn' feature
                  <br /> - Ensuring soundness and sustainability of play to earn
                  concept
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date="Jun 2021"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title font-bold">
                  Development Begins
                </h3>
                <p>
                  - Gathering of team <br /> - Generation of content
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date="Nov 2021"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title font-bold">
                  Creation of Token
                </h3>
                <p>
                  - Presale 1
                  <br /> - Marketing of game
                  <br /> - Listing on PancakeSwap and CoinGekco
                  <br /> - Launching of social platforms
                  <br /> - Beta launch and testing
                  <br /> - Audit contract
                  <br /> - Launching of NFTs
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date="Dec 2021"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title font-bold">
                  Launch of Landing Website and App Website Initial Version
                </h3>
                <p>
                  - Marketing
                  <br /> - Partnerships with CEX
                  <br /> - DearMonsters V1 game play launch
                  <br /> - Marketplace
                  <br /> - Sale of Caves
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </Fade>
      </div>
      {/* Partial Community */}
      <div className="flex sm:flex-col items-center py-24">
        <Slide top>
          <h1 className="text-white text-7xl my-8">JOIN US NOW</h1>
        </Slide>
        <Slide bottom>
          <div className="flex sm:flex-row flex-col w-full justify-center">
            <div className="flex flex-col items-center m-4">
              <img src={Twitter} alt="twitter" className="w-1/2" />
              <span className="my-2 text-3xl">@DearMonstersBSC</span>
            </div>
            <div className="flex flex-col items-center m-4">
              <img src={Discord} alt="discord" className="w-1/2" />
              <span className="my-2 text-3xl">DearMonsters(DMS)</span>
            </div>
            <div className="flex flex-col items-center m-4">
              <img src={Telegram} alt="telegram" className="w-1/2" />
              <span className="my-2 text-3xl">DearMonsters</span>
            </div>
          </div>
        </Slide>
      </div>
      {/* Partial Community */}
      {/* Partial Footer */}
      <div className="flex items-center justify-center h-32 bg-blackblue">
        <h1 className="text-3xl text-center">
          Copyright @2021. All Rights Reserved By DearMonsters
        </h1>
      </div>
      {/* Partial Footer */}
    </div>
  );
}

export default Landing;
