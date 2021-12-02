import "./Header.css";
import HeaderLink from "./HeaderLink/HeaderLink";

const Header = (props) => {
  return (
    <header className="header">
      <HeaderLink
        text={props.language === "English" ? "Home" : "ホーム"}
        link="/home"
      />
      <HeaderLink
        text={props.language === "English" ? "About" : "アバウト"}
        link="/about"
      />
      <HeaderLink
        text={props.language === "English" ? "Projects" : "プロジェクト"}
        link="/projects"
      />
      <HeaderLink
        text={props.language === "English" ? "Work" : "仕事"}
        link="/work"
      />
      <HeaderLink
        text={props.language === "English" ? "Contact" : "コンタクト"}
        link="/contact"
      />
      <div className="language-select">
        <select
          className="custom-select"
          value={props.language}
          onChange={(e) => props.handleSetLanguage(e.target.value)}
        >
          <option value="English">English</option>
          <option value="Japanese">日本語</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
