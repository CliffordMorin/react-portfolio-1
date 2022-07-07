import "../Landing/Landing.css";
import SocialLinksVertical from "../UI/SocialLinksVertical";

import { IconContext } from "react-icons";

const Landing = (props) => {
  let content = {
    English: {
      title: "Zach Stone",
      description: "Web Developer",
    },
    Japanese: {
      title: "Zach Stone",
      description: "ウェブ開発者",
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
          <div className="text-div">
            <h1 className="landing-title">{content.title}</h1>
            <h1 className="landing-description">{content.description}</h1>
          </div>

          <SocialLinksVertical />
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Landing;
