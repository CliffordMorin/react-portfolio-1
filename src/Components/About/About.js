import "../About/About.css";
import zach from "../../images/zach.webp";
import Skills from "../UI/Skills";
import Slide from "react-reveal/Slide";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";

const About = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);

  let content = {
    English: {
      title: "About Me",
      description:
        "Hi, I'm Zach. I'm a self taught web developer with business-level Japanese.",
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
          <div
            style={{
              zIndex: 1000,
              marginBottom: "2.8rem",
            }}
          >
            <h3
              style={{
                textAlign: "center",
              }}
            >
              {loading
                ? "Loading 3D image. Page will refresh..."
                : "scroll to zoom in + click and drag to move"}
            </h3>
          </div>
          <div className={loading ? "picture" : "picture hidden "}>
            <img className="zach-img" src={zach} alt="zach" loading="lazy" />
          </div>
          <div
            style={{
              overflow: "hidden",
              maxHeight: "100%",
              maxWidth: "100%",
            }}
          >
            <iframe
              loading="lazy"
              title="zach"
              className={loading ? "hidden iframe" : "iframe"}
              src="https://my.spline.design/roomrelaxingcopy-da4e6136da4fac6e999bc7c5dda89e57/"
              overflow="hidden"
              frameBorder={0}
            />
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
        <Skills language={props.language} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  language: state.language,
});
export default connect(mapStateToProps)(About);
