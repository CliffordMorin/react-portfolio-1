import "./ProjectCard.css";
import Button from "@mui/material/Button";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <img className="project-card-img" src={props.image} alt="project" />
      <div className="project-card-info">
        <h3>{props.title}</h3>
        <div className="project-description">
          <p>{props.description}</p>
        </div>
        <div className="project-tag-div">
          <span className="tech-text"> {props.tags[0]} ,</span>
          <span className="tech-text"> {props.tags[1]}, </span>
          <span className="tech-text"> {props.tags[2]} </span>
          <span className="tech-text"> {props.tags[3]} </span>
        </div>
        <div className="project-card-links">
          {" "}
          {props.github ? (
            <a
              href={props.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              <Button variant="contained" color="success">
                Github
              </Button>
            </a>
          ) : null}
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link"
          >
            <Button variant="contained" color="success">
              Live
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
