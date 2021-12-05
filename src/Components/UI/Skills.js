import "./Skills.css";
import * as React from "react";
import { FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { DiSass } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { IconContext } from "react-icons";
import { RiGatsbyFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

const Skills = (props) => {
  let content = {
    title: "Skills",
    skills: [
      [<AiFillHtml5 />, "HTML5"],
      [<DiCss3Full />, "CSS3"],
      [<DiSass />, "SASS"],
      [<FaBootstrap />, "Bootstrap"],
      [<SiTypescript />, "Typescript"],
      [<FaNodeJs />, "NodeJS"],
      [<FaReact />, "ReactJS"],
      [<RiGatsbyFill />, "GatsbyJS"],
    ],
  };

  return (
    <>
      <IconContext.Provider
        value={{
          color: "green",
          className: "global-class-name sill-img",
          size: "40px",
        }}
      >
        <div className="Skills">
          <h1 className="skills-title">{content.title}</h1>
          <span className="skills-container">
            {content.skills.map((skill) => (
              <div key={skill[1]} className="skill-icon">
                <div>{skill[1]}</div>
                <span>{skill[0]}</span>
              </div>
            ))}
          </span>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Skills;
