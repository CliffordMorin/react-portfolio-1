import "./Header.css";
import React from "react";
import america from "../../images/america.png";
import japan from "../../images/japan.png";
import { connect } from "react-redux";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const scrollToAbout = () => {
  document
    .getElementById("About")
    .scrollIntoView({ behavior: "smooth", block: "center" });
};

const scrollToProjects = () => {
  document.getElementById("Projects").scrollIntoView({ behavior: "smooth" });
};

const scrollToWork = () => {
  document
    .getElementById("Work")
    .scrollIntoView({ behavior: "smooth", block: "center" });
};

const scrollToContact = () => {
  document
    .getElementById("Contact")
    .scrollIntoView({ behavior: "smooth", block: "center" });
};

const Header = (props) => {
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

  return (
    <nav className="header">
      <button onClick={scrollToTop}>
        {props.language === "English" ? "Home" : "ホーム"}
      </button>
      <button onClick={scrollToAbout}>
        {props.language === "English" ? "About" : "私について"}
      </button>
      <button onClick={scrollToProjects}>
        {props.language === "English" ? "Projects" : "プロジェクト"}
      </button>
      <button Click={scrollToWork}>
        {props.language === "English" ? "Work" : "仕事"}
      </button>
      <button onClick={scrollToContact}>
        {props.language === "English" ? "Contact" : "お問い合わせ"}
      </button>
      <div className="flag-div">
        {props.language === "English" ? (
          <div className="flag-div">
            <span> JP </span>
            <img
              className="flag"
              src={japan}
              alt="Japan Flag"
              onClick={() => handleChangeLanguageToJapanese()}
            />
          </div>
        ) : (
          <div className="Japanese">
            <span> EN </span>
            <img
              className="flag"
              src={america}
              alt="America Flag"
              onClick={() => handleChangeLanguageToEnglish()}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  language: state.language,
});

export default connect(mapStateToProps)(Header);
