import "./Projects.css";
import quote from "../../images/projects/quote.webp";
import blog from "../../images/projects/blog.webp";
// import weather from "../../images/projects/weather.webp";
// import prefecture from "../../images/projects/prefecture.webp";
// import comedyshow from "../../images/projects/comedyshow.webp";
import haku from "../../images/projects/haku.png";
import castles from "../../images/work/castles.webp";
import MUIProjectCard from "../UI/ProjectCard/MUIProjectCard";
import Fade from "react-reveal/Fade";
import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { DiSass } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { IconContext } from "react-icons";
import { IoLogoJavascript } from "react-icons/io";
import { RiGatsbyFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
// import { SiRedux } from "react-icons/si";
import { BiLoaderCircle } from "react-icons/bi";
import Fib from "../../images/coding/Fib.webp";
import { SiMaterialui } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

const Projects = (props) => {
  const [filter, setFilter] = useState("All Projects");

  const skills = [
    [
      <AiFillHtml5 />,
      "HTML",
      "https://developer.mozilla.org/en-US/docs/Web/HTML",
    ],
    [<DiCss3Full />, "CSS", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
    [<DiSass />, "SASS", "https://sass-lang.com/"],
    [<FaBootstrap />, "Bootstrap", "https://getbootstrap.com/"],
    [
      <IoLogoJavascript />,
      "JavaScript",
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    ],
    [<SiTypescript />, "Typescript", "https://www.typescriptlang.org/"],
    [<FaNodeJs />, "Node", "https://nodejs.org/en/"],
    [<FaReact />, "React"],
    // [<SiRedux />, "Redux"],
    [<SiMaterialui />, "Material UI"],
    [<RiGatsbyFill />, "Gatsby"],
    [<GrGraphQl />, "GraphQL"],
    [<SiMongodb />, "MongoDB", "https://www.mongodb.com/"],
    [<BiLoaderCircle />, "All Projects"],
  ];

  let content = {
    English: {
      mainTitle: "Featured Projects",

      projects: [
        {
          title: `HAKU`,
          description:
            "Haku pronounced 'hah-koo' is an application that helps you track, and compare jobs during the the interview process.",
          image: haku,
          link: "https://hakujobs.com",
          linkText: "Live Demo",
          github: "https://github.com/zachinjapan/haku",
          tech: "Tech",
          tags: ["React", "CSS", "Node", "Authentication", "MongoDB"],
          tech_description:
            "A full stack application using manual authentication and MongoDB.",
          callToAction: "More Info",
        },
        {
          title: "Zach In Japan",
          description:
            "My blog using Gatsby and GraphQL. I write about coding concepts, Japan, and more.",
          image: blog,
          link: "https://zachinjapan.com",
          linkText: "Live Demo",
          github: "https://github.com/zachinjapan/my-gatsby-blog",
          tech: "Tech",
          tags: [
            "React",
            "CSS",
            "Markdown",
            "Gatsby",
            "GraphQL",
            "Gatsby Cloud",
          ],
          tech_description:
            "I use this blog to learn Gatsby, GraphQL, and markdown.",
          callToAction: "More Info",
        },
        {
          title: "Fib Buzz",
          description:
            "'Fib Buzz'!!  A union of the infamous 'Fizz Buzz' coding question and the  'Fibonacci Sequence'",
          image: Fib,
          link: "https://fib-buzz.netlify.app/",
          linkText: "Live Demo",
          github: "https://github.com/zachinjapan/fib_buzz",
          tech: "Tech",
          tags: ["React", "CSS", "JavaScript", "Material UI"],
          tech_description:
            "Please check the project page for more information on the code and technologies used.",
          callToAction: "More Info",
        },
        {
          title: "Quote Quiz",
          description:
            "Quiz your knowledge of famous quotes and share your favorite quotes on twitter.",
          image: quote,
          link: "https://quotequiz.netlify.app",
          linkText: "Live Demo",
          github: "https://github.com/zachinjapan/quotes",
          tech: "Tech",
          tags: ["CSS", "React", "API", "Netlify", "Typescript"],
          tech_description:
            "A joke api pulls the quotes which are then .map()'ed to buttons. The buttons themselves check if the user was correct and redux is used to tell when the round is over.",
          callToAction: "More Info",
        },
        {
          title: "Castles In The Sky",
          description:
            "Have a big event coming up? Book this professional rock band located in New Jersey, America.",
          image: castles,
          link: "https://castlesinthesky.netlify.app",
          linkText: "Live Demo",
          github: "https://github.com/zachinjapan/castles",
          tech: "Tech",
          tags: ["HTML", "JavaScript", "SASS", "Bootstrap", "Netlify"],
          tech_description:
            "A vanilla Javascript website using sass for styling and bootstrap.",
          callToAction: "More Info",
        },
        // {
        //   title: "Do I Need A Jacket?",
        //   description:
        //     "View the current live weather in America, determine if need to  wear a jacket, and more.",
        //   image: weather,
        //   link: "https://doineedajackettoday.herokuapp.com",
        //   linkText: "Live Demo",
        //   github: "https://github.com/zachinjapan/do_i_need_a_jacket",
        //   tech: "Tech",
        //   tags: [
        //     "HTML",
        //     "CSS",
        //     "JavaScript",
        //     "API",
        //     "Node",
        //     "REST API",
        //     "Heroku",
        //   ],
        //   tech_description:
        //     "This project has a backend as a server.js file. The data is pulled from the open weather api and sent to the backend and then requested back from the front end. The Washngton Post posted a study on what the average temperature is for each type of clothing. That data is then used to determine if you need a jacket or not.",
        //   callToAction: "More Info",
        // },

        // {
        //   title: "Prefecture Match",
        //   description:
        //     "Learn the Japanese Prefectures using this fun matching game",
        //   image: prefecture,
        //   link: "https://prefecture-match.herokuapp.com",
        //   linkText: "Live Demo",
        //   github: "https://github.com/zachinjapan/prefecture-match",
        //   tech: "Tech",
        //   tags: ["React", "CSS", "JavaScript", "Heroku"],
        //   tech_description:
        //     "I learned how to use the useEffect and useState hooks in a complex way. I also learned how to import and play audio in react.",
        //   callToAction: "More Info",
        // },

        // {
        //   title: "_C32F's Comedy Show",
        //   description:
        //     "Need a good laugh? Come check out this new up and coming robot comedian.",
        //   image: comedyshow,
        //   link: "https://zachinjapan.github.io/comedy_show/",
        //   linkText: "Live Demo",
        //   github: "https://github.com/zachinjapan/comedy_show",
        //   tech: "Tech",
        //   tags: ["HTML", "SASS", "JavaScript", "API", "Github Pages"],
        //   tech_description:
        //     "At the push of a button, the user can change the topic, play background music and rename the robot.　The topic buttons change the api url call.",
        //   callToAction: "More Info",
        // },
      ],
    },
    Japanese: {
      mainTitle: "プロジェクト",
      projects: [
        {
          title: `HAKU （ハク）`,
          description:
            "ハクは面接の過程でエントリした会社を追跡して比較できるアプリケーションです。",
          image: haku,
          link: "https://hakujobs.com",
          linkText: "ウェブサイト",
          github: "github.com/zachinjapan/haku",
          tech: "技術",
          tags: ["React", "CSS", "Node", "Authentication", "MongoDB"],
          tech_description: "Hakuは就職活動中に使うアプリです。",

          callToAction:
            "フルスタックアプリケーションです。ログイン機能とMongoDBを使用しています。",
        },
        {
          title: "ザック・イン・ジャパン",
          description: "私のテクノロジーブログです。",
          image: blog,
          link: "https://zachinjapan.gatsbyjs.io",
          linkText: "ウェブサイト",
          github: "https://github.com/zachinjapan/my-gatsby-blog",
          tech: "技術",
          tags: [
            "React",
            "CSS",
            "Markdown",
            "Gatsby",
            "GraphQL",
            "Gatsby Cloud",
          ],
          tech_description:
            "このブログでは、Gatsby、graphql、markdownを学んでいます。",
          callToAction: "詳しい情報",
        },
        {
          title: "Fib Buzz",
          description:
            "'Fib Buzz'!!  'Fizz Buzz'と'Fibonacci Sequence'の両方のコーディングチャレンジです。",
          image: Fib,
          link: "https://fib-buzz.netlify.app/",
          linkText: "ウェブサイト",
          github: "https://github.com/zachinjapan/fib_buzz",
          tech: "技術",
          tags: ["React", "CSS", "JavaScript", "MaterialUI"],
          tech_description: "ウェブサイトで詳細の情報を読んでください。",
          callToAction: "詳しい情報",
          callToActionLink: "https://zachinjapan.github.io/fib_buzz/",
        },
        {
          title: "引用クイズ",
          description:
            "名家の引用を使用し、インタラクティブなゲームをやってみてください。",
          image: quote,
          link: "https://quotequiz.netlify.app",
          linkText: "ウェブサイト",
          github: "https://github.com/zachinjapan/quotes",
          tech: "技術",
          tags: ["CSS", "React", "API", "Netlify", "Typescript"],
          tech_description:
            " ジョークAPIは引用符をゲットして、引用符はボタンに.map（）されます。 ボタンがユーザーが正しいかどうかをチェックし、reduxを使用してラウンドが終了したことを通知します。",
          callToAction: "詳しい情報",
        },
        {
          title: "カーサルズ・イン・ザー・スカイ",
          description: "アメリカのバンドのウェブサイトです。",
          image: castles,
          link: "https://castlesinthesky.netlify.app",
          linkText: "ウェブサイト",
          github: "",
          tech: "技術",
          tags: ["HTML", "JavaScript", "SASS", "Bootstrap", "Netlify"],
          tech_description:
            "スタイリングにsassを使用し、ブートストラップを使用するバニラJavascriptのサイトです。",
          callToAction: "詳しい情報",
        },
        // {
        //   title: "ジャケットが必要ですか？",
        //   description:
        //     "アメリカの郵便番号を使用して、現在の天気を表示し、ユーザーさんがジャケットを必要とするかどうかを判断します。",
        //   image: weather,
        //   link: "https://doineedajackettoday.herokuapp.com",
        //   linkText: "ウエブサイト",
        //   github: "https://github.com/zachinjapan/do_i_need_a_jacket",
        //   tech: "技術",
        //   tags: [
        //     "HTML",
        //     "CSS",
        //     "Javascrip",
        //     "API",
        //     "Node",
        //     "REST API",
        //     "Heroku",
        //   ],
        //   tech_description:
        //     "このプロジェクトはサーバーのバックエンドもあります。データはオープンウェアAPIから取得し、バックエンドからフロントエンドに戻ってきます。 Washington Post というサイトはジャケット　に必要な平均気温を研究しました。 その情報を使って、どんなアウターが必要かをお勧めします",
        //   callToAction: "詳しい情報",
        // },
        // {
        //   title: "都道府県マッチング",
        //   description:
        //     "日本の都道府県を学ぶための、楽しいマッチングゲームです。",
        //   image: prefecture,
        //   link: "https://prefecture-match.herokuapp.com",
        //   linkText: "ウェブサイト",
        //   github: "https://github.com/zachinjapan/prefecture-match",
        //   tech: "技術",
        //   tags: ["React", "CSS", "JavaScript", "Heroku"],
        //   tech_description: " useEffectとuseStateを使用しています",
        //   callToAction: "詳しい情報",
        // },
        // {
        //   title: "_C32Fのコメディショー",
        //   description: "_C32Fくんのコメディショーです。",
        //   image: comedyshow,
        //   link: "https://zachinjapan.github.io/comedy_show/",
        //   linkText: "ウェブサイト",
        //   github: "https://github.com/zachinjapan/comedy_show",
        //   tech: "技術",
        //   tags: ["HTML", "SASS", "JavaScript", "API", "Github Pages"],
        //   tech_description:
        //     "ジョークアプリです。ユーザーがボタンを押すことで、トピックを変更し、背景音楽を再生し、ロボットの名前を変更することができます。",
        //   callToAction: "詳しい情報",
        // },
      ],
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);

  return (
    <>
      <div className="Projects" id="Projects">
        <Fade>
          <h1>{content.mainTitle}</h1>
        </Fade>
        <IconContext.Provider
          value={{
            className: "global-class-name sill-img",
            size: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              padding: "10px",
              flexWrap: "wrap",
              backgroundColor: "#f5f5f5",
            }}
            className="project-icons"
          >
            {skills.map((skill) => (
              <div
                key={skill[1]}
                style={{
                  color: filter === skill[1] ? "#E62776" : "green",
                  margin: "10px",
                  padding: "10px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setFilter(skill[1]);
                }}
              >
                <div
                  className="skill-icon-text"
                  style={{
                    color: filter === skill[1] ? "#E62776" : "green",
                  }}
                >
                  {skill[1]}
                </div>
                <div
                  className="skill-icon-img"
                  style={{
                    color: filter === skill[1] ? "#E62776" : "green",
                  }}
                >
                  {skill[0]}
                </div>
              </div>
            ))}
          </div>
        </IconContext.Provider>
        <div className="projects-container">
          {content.projects.map((project, index) =>
            filter === "All Projects" || project.tags.includes(filter) ? (
              <MUIProjectCard
                cardWidth="405px"
                title={content.projects[index].title}
                description={content.projects[index].description}
                image={content.projects[index].image}
                link={content.projects[index].link}
                linkText={content.projects[index].linkText}
                github={content.projects[index].github}
                tags={content.projects[index].tags}
                tech={content.projects[index].tech}
                tech_description={content.projects[index].tech_description}
                callToAction={content.projects[index].callToAction}
              />
            ) : null
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
