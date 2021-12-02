import "../About/About.css";
import zach from "../../images/zach.jpg";
import Skills from "../UI/Skills";

const About = (props) => {
  let content = {
    English: {
      title: "About Me",
      description:
        "Software Engineer focusing on the MERN tech stack. I have experience building pages using vanila Javascript as well as React frameworks such as creat-react-app or Gatsby.js. ",
      diesciption2: "Fluent in Japanese, music, and code.",
    },
    Japanese: {
      title: "自己紹介",
      description:
        "Software Engineer focusing on the MERN tech stack. I have experience building pages using vanila Javascript as well as React frameworks such as creat-react-app or Gatsby.js. ",
      diesciption2: "Fluent in Japanese, music, and code.",
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);

  return (
    <div className="about">
      <div className="about-left">
        <img className="zach-img" src={zach} />
      </div>
      <div className="about-right">
        <h1>{content.title}</h1>
        <p>{content.description}</p>
        <p>{content.diesciption2}</p>
        <Skills />
      </div>
    </div>
  );
};

export default About;
