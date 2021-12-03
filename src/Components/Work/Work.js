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
          title: "Project 1",
          description:
            "A website for a professional rock band located in New Jersey,America.",
          image: "https://via.placeholder.com/300x200",
          link: "https://www.google.com",
          github: "https://www.google.com",
          tags: ["tag1", "tag2", "tag3"],
        },
        {
          title: "Project 2",
          description: "project 2 description",
          image: "https://via.placeholder.com/300x200",
          link: "https://www.google.com",
          github: "https://www.google.com",
          tags: ["tag1", "tag2", "tag3"],
        },
        {
          title: "Project 3",
          description: "project 3 description",
          image: "https://via.placeholder.com/300x200",
          link: "https://www.google.com",
          github: "https://www.google.com",
          tags: ["tag1", "tag2", "tag3"],
        },
        {
          title: "Project 4",
          description: "project 4 description",
          image: "https://via.placeholder.com/300x200",
          link: "https://www.google.com",
          github: "https://www.google.com",
          tags: ["tag1", "tag2", "tag3"],
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
