import React, { useContext } from "react";
import "./About.css";
import Vector from "../image/logo/Vector 1.png";
import Hand from "../image/logo/Rectangle.png";
import Vector3 from "../image/logo/Vector 3.png";
import Vector4 from "../image/logo/Vector 4.png";
import Vector5 from "../image/logo/Vector 5.png";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Insta from "@iconscout/react-unicons/icons/uil-instagram-alt";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import Paper from "@iconscout/react-unicons/icons/uil-telegram";
import { themeContext } from "../../context";
function About() {
  const transition = { duration: 5, type: "spring" };
  const theme = useContext(themeContext);
  const lightMode = theme.state.lightTheme;

  return (
    <div className="about" id="about">
      <div className="about-main">
        <div className="hand">
          <img src={Vector} className="hero" alt="avatar"></img>
          <img src={Hand} className="heroBackground" alt="avatar"></img>
        </div>
        <div className="vector3">
          <img src={Vector3} className="hero" alt="avatar"></img>
        </div>
        <div className="vector4">
          <img src={Vector4} className="hero" alt="avatar"></img>
        </div>
        <div className="vector5">
          <img src={Vector5} className="hero" alt="avatar"></img>
        </div>
        <div className="centre"
        style={{ color: lightMode ? "black" : "white" }}
        >
          <span><b>T</b>his is it.;) <hr className="line"></hr></span>
            <p>
              {" "}
              Anish Kr. Sinha is an Indian UI/UX Designer & Front End Developer
              with a passion for designing beautiful and fuctional user
              experiences. Typically, he’s Driven & permanently Curious. He’s
              obsessed with designing things and even more obsessed with
              designing cool & clean stuff for the web and mobile. He has been
              in the business of creating since he hung his first painting on
              the wall when he was 11.
            </p>
            <p>
              He holds a bachelor degree in Computer Applications. During his
              graduation, he has been actively involved in the web design
              community for the last 3 years. he has designed websites for small
              businesses, events, nonprofits and more. Currently he’s based in
              Bihar, India. Where he’s working as an independent creative.
            </p>
            <p>
              His interests, however, extend beyond the web and he loves helping
              people with branding and print design. He even loves designing 3D
              floor plan.
            </p>
            <p>
              When he’s not designing, he’s probably hanging out with his
              girlfriend, watching series, sketching or messing around on
              something inspired by YouTube tutorials.
            </p>
            <hr className="line2"></hr>
          </div>
          
        <div className="about-icons">
          <div
            className="icons-about"
            style={{ borderColor: lightMode ? "black" : "" }}
          >
            <Facebook color={lightMode ? "black" : "White"} size="1.5rem" />
          </div>
          <div
            className="icons-about"
            style={{ borderColor: lightMode ? "black" : "" }}
          >
            <Insta color={lightMode ? "black" : "White"} size="1.5rem" />
          </div>
          <div
            className="icons-about"
            style={{ borderColor: lightMode ? "black" : "" }}
          >
            <Twitter color={lightMode ? "black" : "White"} size="1.5rem" />
          </div>
          <div
            className="icons-about"
            style={{ borderColor: lightMode ? "black" : "" }}
          >
            <Github color={lightMode ? "black" : "White"} size="1.5rem" />
          </div>
          <div
            className="icons-about"
            style={{ borderColor: lightMode ? "black" : "" }}
          >
            <Linkedin color={lightMode ? "black" : "White"} size="1.5rem" />
          </div>
          <div
            className="icons-about"
            style={{ borderColor: lightMode ? "black" : "" }}
          >
            <Paper color={lightMode ? "black" : "White"} size="1.5rem" />
          </div>
        </div>
       
      </div>
      <div className="email">sinhaanishkumar@outlook.com</div>
    </div>
  );
}

export default About;
