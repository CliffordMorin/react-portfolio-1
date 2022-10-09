import "./Projects.css";
import quote from "../../images/projects/quote.webp";
import blog from "../../images/projects/blog.webp";
import prefecture from "../../images/projects/prefecture.webp";
import anime from "../../images/projects/anime.webp";
import haku from "../../images/projects/haku.webp";
// import MUIProjectCard from "../UI/ProjectCard/MUIProjectCard";
import { AnimationOnScroll } from "react-animation-on-scroll";
import RunningImg from "../UI/RunningImg";
import niceRiff from "../../images/projects/niceRiff.jpeg";
import Naruto from "../../images/UI/narutoRun.gif";
import ProjectModal from "../UI/ProjectModal/ProjectModal";
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
          youtube: "https://www.youtube.com/embed/D_lXDfCJf6k",
          english: true,
          japanese: true,
        },
        {
          title: "Riffs!",
          description:
            "A place to share your new songs, covers, and musical ideas with the world",
          image: niceRiff,
          link: "https://riffs.netlify.app/",
          linkText: "Live Demo",
          github: "https://github.com/zachinjapan/vue-music-app",
          tech: "Tech",
          tags: ["Vue", "CSS", "Firebase", "Authentication", "Netlify"],
          youtube: "https://www.youtube.com/embed/gBIhz-0Jkg8",
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
            "Gatsby",
            "React",
            "CSS",
            "Markdown",
          
            "GraphQL",
            "Gatsby Cloud",
          ],
          youtube: "https://www.youtube.com/embed/lt48zTXl6j0",
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
          youtube: "https://www.youtube.com/embed/q1rVbqMw0ug",
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
          tags: ["React","CSS",  "API", "TypeScript", "Netlify"],
          english: true,
          japanese: false,
        },

        {
          title: "Prefecture Match",
          description:
            "Learn the Japanese prefectures using this fun matching game",
          image: prefecture,
          link: "https://prefecture-match-lpnr.vercel.app/",
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
          youtube: "https://www.youtube.com/embed/D_lXDfCJf6k",
          english: true,
          japanese: true,
        },
        {
          title: "リッフス",
          description:
            "新曲、カバー、音楽のアイデアを世界と共有するためのサイトです。",
          image: niceRiff,
          link: "https://riffs.netlify.app/",
          linkText: "ウェブサイト",
          github: "https://github.com/zachinjapan/vue-music-app",
          tech: "技術",
          tags: ["Vue", "CSS", "Firebase", "Authentication", "Netlify"],
          youtube: "https://www.youtube.com/embed/gBIhz-0Jkg8",
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
            "Gatsby",
            "React",
            "CSS",
            "Markdown",
           
            "GraphQL",
            "Gatsby Cloud",
          ],
          youtube: "https://www.youtube.com/embed/I96IPEaj4qA",
          english: true,
          japanese: false,
        },
        {
          title: `ハク`,
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
          youtube: "https://www.youtube.com/embed/q1rVbqMw0ug",
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
          tags: [ "React","CSS", "API", "Typescript", "Netlify"],
          english: true,
          japanese: false,
        },
        {
          title: "都道府県マッチング",
          description:
            "日本の都道府県を学ぶための、楽しいマッチングゲームです。",
          image: prefecture,
          link: "https://prefecture-match-lpnr.vercel.app/",
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
        <RunningImg src={Naruto} />
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
          animateOnce={true}
          
        >
         
        </AnimationOnScroll>

        <div className="projects-container">
          
          {content.projects.map((project, index) => (
       
              <ProjectModal
                project={project}
                />
            
          ))}
        </div>
      </div>
    </>
            
         
  );
};

export default Projects;
