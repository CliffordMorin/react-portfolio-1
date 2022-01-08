import "../Landing/Landing.css";
import SocialLinksVertical from "../UI/SocialLinksVertical";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IconContext } from "react-icons";
import Flip from "react-reveal/Flip";
import BIRDS from "vanta/dist/vanta.birds.min";
import React, { useState, useEffect, useRef } from "react";

const Landing = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0xdddddd,
          color1: 0x2e7d32,
          color2: 0xe62776,
          colorMode: "lerp",
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  let content = {
    English: {
      title: "Zach Stone",
      description: "// Web Developer //",
    },
    Japanese: {
      title: "Zach Stone",
      description: "// ウエブデベロッパー //",
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);

  return (
    <IconContext.Provider
      value={{ color: "#2e7d32", className: "global-class-name", size: "50px" }}
    >
      <div className="Landing" ref={myRef}>
        <div className="landing-content">
          <Flip top>
            <h1 className="landing-title">{content.title}</h1>
            <h3 className="landing-description">{content.description}</h3>
          </Flip>
          <SocialLinksVertical />
        </div>

        <div className="contact-button">
          <a href="#About">
            <MdKeyboardArrowDown color="#E62776" className="down-arrow" />
          </a>
        </div>
      </div>
      <div id="About" />
    </IconContext.Provider>
  );
};

export default Landing;
