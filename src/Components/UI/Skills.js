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
import { GrGraphQl } from "react-icons/gr";
import { SiRedux } from "react-icons/si";

const Skills = (props) => {
  let content = {
    title: "Skills",
    skills: [
      [<AiFillHtml5 />, "HTML"],
      [<DiCss3Full />, "CSS"],
      [<DiSass />, "SASS"],
      [<FaBootstrap />, "Bootstrap"],
      [<SiTypescript />, "Typescript"],
      [<FaNodeJs />, "Node"],
      [<FaReact />, "React"],
      [<SiRedux />, "Redux"],
      [<RiGatsbyFill />, "Gatsby"],
      [<GrGraphQl />, "GraphQL"],
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
                <div className="skill-icon-text">{skill[1]}</div>
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
