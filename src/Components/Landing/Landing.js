import "../Landing/Landing.css";
import SocialLinks from "../UI/SocialLinks";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IconContext } from "react-icons";

const Landing = (props) => {
  let content = {
    English: {
      title: "Zach Stone",
      description: "// Software Engineer",
    },
    Japanese: {
      title: "ザック・ストーン",
      description: "// ソフトエンジニア",
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
          <SocialLinks />
        </div>
        <a className="contact-button">
          {" "}
          <MdKeyboardArrowDown />
        </a>
      </div>
    </IconContext.Provider>
  );
};

export default Landing;
