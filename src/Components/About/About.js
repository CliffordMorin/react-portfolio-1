import "../About/About.css";
import zach from "../../images/zach.jpg";
import Skills from "../UI/Skills";

const About = (props) => {
  let content = {
    English: {
      title: "About Me",
      description:
        "I'm a webdeveloper focusing on the MERN tech stack. I have experience building pages using vanila Javascript as well as React frameworks such as create-react-app or Gatsby.js. ",
      diesciption2:
        "Have a look at my projects and contact me if you are interested in working together or looking for a new website.",
      resume: "Resume",
    },
    Japanese: {
      title: "自己紹介",
      description:
        "Software Engineer focusing on the MERN tech stack. I have experience building pages using vanila Javascript as well as React frameworks such as creat-react-app or Gatsby.js. ",
      diesciption2:
        "Have a look at my projects and contact me if you are interested in working together or looking for a new website.",
      resume: "履歴書",
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);

  return (
    <div className="about" id="About">
      <div className="about-left">
        <img className="zach-img" src={zach} alt="zach" />
      </div>
      <div className="about-right">
        <h1>{content.title}</h1>
        <p>{content.description}</p>
        <p>{content.diesciption2}</p>
        <div className="resume-div">
          <button> {content.resume}</button>
        </div>
        <Skills />
      </div>
    </div>
  );
};

export default About;
