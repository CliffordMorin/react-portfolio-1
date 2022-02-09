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
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
// import { SiRedux } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import BasicModal from "../UI/BasicModal";
import Bounce from "react-reveal/Bounce";
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
        [<DiSass />, "SASS", "https://sass-lang.com/"],
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
        // [<SiRedux />, "Redux", "https://redux.js.org/"],
        [<SiMaterialui />, "Material UI", "https://material-ui.com/"],
        [<RiGatsbyFill />, "Gatsby", "https://www.gatsbyjs.org/"],
        [<GrGraphQl />, "GraphQL", "https://graphql.org/"],
      ],
      resume: "Resume",
      cta0: "Front End",
      cta1: "Back End",
      cta2: "Mobile",
      cta3: "CS",
      title0: "Front End",
      title1: "Back End",
      title2: "Mobile",
      title3: "Computer Science",
      description0: [
        [
          "Create website layouts with HTML/CSS Understand basic design principles.",
        ],
        ["Know JavaScript and how to work with the DOM."],
        [
          "Know how to use Bootstrap, SASS, and MaterialUI to create responsive layouts. ",
        ],
        [
          "Create basic interactive frontend applications Connect to APIs and make requests via Fetch and Axios.",
        ],
        [
          "Know how to use React, Redux, and ReactDOM to create stateful applications.",
        ],
        ["Know how to use TypeScript to create reliable code."],
        [
          "Work with GIT and use version control to deploy and manage small production projects using a feature branch workflow",
        ],
        ["And more..."],
      ],
      description1: [
        ["Know how to use Node, Express, to create back end applications."],
        ["Know how to create RESTful APIs."],
        ["Know how to deploy projects and work with servers."],
        ["And more..."],
      ],
      description2: [
        [
          "Know how to create very simple mobile applications with React Native.",
        ],
        ["Know how to test mobile applications with Expo."],
      ],
      description3: [
        ["I have a strong grasp of object oriented programming."],
        [
          "I have a strong grasp of algorithms and can solve basic algorithmic problems.",
        ],
        ["I understand concepts like modularization"],
        ["I am comfortable with higher-order functions and recursion."],
        [
          "I am able to create advanced data strctures like linked lists, stacks, queues, and trees.",
        ],
        [
          <img
            src="https://www.codewars.com/users/zachinjapan/badges/small"
            alt="codewars"
          />,
        ],
      ],
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
        [<DiSass />, "SASS", "https://sass-lang.com/"],
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
        // [<SiRedux />, "Redux", "https://redux.js.org/"],
        [<RiGatsbyFill />, "Gatsby", "https://www.gatsbyjs.org/"],
        [<GrGraphQl />, "GraphQL", "https://graphql.org/"],
      ],
      resume: "履歴書",
      cta0: "フロントエンド",
      cta1: "バックエンド",
      cta2: "モバイル",
      cta3: "コンピューターサイエンス",
      title0: "フロントエンド",
      title1: "バックエンド",
      title2: "モバイル",
      title3: "コンピューターサイエンス",
      description0: [
        ["HTML/CSSを使ってレイアウトを作成できます。"],
        ["JavaScriptを使ってDOMを操作できます。"],
        [
          " Bootstrap, SASS, MaterialUIを使ってレスポンシブレイアウトを作成できます。",
        ],
        ["APIを使ってリクエストを送信できます。"],
        [
          "React, Redux, ReactDOMを使ってステートを持つアプリケーションを作成できます。",
        ],
        ["TypeScriptを使ってコードを安全に作成できます。"],
        ["GITを使って小規模なプロジェクトをデプロイできます。"],
        ["その他..."],
      ],
      description1: [
        ["Node, Expressを使ってバックエンドアプリケーションを作成できます。"],
        ["RESTfulなAPIを作成できます。"],
        ["プロジェクトをデプロイしてサーバーに接続できます。"],
      ],
      description2: [
        [
          "React Nativeを使って単純なモバイルアプリを作成できます。",
          "EXPOを使ってモバイルアプリをテストできます。",
        ],
      ],
      description3: [
        ["オブジェクト指向プログラミングを熟知しています。"],
        ["アルゴリズムを熟知しています。"],
        ["モジュール化を熟知しています。"],
        ["高階関数や再帰を熟知しています。"],

        [
          "リンクリストやスタック、キュー、木を使ってデータ構造を作成できます。",
        ],
        [
          <img
            src="https://www.codewars.com/users/zachinjapan/badges/small"
            alt="codewars"
          />,
        ],
      ],
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);
  return (
    <>
      <IconContext.Provider
        value={{
          color: "#2e7d32",
          className: "global-class-name sill-img",
          size: "40px",
        }}
      >
        <div className="Skills">
          <h1 className="skills-title">{content.title}</h1>
          <div className="resume-div">
            <Bounce>
              <BasicModal
                cta={content.cta0}
                title={content.title0}
                description={content.description0}
              />
            </Bounce>
            <Bounce>
              <BasicModal
                cta={content.cta1}
                title={content.title1}
                description={content.description1}
              />
            </Bounce>
            <Bounce>
              <BasicModal
                cta={content.cta2}
                title={content.title2}
                description={content.description2}
              />
            </Bounce>
            <Bounce>
              <BasicModal
                cta={content.cta3}
                title={content.title3}
                description={content.description3}
              />
            </Bounce>
          </div>
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
