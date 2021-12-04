import "../Landing/Landing.css";
import SocialLinksVertical from "../UI/SocialLinksVertical";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IconContext } from "react-icons";

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
      value={{ color: "green", className: "global-class-name", size: "50px" }}
    >
      <div className="Landing">
        <div className="landing-content">
          <h1 className="landing-title">{content.title}</h1>
          <h3 className="landing-description">{content.description}</h3>
          <SocialLinksVertical />
        </div>
        <div className="contact-button">
          <a href="#About">
            <MdKeyboardArrowDown />
          </a>
        </div>
      </div>
      <div id="About" />
    </IconContext.Provider>
  );
};

export default Landing;
