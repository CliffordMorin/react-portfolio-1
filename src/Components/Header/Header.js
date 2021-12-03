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
      <button className="nav-button" onClick={scrollToTop}>
        {props.language === "English" ? "Home" : "ホーム"}
      </button>
      <button className="nav-button" onClick={scrollToAbout}>
        {props.language === "English" ? "About" : "私について"}
      </button>
      <button className="nav-button" onClick={scrollToProjects}>
        {props.language === "English" ? "Projects" : "プロジェクト"}
      </button>
      <button className="nav-button" onClick={scrollToContact}>
        {props.language === "English" ? "Contact" : "お問い合わせ"}
      </button>
      <div className="nav-button" className="flag-div">
        {props.language === "English" ? (
          <div className="flag-div">
            <img
              className="flag"
              src={japan}
              alt="Japan Flag"
              onClick={() => handleChangeLanguageToJapanese()}
            />
          </div>
        ) : (
          <div className="Japanese">
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
