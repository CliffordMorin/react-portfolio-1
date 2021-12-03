import "../Landing/Landing.css";
import SocialLinksVertical from "../UI/SocialLinksVertical";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IconContext } from "react-icons";

const scrollToAbout = () => {
  document
    .getElementById("About")
    .scrollIntoView({ behavior: "smooth", block: "center" });
};

const Landing = (props) => {
  let content = {
    English: {
      title: "Zach Stone",
      description: "// Web Developer //",
    },
    Japanese: {
      title: "ザック・ストーン",
      description: "// ウエブ開発者 //",
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
        <button className="contact-button" onClick={scrollToAbout}>
          {" "}
          <MdKeyboardArrowDown />
        </button>
      </div>
    </IconContext.Provider>
  );
};

export default Landing;
