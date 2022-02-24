import "../Landing/Landing.css";
import SocialLinksVertical from "../UI/SocialLinksVertical";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IconContext } from "react-icons";
import Flip from "react-reveal/Flip";
import Slide from "react-reveal/Slide";

const Landing = (props) => {
  let content = {
    English: {
      title: "Zach Stone",
      description: "// Web Developer //",
    },
    Japanese: {
      title: "Zach Stone",
      description: "// ウェブ開発者 //",
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);

  return (
    <IconContext.Provider
      value={{
        color: "var(--secondary-color)",
        className: "global-class-name",
        size: "50px",
      }}
    >
      <div className="Landing">
        <div className="landing-content">
          <Flip top>
            <div className="text-div">
              <h1 className="landing-title">{content.title}</h1>
              <h1 className="landing-description">{content.description}</h1>
            </div>
          </Flip>
          <SocialLinksVertical />
        </div>
        <Slide bottom>
          <div className="contact-button">
            <a href="#About">
              <MdKeyboardArrowDown
                color="var(--primary-color)"
                className="down-arrow"
                size="75px"
              />
            </a>
          </div>
        </Slide>
      </div>
      <div id="About" />
    </IconContext.Provider>
  );
};

export default Landing;
