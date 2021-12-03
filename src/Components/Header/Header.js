import "./Header.css";
import Switch from "@mui/material/Switch";
import React from "react";
import america from "../../images/america.png";
import japan from "../../images/japan.png";

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
  const changeLanguage = (language) => {
    props.handleSetLanguage(language);
  };

  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    changeLanguage(props.language === "English" ? "Japanese" : "English");
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
        <img src={america} alt="america" />
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <img src={japan} alt="japan" />
      </div>
    </nav>
  );
};

export default Header;
