import "../About/About.css";
import zach from "../../images/zach.webp";
import Skills from "../UI/Skills";
import Button from "@mui/material/Button";

const About = (props) => {
  let content = {
    English: {
      title: "About Me",
      description:
        "Hi, I'm Zach, a self-taught web developer focusing on the MERN tech stack. I have experience building pages using vanilla Javascript as well as React frameworks, such as create-react-app or Gatsby.js. ",
      description2:
        "I am currently learning authentication and database management and will study at a coding bootcamp in Japan in 2022.",
      description3:
        "If you are interested in working with me, please contact me using the form below or through any of my links below.",
      resume: "Resume",
    },
    Japanese: {
      title: "自己紹介",
      description:
        "こんにちは、ストーン・ザックです。独学のWeb開発者です。 JavascriptやReactフレームワークを使用してウェブサイトを作成できます。",
      description2:
        "最近、認証やデータベース管理を学んでいます。日本でコーディング学校を入学予定があります。",
      description3:
        "下記のフォームからお問い合わせください。また、このリンクでもお問い合わせください。",
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
        <p className="about-description">{content.description3}</p>
        <p>
          <a
            href="https://linktr.ee/zachinjapan"
            rel="noopener noreferrer"
            target={"_blank"}
            style={{
              textDecoration: "underline",
              color: "#2e7d32",
              cursor: "pointer",
            }}
          >
            <span> Zach Stone's Link Tree</span>
          </a>
        </p>
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
