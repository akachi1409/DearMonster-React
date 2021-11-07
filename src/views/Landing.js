import React from "react";
import { Fade, Flip, Slide } from "react-reveal";
import { SocialIcon } from "react-social-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Header from "../components/Header";

import Logo from "../logo.svg";

function Landing() {
  return (
    <div className="flex flex-col bg-blue-gradient">
      <div className="z-10">
        <Fade>
          <Header />
        </Fade>
      </div>
      <div className="flex flex-col justify-center items-center h-screen">
        <Fade top>
          <img src={Logo} alt="🙌Logo" />
        </Fade>
      </div>
      <div className="flex flex-col p-8">
        <Slide top>
          <h1 className="uppercase text-white text-4xl text-center my-8">
            Development Map
          </h1>
        </Slide>
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
      <div className="flex sm:flex-col items-center py-8">
        <Slide top>
          <h1 className="text-white text-2xl my-8">
            Join the following community
          </h1>
        </Slide>
        <Slide bottom>
          <div className="flex sm:flex-row flex-col w-full justify-center">
            <div className="flex flex-col items-center text-white m-4">
              <SocialIcon
                network="twitter"
                bgColor="#F0F8FF"
                fgColor="#000000"
              />
              <span className="my-2">@DearMonstersBSC</span>
            </div>
            <div className="flex flex-col items-center text-white m-4">
              <SocialIcon
                network="discord"
                bgColor="#F0F8FF"
                fgColor="#000000"
              />
              <span className="my-2">DearMonsters(DMS)</span>
            </div>
            <div className="flex flex-col items-center text-white m-4">
              <SocialIcon
                network="telegram"
                bgColor="#F0F8FF"
                fgColor="#000000"
              />
              <span className="my-2">DearMonsters</span>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default Landing;
