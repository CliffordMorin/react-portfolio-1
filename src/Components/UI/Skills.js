import "./Skills.css";
import * as React from "react";
import { FaReact } from "react-icons/fa";
// import { SiCsharp } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IconContext } from "react-icons";
import { RiGatsbyFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { SiRedux } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

import { SiMaterialui } from "react-icons/si";

const Skills = (props) => {
  let content = {
    English: {
      title: "Skills",
      skills: [
        [
          <AiFillHtml5 />,
          "HTML",
          "https://developer.mozilla.org/en-US/docs/Web/HTML",
        ],
        [
          <DiCss3Full />,
          "CSS",
          "https://developer.mozilla.org/en-US/docs/Web/CSS",
        ],
        [<FaBootstrap />, "Bootstrap", "https://getbootstrap.com/"],
        [
          <IoLogoJavascript />,
          "JavaScript",
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        ],
        [<SiTypescript />, "Typescript", "https://www.typescriptlang.org/"],
        [<FaNodeJs />, "Node", "https://nodejs.org/en/"],
        [<SiMongodb />, "MongoDB", "https://www.mongodb.com/"],
        [<FaReact />, "React", "https://reactjs.org/"],
        [<SiRedux />, "Redux", "https://redux.js.org/"],
        [<SiMaterialui />, "Material UI", "https://material-ui.com/"],
        [<RiGatsbyFill />, "Gatsby", "https://www.gatsbyjs.org/"],
        [<GrGraphQl />, "GraphQL", "https://graphql.org/"],
        // [<SiCsharp />, "C#", "https://docs.microsoft.com/en-us/dotnet/csharp/"],
      ],
      resume: "Resume",
    },
    Japanese: {
      title: "スキル",

      skills: [
        [
          <AiFillHtml5 />,
          "HTML",
          "https://developer.mozilla.org/en-US/docs/Web/HTML",
        ],
        [
          <DiCss3Full />,
          "CSS",
          "https://developer.mozilla.org/en-US/docs/Web/CSS",
        ],
        [<FaBootstrap />, "Bootstrap", "https://getbootstrap.com/"],
        [
          <IoLogoJavascript />,
          "JavaScript",
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        ],
        [<SiTypescript />, "Typescript", "https://www.typescriptlang.org/"],
        [<FaNodeJs />, "Node", "https://nodejs.org/en/"],
        [<SiMongodb />, "MongoDB", "https://www.mongodb.com/"],
        [<FaReact />, "React", "https://reactjs.org/"],
        [<SiRedux />, "Redux", "https://redux.js.org/"],
        [<RiGatsbyFill />, "Gatsby", "https://www.gatsbyjs.org/"],
        [<GrGraphQl />, "GraphQL", "https://graphql.org/"],
        // [<SiCsharp />, "C#", "https://docs.microsoft.com/en-us/dotnet/csharp/"],
      ],
      resume: "履歴書",
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);
  return (
    <>
      <IconContext.Provider
        value={{
          color: "var(--primary-color)",
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
                <span>
                  {" "}
                  <a href={skill[2]} target="_blank" rel="noopener noreferrer">
                    {skill[0]}
                  </a>
                </span>
              </div>
            ))}
          </span>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Skills;
