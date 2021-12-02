import "./Work.css";
import ProjectCard from "../Projects/ProjectCard/ProjectCard";

const Work = (props) => {
  let content = {
    English: {
      projects: [
        {
          title: "Project 1",
          description: "project 1 description",
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
    Japanese: {
      projects: [
        {
          title: "Project 1",
          description: "project 1 description",
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
    <div className="Work">
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
        <ProjectCard
          title={content.projects[1].title}
          description={content.projects[1].description}
          image={content.projects[1].image}
          link={content.projects[1].link}
          github={content.projects[1].github}
          tags={content.projects[1].tags}
        />
        <ProjectCard
          title={content.projects[2].title}
          description={content.projects[2].description}
          image={content.projects[2].image}
          link={content.projects[2].link}
          github={content.projects[2].github}
          tags={content.projects[2].tags}
        />
        <ProjectCard
          title={content.projects[3].title}
          description={content.projects[3].description}
          image={content.projects[3].image}
          link={content.projects[3].link}
          github={content.projects[3].github}
          tags={content.projects[3].tags}
        />
      </div>
    </div>
  );
};

export default Work;
