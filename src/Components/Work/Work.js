import "./Work.css";
import ProjectCard from "../Projects/ProjectCard/ProjectCard";
import castles from "../../images/work/castles.png";

const Work = (props) => {
  let content = {
    English: {
      projects: [
        {
          title: "Castles In The Sky",
          description:
            "A website for a professional rock band located in New Jersey,America.",
          image: castles,
          link: "https://castlesinthesky.netlify.app",
          github: "",
          tags: ["Javascript", "Sass", "Bootstrap", "Netlify"],
        },
      ],
    },

    Japanese: {
      projects: [
        {
          title: "Castles In The Sky",
          description:
            "A website for a professional rock band located in New Jersey,America.",
          image: castles,
          link: "https://castlesinthesky.netlify.app",
          github: "",
          tags: ["Javascript", "Sass", "Bootstrap", "Netlify"],
        },
      ],
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);

  return (
    <div className="Work" id="Work">
      <h1>Work</h1>
      <div className="work-container">
        <ProjectCard
          title={content.projects[0].title}
          description={content.projects[0].description}
          image={content.projects[0].image}
          link={content.projects[0].link}
          github={content.projects[0].github}
          tags={content.projects[0].tags}
        />
      </div>
    </div>
  );
};

export default Work;
