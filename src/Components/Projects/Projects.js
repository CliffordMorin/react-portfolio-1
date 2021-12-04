import "./Projects.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import quote from "../../images/projects/quote.png";
import blog from "../../images/projects/blog.png";
import weather from "../../images/projects/weather.png";
import nokatakana from "../../images/projects/nokatakana.png";
import comedyshow from "../../images/projects/comedyshow.png";
import castles from "../../images/work/castles.png";

const Projects = (props) => {
  let content = {
    English: {
      mainTitle: "Projects",
      projects: [
        {
          title: "Quote Quiz",
          description:
            "A React app using a famous quotes api and React Redux to create an interactive game for the user.",
          image: quote,
          link: "https://quotequiz.netlify.app",
          linkText: "Live Demo",
          github: "https://github.com/zachinjapan/quotes",
          tags: ["React", "Redux", "API", "Netlify"],
        },
        {
          title: "Do I Need A Jacket?",
          description:
            "An application to view the current live weather based on zipcode and determines If the user needs to wear a jacket based on data by the Washington Post.",
          image: weather,
          link: "https://doineedajackettoday.herokuapp.com",
          linkText: "Live Demo",
          github: "https://github.com/zachinjapan/do_i_need_a_jacket",
          tags: ["API", "Node/Express", "Heroku"],
        },
        {
          title: "No Katakana Game",
          description:
            "A game where the goal is to explain the word without using any foreign loan words.",
          image: nokatakana,
          link: "https://github.com/zachinjapan/no-katakana-game",
          linkText: "Live Demo",
          github: "https://zachinjapan.github.io/no-katakana-game/",
          tags: ["React", "JavaScript", "Github Pages"],
        },
        {
          title: "Castles In The Sky",
          description:
            "A website for a professional rock band located in New Jersey,America.",
          image: castles,
          link: "https://castlesinthesky.netlify.app",
          linkText: "Live Demo",
          github: "",
          tags: ["Javascript", "Sass", "Bootstrap", "Netlify"],
        },
        {
          title: "My Blog",
          description:
            "A personal blog where I write about my life and projects.",
          image: blog,
          link: "https://zstoneblog.gatsbyjs.io",
          linkText: "Live Demo",
          github: "https://github.com/zachinjapan/my-gatsby-blog",
          tags: ["React", "Markdown", "Gatsby", "Gatsby Cloud"],
        },
        {
          title: "_C32F's Comedy Show",
          description:
            "A joke app using two apis. The user is able to interact with the page by changing the topics, playing background music, and changing the robot's name.",
          image: comedyshow,
          link: "https://zachinjapan.github.io/comedy_show/",
          linkText: "Live Demo",
          github: "https://github.com/zachinjapan/comedy_show",
          tags: ["Sass", "JavaScript", "API", "Github Pages"],
        },
      ],
    },
    Japanese: {
      mainTitle: "プロジェクト",
      projects: [
        {
          title: "引用クイズ",
          description:
            "Reactアプリケーションで、名家の引用を使用し、React Reduxを使用してインタラクティブなゲームを作成します。",
          image: quote,
          link: "https://quotequiz.netlify.app",
          linkText: "ウェブサイト",
          github: "https://github.com/zachinjapan/quotes",
          tags: ["React", "Redux", "API", "Netlify"],
        },
        {
          title: "ジャケットが必要ですか？",
          description:
            "郵便番号を使用して、現在の天気を表示し、ユーザーさんがジャケットを必要とするかどうかを判断します。",
          image: weather,
          link: "https://doineedajackettoday.herokuapp.com",
          linkText: "ウエブサイト",
          github: "https://github.com/zachinjapan/do_i_need_a_jacket",
          tags: ["API", "Node/Express", "Heroku"],
        },
        {
          title: "ノカタカナゲーム",
          description: "外来語を使用せずに、言葉を接目するのゲーム。",
          image: nokatakana,
          link: "https://github.com/zachinjapan/no-katakana-game",
          linkText: "ウェブサイト",
          github: "https://zachinjapan.github.io/no-katakana-game/",
          tags: ["React", "JavaScript", "Github Pages"],
        },
        {
          title: "カーサルズ・イン・ザー・スカイ",
          description: "アメリカのバンドのウェブサイトです。",
          image: castles,
          link: "https://castlesinthesky.netlify.app",
          linkText: "ウェブサイト",
          github: "",
          tags: ["Javascript", "Sass", "Bootstrap", "Netlify"],
        },
        {
          title: "マイブログ",
          description: "私の日常生活やプロジェクトについてブログです。",
          image: blog,
          link: "https://zstoneblog.gatsbyjs.io",
          linkText: "ウェブサイト",
          github: "https://github.com/zachinjapan/my-gatsby-blog",
          tags: ["React", "Markdown", "Gatsby", "Gatsby Cloud"],
        },
        {
          title: "_C32Fのコメディショー",
          description:
            "2つのAPIを使用して、ユーザーがページを変更することで、トピックを変更し、背景音楽を再生し、ロボットの名前を変更することができます。",
          image: comedyshow,
          link: "https://zachinjapan.github.io/comedy_show/",
          linkText: "ウェブサイト",
          github: "https://github.com/zachinjapan/comedy_show",
          tags: ["Sass", "JavaScript", "API", "Github Pages"],
        },
      ],
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);

  return (
    <div className="Projects" id="Projects">
      <h1>{content.mainTitle}</h1>
      <div className="projects-container">
        <ProjectCard
          title={content.projects[0].title}
          description={content.projects[0].description}
          image={content.projects[0].image}
          link={content.projects[0].link}
          linkText={content.projects[0].linkText}
          github={content.projects[0].github}
          tags={content.projects[0].tags}
        />
        <ProjectCard
          title={content.projects[1].title}
          description={content.projects[1].description}
          image={content.projects[1].image}
          link={content.projects[1].link}
          linkText={content.projects[1].linkText}
          github={content.projects[1].github}
          tags={content.projects[1].tags}
        />
        <ProjectCard
          title={content.projects[2].title}
          description={content.projects[2].description}
          image={content.projects[2].image}
          link={content.projects[2].link}
          linkText={content.projects[2].linkText}
          github={content.projects[2].github}
          tags={content.projects[2].tags}
        />
        <ProjectCard
          title={content.projects[3].title}
          description={content.projects[3].description}
          image={content.projects[3].image}
          link={content.projects[3].link}
          linkText={content.projects[3].linkText}
          github={content.projects[3].github}
          tags={content.projects[3].tags}
        />
        <ProjectCard
          title={content.projects[4].title}
          description={content.projects[4].description}
          image={content.projects[4].image}
          link={content.projects[4].link}
          linkText={content.projects[4].linkText}
          github={content.projects[4].github}
          tags={content.projects[4].tags}
        />
        <ProjectCard
          title={content.projects[5].title}
          description={content.projects[5].description}
          image={content.projects[5].image}
          link={content.projects[5].link}
          linkText={content.projects[5].linkText}
          github={content.projects[5].github}
          tags={content.projects[5].tags}
        />
      </div>
    </div>
  );
};

export default Projects;
