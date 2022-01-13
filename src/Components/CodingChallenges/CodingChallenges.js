import "../Projects/Projects.css";
import Fib from "../../images/coding/Fib.webp";
import MUIProjectCard from "../Projects/ProjectCard/MUIProjectCard";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const CodingChallenges = (props) => {
  let content = {
    English: {
      mainTitle: "Coding Challenges",
      subTitle: "Some of my coding challenges",

      projects: [
        {
          title: "Fib Buzz",
          description:
            "'Fib Buzz'!!  A union of the infamous 'Fizz Buzz' coding question and the  'Fibonacci Sequence'",
          image: Fib,
          link: "https://fib-buzz.netlify.app/",
          linkText: "Live Demo",
          github: "https://github.com/zachinjapan/fib_buzz",
          tech: "Tech",
          tags: ["React", "JavaScript", "MaterialUI"],
          tech_description:
            "Please check the project page for more information on the code and technologies used.",
          callToAction: "More Info",
        },
      ],
    },
    Japanese: {
      mainTitle: "コーディングチャレンジ",
      subTitle: "いくつかのコーディングチャレンジ",
      projects: [
        {
          title: "Fib Buzz",
          description:
            "'Fib Buzz'!!  'Fizz Buzz'と'Fibonacci Sequence'の両方のコーディングチャレンジです。",
          image: Fib,
          link: "https://fib-buzz.netlify.app/",
          linkText: "ウェブサイト",
          github: "https://github.com/zachinjapan/fib_buzz",
          tech: "技術",
          tags: ["React", "JavaScript", "MaterialUI"],
          tech_description: "ウェブサイトで詳細の情報を読んでください。",
          callToAction: "詳しい情報",
        },
      ],
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);

  return (
    <div className="CodingChallenges Projects" id="CodingChallenges">
      <Fade>
        <h1>{content.mainTitle}</h1>
      </Fade>

      <Fade>
        <div className="projects-container">
          <MUIProjectCard
            cardWidth="50%"
            className="code-challenge"
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
        </div>
      </Fade>
      <div id="Projects" />
    </div>
  );
};

export default CodingChallenges;
