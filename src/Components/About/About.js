import "../About/About.css";
import zach from "../../images/zach.png";
import Skills from "../UI/Skills";
import Slide from "react-reveal/Slide";
import { connect } from "react-redux";
import { Box } from "@mui/material/node_modules/@mui/system";
import america from "../../images/america.webp";
import japan from "../../images/japan.webp";
import Fade from "react-reveal/Fade";
import { FaArrowRight } from "react-icons/fa";

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
        "Hi, I'm Zach. I'm a web developer with business-level Japanese.",
      description2:
        "I fell in love with coding while I was an English teacher in Japan. I now have the technical skills and Japanese ability needed for a professional role.",
      description3:
        "I am seeking a full-time position as a web developer/software engineer in Japan or America. You can reach me at Zach.Stone.Developer@gmail.com",
      contact: "Contact",
    },
    Japanese: {
      title: "自己紹介",
      description: "こんにちは、ザックです。日本語が話せるウェブ開発者です。",
      description2:
        "日本で英語を教えている間、コーディングに夢中になりました。 その時から積極的に学びました。今は必要な技術的スキルと日本語能力を持っています。",
      description3:
        "ウェブ開発者として正社員の仕事を探しています。ウェブサイトをご覧いただきありがとうございます。 お問い合わせはZach.Stone.Developer@gmail.comまでメールでお問い合わせください。",
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
          className="about-title"
        >
          {content.title}
        </h1>
        <p className="about-description">{content.description}</p>
        <p className="about-description">{content.description2}</p>
        <p className="about-description">{content.description3}</p>
        <Fade>
          <Box sx={{ flexGrow: 1, marginBottom: 1 }}>
            <div className="flag-div nav-button" id="about-flag">
              {props.language === "English" ? (
                <div className="flag-div">
                  <span className="nav-span">
                    {" "}
                    日本語を話せますか?&nbsp;&nbsp; <FaArrowRight />
                    &nbsp;&nbsp;
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
        <Skills language={props.language} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  language: state.language,
});
export default connect(mapStateToProps)(About);
