import "../Landing/Landing.css";
import SocialLinksVertical from "../UI/SocialLinksVertical";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IconContext } from "react-icons";
import Flip from "react-reveal/Flip";

const Landing = (props) => {
  let content = {
    English: {
      title: "Zach Stone",
      description: "// Web Developer //",
    },
    Japanese: {
      title: "ザック・ストーン",
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
      <div className="Landing">
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
