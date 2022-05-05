import "../About/About.css";
import Skills from "../UI/Skills";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import zach from "../../images/zach.webp";

const About = (props) => {
  const isTabletOrBigger = useMediaQuery({ query: "(min-width: 768px)" });
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
      <div className="about-left">
        <div>
          <h3
            className="iframe-text"
            style={{
              textAlign: "center",
            }}
          >
            {loading && isTabletOrBigger
              ? "Loading 3D model. Please be patient."
              : ""}
          </h3>
        </div>

        {isTabletOrBigger ? (
          <iframe
            loading="lazy"
            title="zach"
            className={"iframe"}
            src="https://my.spline.design/roomrelaxingcopy-da4e6136da4fac6e999bc7c5dda89e57/"
            overflow="hidden"
            frameBorder={0}
          />
        ) : (
          <div className="picture">
            <img className="zach-img" src={zach} alt="zach" loading="lazy" />
          </div>
        )}
      </div>

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
