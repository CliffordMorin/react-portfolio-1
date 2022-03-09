import "../About/About.css";
import zach from "../../images/zach.webp";
import Skills from "../UI/Skills";
import Slide from "react-reveal/Slide";
// import { AiOutlineIdcard } from "react-icons/ai";
import { connect } from "react-redux";
import { Box } from "@mui/material/node_modules/@mui/system";
import america from "../../images/america.webp";
import japan from "../../images/japan.webp";
import Fade from "react-reveal/Fade";

const About = (props) => {
  const handleChangeLanguageToJapanese = (evt) => {
    props.dispatch({
      type: "CHANGE_LANGUAGE_TO_JAPANESE",
    });
  };

  const handleChangeLanguageToEnglish = (evt) => {
    props.dispatch({
      type: "CHANGE_LANGUAGE_TO_ENGLISH",
    });
  };

  let content = {
    English: {
      title: "About Me",
      description:
        "Hi, I'm Zach.  I'm a self-taught web developer who can speak Japanese.",
      description2:
        "I fell in love with coding while an English teacher in Japan. I spent every day after school studying at the local Dotour coffee shop. My interest in coding has only grown since that time. ",
      description4: "My resume.",
      description3:
        "I am seeking a full-time position as a web developer/software engineer in Japan. You can reach me using the contact form below or at Zach.Stone.Developer@gmail.com",
      resume: "Resume",
      contact: "Contact",
    },
    Japanese: {
      title: "自己紹介",
      description:
        "こんにちは、ザックです。日本語が話せる独学のウェブ開発者です。",
      description2:
        "日本で英語を教えている間、コーディングに夢中になりました。 仕事が終わってから、地元のドトールで毎日勉強しました。 私のコーディングへの関心は、それ以来成長してきました。 それで、8月に私は教職を離れて米国に戻り、コーディングをフルタイムで勉強し始めた。",
      description4: "私の履歴書",
      description3:
        "日本でウェブ開発者として正社員の仕事を探しています。ウェブサイトをご覧いただきありがとうございます。 お問い合わせは、以下のフォームをご利用いただくか、Zach.Stone.Developer@gmail.comまでメールでお問い合わせください。",
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
        <a
          href="https://docs.google.com/document/d/1nrzaPLysy7FtlaRnXNdffBs2JTjeJqODBiay_gAlERg/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "var(--color-primary)",
            textDecoration: "underline",
          }}
        >
          <p className="about-description">{content.description4}</p>
        </a>
        <Fade>
          <Box sx={{ flexGrow: 1, marginBottom: 1 }}>
            <div className="flag-div nav-button" id="about-flag">
              {props.language === "English" ? (
                <div className="flag-div">
                  <span className="nav-span">
                    {" "}
                    日本語を話せますか?&nbsp;&nbsp;{" "}
                  </span>
                  <div className="flag-div-holder">
                    <img
                      className="flag"
                      src={japan}
                      alt="Japan Flag"
                      onClick={() => handleChangeLanguageToJapanese()}
                    />
                  </div>
                </div>
              ) : (
                <div className="Japanese">
                  <div className="flag-div-holder">
                    <img
                      className="flag"
                      src={america}
                      alt="America Flag"
                      onClick={() => handleChangeLanguageToEnglish()}
                    />
                  </div>
                </div>
              )}
            </div>
          </Box>
        </Fade>
        {/* <p>
          <a
            href="https://linktr.ee/zachinjapan"
            rel="noopener noreferrer"
            target={"_blank"}
            style={{
              textDecoration: "underline",
              color: "var(--primary-color)",
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
        {/* <div className="resume-div">
          <button className="big-button secondary-button">
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
          </button>
          <button className="big-button secondary-button">
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
          </button>
        </div> */}
        <Skills language={props.language} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  language: state.language,
});
export default connect(mapStateToProps)(About);
