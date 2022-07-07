import "./Projects.css";
import quote from "../../images/projects/quote.webp";
import blog from "../../images/projects/blog.webp";
import prefecture from "../../images/projects/prefecture.webp";
import anime from "../../images/projects/anime.webp";
import haku from "../../images/projects/haku.webp";
import MUIProjectCard from "../UI/ProjectCard/MUIProjectCard";
import { AnimationOnScroll } from "react-animation-on-scroll";

import niceRiff from "../../images/projects/niceRiff.jpeg";
const Projects = (props) => {
  let content = {
    English: {
      mainTitle: "Featured Projects",

      projects: [
        {
          title: "My Anime Collection",
          description: "Find and keep track of your favorite anime.",
          image: anime,
          link: "https://www.my-anime-collection.com/landing",
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
          youtube: "https://youtu.be/L_BcbOyHGzs",
          english: true,
          japanese: true,
        },
        {
          title: "Riffs!",
          description:
            "Share your musical ideas, songs, and covers with the world.",
          image: niceRiff,
          link: "https://riffs.netlify.app/",
          linkText: "Live Demo",
          github: "https://github.com/zachinjapan/vue-music-app",
          tech: "Tech",
          tags: ["Vue", "CSS", "Firebase", "Authentication", "Netlify"],
          english: true,
          japanese: true,
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
          youtube: "https://youtu.be/I96IPEaj4qA",
          english: true,
          japanese: false,
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
          youtube: "https://www.youtube.com/watch?v=q1rVbqMw0ug",
          english: true,
          japanese: false,
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
          tags: ["CSS", "React", "API", "Netlify", "TypeScript", "Netlify"],
          english: true,
          japanese: false,
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
          english: false,
          japanese: true,
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
          link: "https://www.my-anime-collection.com/landing",
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
          youtube: "https://youtu.be/L_BcbOyHGzs",
          english: true,
          japanese: true,
        },
        {
          title: "リフス",
          description:
            "音楽のアイデアや作成した曲やカバーをアップしてみんなに聞かせましょう。",
          image: niceRiff,
          link: "https://riffs.netlify.app/",
          linkText: "ウェブサイト",
          github: "https://github.com/zachinjapan/vue-music-app",
          tech: "技術",
          tags: ["Vue", "CSS", "Firebase", "Authentication", "Netlify"],
          english: true,
          japanese: true,
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
          youtube: "https://youtu.be/I96IPEaj4qA",
          english: true,
          japanese: false,
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
          youtube: "https://www.youtube.com/watch?v=q1rVbqMw0ug",
          english: true,
          japanese: false,
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
          english: true,
          japanese: false,
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
          english: false,
          japanese: true,
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
        <h1>{content.mainTitle}</h1>

        <div className="projects-container">
          {content.projects.map((project, index) => (
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              animateOut="animate__fadeOut"
              animateOnce={true}
            >
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
                youtube={project.youtube}
                english={project.english}
                japanese={project.japanese}
              />
            </AnimationOnScroll>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
