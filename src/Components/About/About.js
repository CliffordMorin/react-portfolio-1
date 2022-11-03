import "../About/About.css";
import Skills from "../UI/Skills";
import { connect } from "react-redux";

// import zach from "../../images/zachFinal4.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useEffect, useState } from "react";

const About = (props) => {
  let content = {
    English: {
      title: "My Advantage",
      description1:
        "I'm a self-taught software engineer, a self-taught Japanese speaker, and a professionally trained musician.",
      description2:
        "I fell in love with coding while I was an English teacher in Japan. Starting with HTML, CSS, and Javascript, I worked hard to improve my skills and now make complex full-stack applications with frameworks such as React, Vue, and Gatsby.",
      description3:
        "I am currently working as a software engineer at Rapptr Labs.",
      description4: "You can reach me at Zach.Stone.Developer@gmail.com",
      contact: "Contact",
      keywords: {
        Rapptr: true,
        "Labs.": true,
        "engineer,": true,
        Japanese: true,
        "speaker,": true,
        proffesionally: true,
        trained: true,
        "musician.": true,
        HTML: true,
        CSS: true,
        Javascript: true,
        React: true,
        Vue: true,
        Gatsby: true,
      },
    },
    Japanese: {
      title: "自己紹介",
      description1: `独学のソフトエンジニアであり、独学の日本語学習者であり、大学で訓練を受けたミュージシャンでもあります。`,

      description2:
        "日本で英語を教えていた頃、コーディングが大好きになりました。 HTML、CSS、Javascriptだけから始めました。スキルを向上させるために一生懸命に勉強し、今ではReact、Vue、Gatsbyなどのフレームワークを使用して複雑なフルスタックアプリケーションを作成しています。",
      description3:
        "現在、Rapptr Labsでソフトウェアエンジニアとして働いています。",
      description4:
        "お問い合わせはZach.Stone.Developer@gmail.comまでメールでお問い合わせください。",
      contact: "お問い合わせ",
      keywords: {
        ウェブ開発者: "ウェブ開発者",
        日本語が話せる: "日本語が話せる",
        音楽家: "音楽家",
        HTML: "HTML",
        css: "CSS",
        javascript: "Javascript",
        react: "React",
        vue: "Vue",
        gatsby: "Gatsby",
        "Zach.Stone.Developer@gmail.com": true,
        "Zach.": true,
      },
    },
  };

  const [description1Final, setDescription1Final] = useState("");
  const [description2Final, setDescription2Final] = useState("");
  const [description3Final, setDescription3Final] = useState("");
  const [description4Final, setDescription4Final] = useState("");

  // go through the descriptions and add a span with the color as the secondary color for any keywords
  useEffect(() => {
    setDescription1Final(content.description1);
    setDescription2Final(content.description2);

    setDescription3Final(
      content.description3.split(" ").map((word) => {
        if (content.keywords[word]) {
          return (
            <span style={{ color: "var(--secondary-color)" }}>{word} </span>
          );
        } else {
          return word + " ";
        }
      })
    );
    setDescription4Final(content.description4);
  }, [
    props.language,
    content.keywords,
    content.description1,
    content.description2,
    content.description3,
    content.description4,
  ]);

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);

  return (
    <div className="about-full">
      {/* <div className="up-arrow-special"></div> */}
      <div>
        <div className="about" id="About">
          {/* <div className="about-left">
						<div className="picture">
							<img className="zach-img" src={zach} alt="zach" loading="lazy" />
                            
						</div>
					</div> */}

          <div className="about-right">
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              animateOnce={true}
              offset={200}
              duration={3}
            >
              <h1
                style={{
                  textAlign: "center",
                }}
                className="about-title"
              >
                {content.title}
              </h1>
              <p className="about-description">{description1Final}</p>
              <p className="about-description">{description2Final}</p>
              <p className="about-description">{description3Final}</p>
              <p className="about-description">{description4Final}</p>
            </AnimationOnScroll>

            <AnimationOnScroll
              animateIn="animate__fadeIn"
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  language: state.language,
});
export default connect(mapStateToProps)(About);
