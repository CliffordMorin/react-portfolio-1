import "../About/About.css";
import Skills from "../UI/Skills";
import { connect } from "react-redux";

import zach from "../../images/zachFinal4.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

const About = (props) => {
  let content = {
    English: {
      title: "About Me",
      description:
        "Hi, I'm Zach. I'm a self-taught web developer with business-level Japanese.",
      description2:
        "I fell in love with coding while I was an English teacher in Japan. I now have the technical skills and Japanese ability needed for a professional role.",
      description3:
        "I am seeking a full-time position as a web developer/software engineer. You can reach me at Zach.Stone.Developer@gmail.com",
      contact: "Contact",
    },
    Japanese: {
      title: "自己紹介",
      description:
        "こんにちは、ザックです。日本語が話せる独学のウェブ開発者です。",
      description2:
        "日本で英語を教えている間、コーディングに夢中になりました。 その時から積極的に学びました。今は必要な技術的スキルと日本語能力を持っています。",
      description3:
        "日本でウェブ開発者として正社員の仕事を探しています。ウェブサイトをご覧いただきありがとうございます。 お問い合わせはZach.Stone.Developer@gmail.comまでメールでお問い合わせください。",
      contact: "お問い合わせ",
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);

  return (
    <>
      <div className="up-arrow-special"></div>
      <div
        style={{
          backgroundColor: "var(--primary-color)",
        }}
      >
        <div className="about" id="About">
          <div className="about-left">
            <div className="picture">
              <img className="zach-img" src={zach} alt="zach" loading="lazy" />
            </div>
          </div>

          <div className="about-right">
            <AnimationOnScroll
              animateIn="animate__fadeInRight"
              animateOnce={true}
              offset={200}
              duration={2}
            >
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
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__fadeInRight"
              animateOnce={true}
              offset={250}
              duration={2}
            >
              <Skills language={props.language} />
            </AnimationOnScroll>
          </div>
        </div>
        <div className="down-arrow-special" />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  language: state.language,
});
export default connect(mapStateToProps)(About);
