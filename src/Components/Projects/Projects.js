import "./Projects.css";
import quote from "../../images/projects/quote.png";
import blog from "../../images/projects/blog.png";
import weather from "../../images/projects/weather.png";
import nokatakana from "../../images/projects/nokatakana.png";
import comedyshow from "../../images/projects/comedyshow.png";
import castles from "../../images/work/castles.png";
import MUIProjectCard from "./ProjectCard/MUIProjectCard";

const Projects = (props) => {
  let content = {
    English: {
      mainTitle: "Projects",
      projects: [
        {
          title: "Quote Quiz",
          description:
            "Quiz your knowledge of famous quotes and share your favorite quotes on twitter.",
          image: quote,
          link: "https://quotequiz.netlify.app",
          linkText: "Live Demo",
          github: "https://github.com/zachinjapan/quotes",
          tech: "Tech",
          tags: ["React", "Redux", "API", "Netlify"],
          tech_description:
            "My first project using redux and my only group project.  My friend Clifford Morin coded the styling and I did the functionality.  A joke api pulls the quotes which are then .map()'ed to buttons. The buttons themselves check if the user was correct and redux is used to tell when the round is over.",
          callToAction: "More Info",
        },
        {
          title: "Do I Need A Jacket?",
          description:
            "An application to view the current live weather based on zipcode and determines If the user needs to wear a jacket",
          image: weather,
          link: "https://doineedajackettoday.herokuapp.com",
          linkText: "Live Demo",
          github: "https://github.com/zachinjapan/do_i_need_a_jacket",
          tech: "Tech",
          tags: ["API", "Node/Express", "Heroku"],
          tech_description:
            "This is where I will explain the tech stack and other more technical details.",
          callToAction: "More Info",
        },
        {
          title: "No Katakana Game",
          description:
            "A game where the goal is to explain the word without using any foreign loan words.",
          image: nokatakana,
          link: "https://zachinjapan.github.io/no-katakana-game/",
          linkText: "Live Demo",
          github: "https://github.com/zachinjapan/nokatakana",
          tech: "Tech",
          tags: ["React", "Typescript", "Github Pages"],
          tech_description:
            "This is where I will explain the tech stack and other more technical details.",
          callToAction: "More Info",
        },
        {
          title: "Castles In The Sky",
          description:
            "A website for a professional rock band located in New Jersey,America.",
          image: castles,
          link: "https://castlesinthesky.netlify.app",
          linkText: "Live Demo",
          github: "",
          tech: "Tech",
          tags: ["Javascript", "Sass", "Bootstrap", "Netlify"],
          tech_description:
            "This is where I will explain the tech stack and other more technical details.",
          callToAction: "More Info",
        },
        {
          title: "My Blog",
          description:
            "A personal blog where I write about my life and projects.",
          image: blog,
          link: "https://zstoneblog.gatsbyjs.io",
          linkText: "Live Demo",
          github: "https://github.com/zachinjapan/my-gatsby-blog",
          tech: "Tech",
          tags: ["React", "Markdown", "Gatsby", "Gatsby Cloud"],
          tech_description:
            "This is where I will explain the tech stack and other more technical details.",
          callToAction: "More Info",
        },
        {
          title: "_C32F's Comedy Show",
          description:
            "A joke app. The user is able to interact with the page by changing the topics, playing background music, and changing the robot's name.",
          image: comedyshow,
          link: "https://zachinjapan.github.io/comedy_show/",
          linkText: "Live Demo",
          github: "https://github.com/zachinjapan/comedy_show",
          tech: "Tech",
          tags: ["Sass", "JavaScript", "API", "Github Pages"],
          tech_description:
            "This is where I will explain the tech stack and other more technical details.",
          callToAction: "More Info",
        },
      ],
    },
    Japanese: {
      mainTitle: "プロジェクト",
      projects: [
        {
          title: "引用クイズ",
          description:
            "名家の引用を使用し、インタラクティブなゲームをやってみてください。",
          image: quote,
          link: "https://quotequiz.netlify.app",
          linkText: "ウェブサイト",
          github: "https://github.com/zachinjapan/quotes",
          tech: "技術",
          tags: ["React", "Redux", "API", "Netlify"],
          tech_description:
            "reduxを使うのは初めてでした。 ポートフォリオでの私の唯一のグループプロジェクトです。 友人のクリフォード・モーリンさんが外観をコーディングし、私が機能を実行しました。 ジョークAPIは引用符をゲットして、引用符はボタンに.map（）されます。 ボタンがユーザーが正しいかどうかをチェックし、reduxを使用してラウンドが終了したことを通知します。",
          callToAction: "詳しい情報",
        },
        {
          title: "ジャケットが必要ですか？",
          description:
            "郵便番号を使用して、現在の天気を表示し、ユーザーさんがジャケットを必要とするかどうかを判断します。",
          image: weather,
          link: "https://doineedajackettoday.herokuapp.com",
          linkText: "ウエブサイト",
          github: "https://github.com/zachinjapan/do_i_need_a_jacket",
          tech: "技術",
          tags: ["API", "Node/Express", "Heroku"],
          tech_description: "ここでは技術スタックとその他の詳細を説明します。",
          callToAction: "詳しい情報",
        },
        {
          title: "ノカタカナゲーム",
          description: "外来語を使用せずに、言葉を接目するのゲーム。",
          image: nokatakana,
          link: "https://zachinjapan.github.io/no-katakana-game/",
          linkText: "ウェブサイト",
          github: "https://github.com/zachinjapan/no-katakana-game",
          tech: "技術",
          tags: ["React", "Typescript", "Github Pages"],
          tech_description: "ここでは技術スタックとその他の詳細を説明します。",
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
          tags: ["Javascript", "Sass", "Bootstrap", "Netlify"],
          tech_description: "ここでは技術スタックとその他の詳細を説明します。",
          callToAction: "詳しい情報",
        },
        {
          title: "マイブログ",
          description: "私の日常生活やプロジェクトについてブログです。",
          image: blog,
          link: "https://zstoneblog.gatsbyjs.io",
          linkText: "ウェブサイト",
          github: "https://github.com/zachinjapan/my-gatsby-blog",
          tech: "技術",
          tags: ["React", "Markdown", "Gatsby", "Gatsby Cloud"],
          tech_description: "ここでは技術スタックとその他の詳細を説明します。",
          callToAction: "詳しい情報",
        },
        {
          title: "_C32Fのコメディショー",
          description:
            "ジョックアプリです。ユーザーがページを変更することで、トピックを変更し、背景音楽を再生し、ロボットの名前を変更することができます。",
          image: comedyshow,
          link: "https://zachinjapan.github.io/comedy_show/",
          linkText: "ウェブサイト",
          github: "https://github.com/zachinjapan/comedy_show",
          tech: "技術",
          tags: ["Sass", "JavaScript", "API", "Github Pages"],
          tech_description: "ここでは技術スタックとその他の詳細を説明します。",
          callToAction: "詳しい情報",
        },
      ],
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);

  return (
    <div className="Projects">
      <h1>{content.mainTitle}</h1>
      <div className="projects-container">
        <MUIProjectCard
          title={content.projects[0].title}
          description={content.projects[0].description}
          image={content.projects[0].image}
          link={content.projects[0].link}
          linkText={content.projects[0].linkText}
          github={content.projects[0].github}
          tags={content.projects[0].tags}
          tech={content.projects[0].tech}
          tech_description={content.projects[0].tech_description}
          callToAction={content.projects[0].callToAction}
        />
        <MUIProjectCard
          title={content.projects[1].title}
          description={content.projects[1].description}
          image={content.projects[1].image}
          link={content.projects[1].link}
          linkText={content.projects[1].linkText}
          github={content.projects[1].github}
          tags={content.projects[1].tags}
          tech={content.projects[1].tech}
          tech_description={content.projects[1].tech_description}
          callToAction={content.projects[1].callToAction}
        />
        <MUIProjectCard
          title={content.projects[2].title}
          description={content.projects[2].description}
          image={content.projects[2].image}
          link={content.projects[2].link}
          linkText={content.projects[2].linkText}
          github={content.projects[2].github}
          tags={content.projects[2].tags}
          tech={content.projects[2].tech}
          tech_description={content.projects[2].tech_description}
          callToAction={content.projects[2].callToAction}
        />
        <MUIProjectCard
          title={content.projects[3].title}
          description={content.projects[3].description}
          image={content.projects[3].image}
          link={content.projects[3].link}
          linkText={content.projects[3].linkText}
          github={content.projects[3].github}
          tags={content.projects[3].tags}
          tech={content.projects[3].tech}
          tech_description={content.projects[3].tech_description}
          callToAction={content.projects[3].callToAction}
        />
        <MUIProjectCard
          title={content.projects[4].title}
          description={content.projects[4].description}
          image={content.projects[4].image}
          link={content.projects[4].link}
          linkText={content.projects[4].linkText}
          github={content.projects[4].github}
          tags={content.projects[4].tags}
          tech={content.projects[4].tech}
          tech_description={content.projects[4].tech_description}
          callToAction={content.projects[4].callToAction}
        />
        <MUIProjectCard
          title={content.projects[5].title}
          description={content.projects[5].description}
          image={content.projects[5].image}
          link={content.projects[5].link}
          linkText={content.projects[5].linkText}
          github={content.projects[5].github}
          tags={content.projects[5].tags}
          tech={content.projects[5].tech}
          tech_description={content.projects[5].tech_description}
          callToAction={content.projects[5].callToAction}
        />
      </div>
    </div>
  );
};

export default Projects;
