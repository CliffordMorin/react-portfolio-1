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
      projects: [
        {
          title: "Quote Quiz",
          description:
            "A React app using a famous quotes api and React Redux to create an interactive game for the user.",
          image: quote,
          link: "https://quotequiz.netlify.app",
          github: "https://github.com/zachinjapan/quotes",
          tags: ["React", "Redux", "API", "Netlify"],
        },
        {
          title: "Do I Need A Jacket?",
          description:
            "An application to view the current live weather based on zipcode and determines If the user needs to wear a jacket based on data by the Washington Post.",
          image: weather,
          link: "https://doineedajackettoday.herokuapp.com",
          github: "https://github.com/zachinjapan/do_i_need_a_jacket",
          tags: ["API", "Node/Express", "Heroku"],
        },
        {
          title: "No Katakana Game",
          description:
            "A game where the goal is to explain the word without using any foreign loan words.",
          image: nokatakana,
          link: "https://github.com/zachinjapan/no-katakana-game",
          github: "https://zachinjapan.github.io/no-katakana-game/",
          tags: ["React", "JavaScript", "Github Pages"],
        },
        {
          title: "Castles In The Sky",
          description:
            "A website for a professional rock band located in New Jersey,America.",
          image: castles,
          link: "https://castlesinthesky.netlify.app",
          github: "",
          tags: ["Javascript", "Sass", "Bootstrap", "Netlify"],
        },
        {
          title: "My Blog",
          description:
            "A personal blog where I write about my life and projects.",
          image: blog,
          link: "https://zstoneblog.gatsbyjs.io",
          github: "https://github.com/zachinjapan/my-gatsby-blog",
          tags: ["React", "Markdown", "Gatsby", "Gatsby Cloud"],
        },
        {
          title: "_C32F's Comedy Show",
          description:
            "This is a static webpage using 2 APIs. The first is a joke api which fetches the joke text. The second text-to-speech API plays that joke text. The user is able to interact with the page by chaning the topics, playing background music, and changing the name of the robot.",
          image: comedyshow,
          link: "https://zachinjapan.github.io/comedy_show/",
          github: "https://github.com/zachinjapan/comedy_show",
          tags: ["Sass", "JavaScript", "API", "Github Pages"],
        },
      ],
    },
    Japanese: {
      projects: [
        {
          title: "Quote Quiz",
          description:
            "A React app using a famous quotes api and React Redux to create an interactive game for the user.",
          image: quote,
          link: "https://quotequiz.netlify.app",
          github: "https://github.com/zachinjapan/quotes",
          tags: ["React", "Redux", "API", "Netlify"],
        },
        {
          title: "Do I Need A Jacket?",
          description:
            "An application to view the current live weather based on zipcode and determines If the user needs to wear a jacket based on data by the Washington Post.",
          image: weather,
          link: "https://doineedajackettoday.herokuapp.com",
          github: "https://github.com/zachinjapan/do_i_need_a_jacket",
          tags: ["API", "Node/Express", "Heroku"],
        },
        {
          title: "No Katakana Game",
          description:
            "A game where the goal is to explain the word without using any foreign loan words.",
          image: nokatakana,
          link: "https://github.com/zachinjapan/no-katakana-game",
          github: "https://zachinjapan.github.io/no-katakana-game/",
          tags: ["React", "JavaScript", "Github Pages"],
        },
        {
          title: "Castles In The Sky",
          description:
            "A website for a professional rock band located in New Jersey,America.",
          image: castles,
          link: "https://castlesinthesky.netlify.app",
          github: "",
          tags: ["Javascript", "Sass", "Bootstrap", "Netlify"],
        },
        {
          title: "My Blog",
          description:
            "A personal blog where I write about my life and projects.",
          image: blog,
          link: "https://zstoneblog.gatsbyjs.io",
          github: "https://github.com/zachinjapan/my-gatsby-blog",
          tags: ["React", "Markdown", "Gatsby", "Gatsby Cloud"],
        },
        {
          title: "_C32F's Comedy Show",
          description:
            "This is a static webpage using 2 APIs. The first is a joke api which fetches the joke text. The second text-to-speech API plays that joke text. The user is able to interact with the page by chaning the topics, playing background music, and changing the name of the robot.",
          image: comedyshow,
          link: "https://zachinjapan.github.io/comedy_show/",
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
      <h1>Projects</h1>
      <div className="projects-container">
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
        <ProjectCard
          title={content.projects[4].title}
          description={content.projects[4].description}
          image={content.projects[4].image}
          link={content.projects[4].link}
          github={content.projects[4].github}
          tags={content.projects[4].tags}
        />
        <ProjectCard
          title={content.projects[5].title}
          description={content.projects[5].description}
          image={content.projects[5].image}
          link={content.projects[5].link}
          github={content.projects[5].github}
          tags={content.projects[5].tags}
        />
      </div>
    </div>
  );
};

export default Projects;
