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
      <a onClick={scrollToTop}>
        {props.language === "English" ? "Home" : "ホーム"}
      </a>
      <a onClick={scrollToAbout}>
        {props.language === "English" ? "About" : "私について"}
      </a>
      <a onClick={scrollToProjects}>
        {props.language === "English" ? "Projects" : "プロジェクト"}
      </a>
      <a onClick={scrollToWork}>
        {props.language === "English" ? "Work" : "仕事"}
      </a>
      <a onClick={scrollToContact}>
        {props.language === "English" ? "Contact" : "お問い合わせ"}
      </a>
      <div className="flag-div">
        <img src={america} />
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <img src={japan} />
      </div>
    </nav>
  );
};

export default Header;
