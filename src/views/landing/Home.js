import React from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

import Logo from "../../logo.svg";
import Dianosor_Young from "../../assets/images/landing/dragon/young.png";
import Dianosor_Middle from "../../assets/images/landing/dragon/middle.png";
import Dianosor_Old from "../../assets/images/landing/dragon/old.png";
import BookEnglish from "../../assets/pdf/English.pdf"
import BookChinese from "../../assets/pdf/Chinese.pdf";

const CONTRACT_ADDRESS = "0x9bfd1348cf574e3eb2b114cc18374b09ad012c69";


function Home() {
  const [menuVisible, setMenuVisible] = React.useState(true);
  const [presaleNotify, setPresaleNotify] = React.useState(false);
  const [whitePaper, setWhitePapter] = React.useState(false);
  const [clipboard, setClipBoard] = React.useState(false);
  return (
    <div
      className="flex flex-col px-20 py-4 partial-home justify-around"
      id="home"
    >
      <div className="flex xl:flex-row lg:flex-col flex-row justify-between items-center">
        <Fade top>
          <img src={Logo} alt="🙌Logo" width={234} />
          <span
            className="inline md:hidden material-icons border-2 border-white p-3 m-3 rounded-md cursor-pointer"
            onClick={() => setMenuVisible(true)}
          >
            menu
          </span>
          <div className="flex lg:flex-row flex-col md:relative fixed top-0 left-0 w-full z-10">
            <a
              href="#home"
              className="landing-home-item p-3 lg:m-3 xl:text-2xl lg:text-lg md:text-sm lg:rounded-md cursor-pointer text-center"
            >
              Home
            </a>
            <a
              href="#features"
              className="landing-home-item p-3 lg:m-3 xl:text-2xl lg:text-lg md:text-sm lg:rounded-md cursor-pointer text-center"
            >
              Features
            </a>
            <a
              href="#tokenomics"
              className="landing-home-item p-3 lg:m-3 xl:text-2xl lg:text-lg md:text-sm lg:rounded-md cursor-pointer text-center"
            >
              Tokenomics
            </a>
            <a
              href="#development"
              className="landing-home-item p-3 lg:m-3 xl:text-2xl lg:text-lg md:text-sm lg:rounded-md cursor-pointer text-center"
            >
              Development Map
            </a>
            <a
              href="#roadmap"
              className="landing-home-item p-3 lg:m-3 xl:text-2xl lg:text-lg md:text-sm lg:rounded-md cursor-pointer text-center"
            >
              Future Roadmap
            </a>
            <a
              href="#community"
              className="landing-home-item p-3 lg:m-3 xl:text-2xl lg:text-lg md:text-sm lg:rounded-md cursor-pointer text-center"
            >
              Community
            </a>
          </div>
        </Fade>
      </div>
      <div>
        <Fade top>
          <h1 className="py-12 text-5xl">
            The Universe where blockchain and dreams meet
          </h1>
          <p className="text-2xl">
            The world of DearMonsters has existed since the advent of blockchain
            technology. Through years of exploration efforts, we have finally
            unearthed the fabled and mythical Universe of DearMonsters. Friendly
            and lovable creatures, DearMonsters seek to find a trainer they
            adore to travel and live with in the vast lands of the DearMonsters
            Universe. Currently, we have discovered the Hunter's Valley and set
            up a trading post and training ground for friends alike to start
            their trainer dreams. Join us as we explore more wonders together in
            an exhilarating journey of great discovery and rewards!
          </p>
        </Fade>
      </div>
      <div className="my-4">
        <Fade top>
          <span className="text-lg">DearMonsters(DMS) contract address:</span>
          <div className="flex flex-row">
            <div className="lg:w-1/2 w-full border-2 border-white rounded-xl bg-transparent flex flex-row justify-between">
              <span className="p-1 ml-2">{CONTRACT_ADDRESS}</span>
              <span
                className="material-icons border-l border-white p-1 cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(CONTRACT_ADDRESS);
                  setClipBoard(true);
                  setTimeout(() => {
                    setClipBoard(false);
                  }, 3000);
                }}
              >
                content_paste
              </span>
            </div>
            {clipboard && <span className="m-1">Copied!!!</span>}
          </div>

          <span className="text-lg">Check on BSCScan</span>
          <div className="flex flex-row my-4">
            <button className="uppercase border-2 border-white px-4 py-2 rounded-2xl presale-button presale-tooltip ">
              Presale
              <span class="tooltiptext">Hold your horses! DearMonsters presale date will be announced soon. Join the discord for updates!</span>
            </button>
            <div className="relative">
              <button
                className="border-2 border-white px-5 py-2 rounded-2xl ml-5"
                onClick={() => setWhitePapter(!whitePaper)}
              >
                <div className="flex items-center">
                  <span>White Paper</span>
                  <span className="material-icons">arrow_drop_down</span>
                </div>
              </button>
              {whitePaper && (
                <ul className="absolute top-12 left-5 border-2 border-white rounded-2xl w-40">
                  <li
                    className="px-4 py-1 cursor-pointer"
                    onClick={() => setWhitePapter(!whitePaper)}
                  >
                    <a href = {BookEnglish}>
                    English
                    </a>
                  </li>
                  <li
                    className="px-4 py-1 cursor-pointer"
                    onClick={() => setWhitePapter(!whitePaper)}
                  >
                    <a href = {BookChinese}>
                    Chinese
                    </a>
                  </li>
                </ul>
              )}
              {/* <Link to="/hunters_valley">
                <span className="uppercase border-2 border-white px-5 py-2 rounded-2xl ml-5">
                  Enter App
                </span>
              </Link> */}
            </div>
          </div>
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
  );
}

export default Home;
