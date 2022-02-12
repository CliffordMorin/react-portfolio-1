import "../About/About.css";
import zach from "../../images/zach.webp";
import Skills from "../UI/Skills";
import Button from "@mui/material/Button";
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
        "Hi, I'm Zach.  I'm a self-taught, highly-motivated, web developer who can speak Japanese",
      description2:
        "I have a passion for creating and learning new things. When I'm not coding, I enjoy playing VR games, studying Japanese, and playing music.",
      description3: "I am looking for a full-time position in Japan.",
      description4: "Feel free to contact me using the form below.",
      resume: "Resume",
      contact: "Contact",
    },
    Japanese: {
      title: "自己紹介",
      description:
        "こんにちは、ザックです。日本語が話せるの独学のソフトエンジニアです。",
      description2:
        "ものを作るや学ぶことが好きです。暇な時に、VRゲームをやったり、日本語を勉強したり、音楽を演劇したりします。",
      description3: "ウェブ開発者としてのフルタイムの仕事を探しています",
      description4: "下記のフォームからお問い合わせください。",
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
        <p className="about-description">{content.description4}</p>
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

const mapStateToProps = (state) => ({
  language: state.language,
});
export default connect(mapStateToProps)(About);
