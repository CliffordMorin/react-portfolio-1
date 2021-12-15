import "../About/About.css";
import zach from "../../images/zach.webp";
import Skills from "../UI/Skills";
import Button from "@mui/material/Button";

const About = (props) => {
  let content = {
    English: {
      title: "About Me",
      description:
        "Hi, I'm Zach, a web developer focusing on the MERN tech stack. I have experience building pages using vanilla Javascript as well as React frameworks, such as create-react-app or Gatsby.js. ",

      description2:
        "I am currently looking for a front end developer position in Japan. If you are interested in working with me, please contact me using the form below.",
      resume: "Resume",
    },
    Japanese: {
      title: "自己紹介",
      description:
        "こんにちは、ストーン・ザックです。MERN技術でウェブサイトを作成します。JavascriptやReactフレームワークを使用してウェブサイトを作成できます。",
      description2:
        "日本でフロントエンドエンジニアの仕事を探しています。ご興味がある方は、以下のフォームから連絡を取ってください。",
      resume: "履歴書",
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);

  return (
    <div className="about">
      <div className="about-left">
        <img className="zach-img" src={zach} alt="zach" loading="lazy" />
      </div>
      <div className="about-right">
        <h1
          style={{
            textAlign: "center",
          }}
        >
          {content.title}
        </h1>
        <p className="about-description">{content.description}</p>
        <p className="about-description">{content.description2}</p>
        <div className="resume-div">
          <Button
            variant="contained"
            color="success"
            style={{
              margin: "10px",
              textDecoration: "none",
            }}
          >
            {" "}
            <a
              href="https://docs.google.com/document/d/1nrzaPLysy7FtlaRnXNdffBs2JTjeJqODBiay_gAlERg/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              {content.resume}
            </a>
          </Button>
        </div>
        <Skills language={props.language} />
      </div>
      <div id="Projects" />
    </div>
  );
};

export default About;
