import "../About/About.css";
import zach from "../../images/zach.jpg";
import Skills from "../UI/Skills";
import Button from "@mui/material/Button";

const About = (props) => {
  let content = {
    English: {
      title: "About Me",
      description:
        "I'm a web developer focusing on the MERN tech stack. I have experience building pages using vanila Javascript as well as React frameworks such as create-react-app or Gatsby.js. ",
      diesciption2:
        "Have a look at my projects and contact me using the contact form below.",
      resume: "Resume",
    },
    Japanese: {
      title: "自己紹介",
      description:
        "ウエブデベロッパーです。MERN技術でページを作成します。JavascriptやReactフレームワークを使用してページ作成できます。",
      diesciption2:
        "是非プロジェクトを見てみてください。連絡を取りたい場合は、以下の連絡フォームを使用してください",
      resume: "履歴書",
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);

  return (
    <div className="about" id="About">
      <div className="about-left">
        <img className="zach-img" src={zach} alt="zach" loading="lazy" />
      </div>
      <div className="about-right">
        <h1>{content.title}</h1>
        <p>{content.description}</p>
        <p>{content.diesciption2}</p>
        <div className="resume-div">
          <Button
            variant="contained"
            color="success"
            style={{
              margin: "10px",
            }}
          >
            {" "}
            <a
              href="https://docs.google.com/document/d/1nrzaPLysy7FtlaRnXNdffBs2JTjeJqODBiay_gAlERg/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "white",
                decoration: "none",
                underline: "none",
              }}
            >
              {content.resume}
            </a>
          </Button>
        </div>
        <Skills language={props.language} />
      </div>
    </div>
  );
};

export default About;
