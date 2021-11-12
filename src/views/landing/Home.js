import React from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

import Logo from "../../logo.svg";
import Logo_mobile from "../../logo-mobile.svg"
import Dianosor_Young from "../../assets/images/landing/dragon/young.png";
import Dianosor_Middle from "../../assets/images/landing/dragon/middle.png";
import Dianosor_Old from "../../assets/images/landing/dragon/old.png";
import BookEnglish from "../../assets/pdf/English.pdf"
import BookChinese from "../../assets/pdf/Chinese.pdf";
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';

const CONTRACT_ADDRESS = "0x9bfd1348cf574e3eb2b114cc18374b09ad012c69";


function Home() {
  
  const [menuVisible, setMenuVisible] = React.useState(false);
  const [presaleNotify, setPresaleNotify] = React.useState(false);
  const [whitePaper, setWhitePapter] = React.useState(false);
  const [clipboard, setClipBoard] = React.useState(false);
  window.addEventListener('resize', () => {
    if(window.innerWidth > 640) {
      setMenuVisible(false);
    }
  });
  return (
    <div
      className="flex flex-col lg:px-20 lg:py-4 lg:partial-home justify-around sm:px-5 md:px-5" 
      id="home"
    >
      <div className={((menuVisible ? "row-media":"") +  "flex flex-row justify-between items-center")}>
        <Fade top>
          <ResponsiveImage className={(menuVisible ? "float-left-media " : "")}>
            <ResponsiveImageSize
              default
              minWidth={0}
              path={Logo_mobile}
            />
            <ResponsiveImageSize
              minWidth={640}
              path={Logo}
            />
          </ResponsiveImage>
          {/* <img src={Logo} alt="🙌Logo" width={234} /> */}
          <span
              className={"inline md:hidden material-icons border-2 border-white p-3 m-3 rounded-md cursor-pointer"} style={{float:"right"}
            } onClick={()=>{ setMenuVisible(!menuVisible);}}
            >
              menu
            </span>
            
          <div className={"flex lg:flex-row flex-col relative fixed top-0 right-0 md:relative fixed top-0 right-0 w-full z-10 sm:relative fixed flex-row " + (!menuVisible ? "right-hidden" : "right-show") +  " w-full z-10"} hidden id="myTopnav">
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
          <h1 className="py-12 lg:text-5xl md:text-3xl sm:text-3xl">
            The Universe where blockchain and dreams meet
          </h1>
          <p className="xl:text-2xl lg:text-2xl md:text-xl sm:text-base">
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
              <span className="lg:p-1 lg:ml-2 md:p-0 md:ml-0 sm:px-1 sm:ml-0 md:text-sm sm:text-xs sm:py-2">{CONTRACT_ADDRESS}</span>
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

          <span className="text-lg" style={{cursor: "pointer"}} onClick={()=>{
            var url = "https://bscscan.com/address/" + CONTRACT_ADDRESS;
            window.location.href = url
          }}>Check on BSCScan</span>
          <div className="flex flex-row my-4">
            <button className="uppercase border-2 border-white px-4 py-2 rounded-2xl presale-button presale-tooltip ">
              Presale
              <span className="tooltiptext">Hold your horses! DearMonsters presale date will be announced soon. Join the discord for updates!</span>
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
      <div className="justify-between my-9 dianosor-layout">
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
