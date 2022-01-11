import "../About/About.css";
import zach from "../../images/zach.webp";
import Skills from "../UI/Skills";
import Button from "@mui/material/Button";
import Slide from "react-reveal/Slide";
// import { AiOutlineIdcard } from "react-icons/ai";

const About = (props) => {
  let content = {
    English: {
      title: "About Me",
      description:
        "Hi, I'm Zach.  I'm a self-taught software engineer located in the US.",
      description2:
        "I am looking for a full-time web developer position in Japan.",
      description3: "Feel free to contact me using the form below.",
      resume: "Resume",
      contact: "Contact",
    },
    Japanese: {
      title: "自己紹介",
      description:
        "こんにちは、ストーン・ザックです。日本語が話せるの独学のWeb開発者です。 JavascriptやReactフレームワークを使用してウェブサイトを作成できます。",
      description2:
        "最近、認証やデータベース管理を学んでいます。日本でコーディング学校を入学予定があります。",
      description3: "下記のフォームからお問い合わせください。",
      resume: "履歴書",
      contact: "お問い合わせ",
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);

  return (
    <div className="about">
      <Slide left>
        <div className="about-left">
          <div className="picture">
            <img className="zach-img" src={zach} alt="zach" loading="lazy" />
          </div>
        </div>
      </Slide>
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
        {/* <p>
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
            <p className="about-description">
              <span>
                {" "}
                <AiOutlineIdcard /> digital business card
              </span>
            </p>
          </a>
        </p> */}{" "}
        <div className="resume-div">
          <Button color="success" variant="contained" style={{}}>
            {" "}
            <a
              href="#Contact"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              {content.contact}
            </a>
          </Button>
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
    </div>
  );
};

export default About;
