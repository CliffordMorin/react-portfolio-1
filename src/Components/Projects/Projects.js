import "./Projects.css";
import quote from "../../images/projects/quote.webp";
import blog from "../../images/projects/blog.jpg";
import prefecture from "../../images/projects/prefecture.webp";
import anime from "../../images/projects/anime.png";
import haku from "../../images/projects/haku.png";
import MUIProjectCard from "../UI/ProjectCard/MUIProjectCard";
import Fade from "react-reveal/Fade";
import Fib from "../../images/coding/Fib.jpg";
const Projects = (props) => {
  let content = {
    English: {
      mainTitle: "Featured Projects",

      projects: [
        {
          title: "My Anime Collection",
          description: "Find and keep track of your favorite anime.",
          image: anime,
          link: "https://my-anime-collection.herokuapp.com/landing",
          linkText: "Live Demo",
          github: "https://github.com/zachinjapan/my-anime-collection",
          tech: "Tech",
          tags: [
            "React",
            "CSS",
            "Node",
            "API",
            "Authentication",
            "MongoDB",
            "Heroku",
          ],
        },
        {
          title: "Zach In Japan",
          description:
            "Read about coding concepts, Japan, and all things related to being a web developer.",
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
        },
        {
          title: `HAKU`,
          description: "Track and compare jobs during the interview process.",
          image: haku,
          link: "https://hakujobs.com",
          linkText: "Live Demo",
          github: "https://github.com/zachinjapan/haku",
          tech: "Tech",
          tags: [
            "React",
            "CSS",
            "Node",
            "API",
            "Authentication",
            "MongoDB",
            "Heroku",
          ],
        },
        {
          title: "F_I_B Buzz",
          description:
            "Calculate 'Fizz Buzz' using the 'Fibonacci Sequence' up to 2000 iterations.",
          image: Fib,
          link: "https://fib-buzz.netlify.app/",
          linkText: "Live Demo",
          github: "https://github.com/zachinjapan/fib_buzz",
          tech: "Tech",
          tags: ["React", "CSS", "JavaScript", "Material UI", "Netlify"],
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
          tags: ["CSS", "React", "API", "Netlify", "Typescript", "Netlify"],
        },

        {
          title: "Prefecture Match",
          description:
            "Learn the Japanese prefectures using this fun matching game",
          image: prefecture,
          link: "https://prefecture-match.herokuapp.com",
          linkText: "Live Demo",
          github: "https://github.com/zachinjapan/prefecture-match",
          tech: "Tech",
          tags: ["React", "CSS", "JavaScript", "Heroku"],
        },
      ],
    },
    Japanese: {
      mainTitle: "プロジェクト",
      projects: [
        {
          title: "マイ・アニメ・コレクション",
          description: "アニメの詳細を簡単に検索できるアプリケーションです。",
          image: anime,
          link: "https://my-anime-collection.herokuapp.com/landing",
          linkText: "ウェブサイト",
          github: "https://github.com/zachinjapan/my-anime-collection",
          tech: "技術",
          tags: [
            "React",
            "CSS",
            "Node",
            "API",
            "Authentication",
            "MongoDB",
            "Heroku",
          ],
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
        },
        {
          title: `HAKU （ハク）`,
          description:
            "ハクは面接の過程でエントリした会社を追跡して比較できるアプリケーションです。",
          image: haku,
          link: "https://hakujobs.com",
          linkText: "ウェブサイト",
          github: "github.com/zachinjapan/haku",
          tech: "技術",
          tags: [
            "React",
            "CSS",
            "Node",
            "API",
            "Authentication",
            "MongoDB",
            "Heroku",
          ],
        },
        {
          title: "F_I_B Buzz",
          description:
            "'Fib Buzz'!!  'Fizz Buzz'と'フィボナッチ数列'の両方のコーディングチャレンジです。",
          image: Fib,
          link: "https://fib-buzz.netlify.app/",
          linkText: "ウェブサイト",
          github: "https://github.com/zachinjapan/fib_buzz",
          tech: "技術",
          tags: ["React", "CSS", "JavaScript", "Material UI", "Netlify"],
        },

        {
          title: "名言クイズ",
          description: "この名言を残した偉人の名前を選択してください。",
          image: quote,
          link: "https://quotequiz.netlify.app",
          linkText: "ウェブサイト",
          github: "https://github.com/zachinjapan/quotes",
          tech: "技術",
          tags: ["CSS", "React", "API", "Typescript", "Netlify"],
        },
        {
          title: "都道府県マッチング",
          description:
            "日本の都道府県を学ぶための、楽しいマッチングゲームです。",
          image: prefecture,
          link: "https://prefecture-match.herokuapp.com",
          linkText: "ウェブサイト",
          github: "https://github.com/zachinjapan/prefecture-match",
          tech: "技術",
          tags: ["React", "CSS", "JavaScript", "Heroku"],
        },
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

        <div className="projects-container">
          {content.projects.map((project, index) => (
            <Fade>
              <MUIProjectCard
                cardWidth="405px"
                index={index + 1}
                title={project.title}
                description={project.description}
                tech_description={project.tech_description}
                image={project.image}
                link={project.link}
                linkText={project.linkText}
                github={project.github}
                tags={project.tags}
                tech={project.tech}
                callToAction={project.callToAction}
              />
            </Fade>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
