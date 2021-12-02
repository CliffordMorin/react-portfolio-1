import "./ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <div className="project-card-image">
        <img src={props.image} alt="project" />
      </div>
      <div className="project-card-info">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div className="project-card-links">
          <a href={props.github} target="_blank" rel="noopener noreferrer">
            Github
          </a>
          <a href={props.deployed} target="_blank" rel="noopener noreferrer">
            Deployed
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
