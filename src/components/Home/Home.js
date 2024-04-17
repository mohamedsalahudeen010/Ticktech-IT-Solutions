import React, { useContext } from "react";
import "./Home.css";
import Hero from "../image/logo/Hero Image.png";

import HeroBackGround from "../image/logo/Hero Background.svg";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Insta from "@iconscout/react-unicons/icons/uil-instagram-alt";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import Paper from "@iconscout/react-unicons/icons/uil-telegram";

import { themeContext } from "../../context";

function Home() {
  const theme = useContext(themeContext);
  const lightMode = theme.state.lightTheme;

  return (
    <div className="introduction" id="home">
      <div className="home-left">
        <div className="home-name">
          <span>Hello! </span>

          <span>
            <span style={{ color: lightMode ? "black" : "white" }}>I'm</span> <span
            style={{color:"gray",textDecoration:"underline"}}>Anish</span>👋🏼
          </span>
          <span>
            UI/UX Designer, Front-End Developer & Thinker.
            <br></br>
            Based in India.
          </span>
        </div>
        <div className="home-btn-div">
          <button className="home-btn-1"> Download CV</button>

          <button className="home-btn-2"> Get in Touch!</button>
        </div>
        
        <div className="home-icons">
          <div
            className="icons"
            style={{ borderColor: lightMode ? "black" : "" }}
          >
            <Facebook color={lightMode ? "black" : "White"} size="1.5rem" />
          </div>
          <div
            className="icons"
            style={{ borderColor: lightMode ? "black" : "" }}
          >
            <Insta color={lightMode ? "black" : "White"} size="1.5rem" />
          </div>
          <div
            className="icons"
            style={{ borderColor: lightMode ? "black" : "" }}
          >
            <Twitter color={lightMode ? "black" : "White"} size="1.5rem" />
          </div>
          <div
            className="icons"
            style={{ borderColor: lightMode ? "black" : "" }}
          >
            <Github color={lightMode ? "black" : "White"} size="1.5rem" />
          </div>
          <div
            className="icons"
            style={{ borderColor: lightMode ? "black" : "" }}
          >
            <Linkedin color={lightMode ? "black" : "White"} size="1.5rem" />
          </div>
          <div
            className="icons"
            style={{ borderColor: lightMode ? "black" : "" }}
          >
            <Paper color={lightMode ? "black" : "White"} size="1.5rem" />
          </div>
        </div>
      </div>
      <div className="home-right">
        <div className="avatar">
          <img src={Hero} className="hero" alt="avatar"></img>
          <img
            src={HeroBackGround}
            className="heroBackground"
            alt="avatar"
          ></img>
        </div>
      </div>
      <div className="blur2"></div>
    </div>
  );
}

export default Home;
