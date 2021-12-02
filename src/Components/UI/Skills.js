import "./Skills.css";
import { FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { DiSass } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { IconContext } from "react-icons";

const Skills = (props) => {
  let content = {
    English: {
      title: "Skills",
    },
    Japanese: {
      title: "スキル",
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);

  return (
    <IconContext.Provider
      value={{ color: "green", className: "global-class-name", size: "40px" }}
    >
      <div className="Skills">
        <h3 className="skills-title">{content.title}</h3>
        <div className="skills-container">
          <AiFillHtml5 className="skills-icon" />
          <DiCss3Full className="skills-icon" />
          <FaBootstrap className="skills-icon" />
          <FaNodeJs className="skills-icon" />
          <DiSass className="skills-icon" />
          <FaReact className="skills-icon" />
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Skills;
