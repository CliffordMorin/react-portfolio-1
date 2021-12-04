import america from "../../images/america.png";
import japan from "../../images/japan.png";
import { connect } from "react-redux";
import "./Navbar.css";

const Navbar = (props) => {
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
      menu: [
        ["Home", "/"],
        ["About", "/#About"],
        ["Projects", "/#Projects"],
        ["Contact", "/#Contact"],
      ],
    },
    Japanese: {
      menu: [
        ["ホーム", "/"],
        ["私について", "/#About"],
        ["プロジェクト", "/#Projects"],
        ["お問い合わせ", "/#Contact"],
      ],
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);

  return (
    <nav>
      <div className="navbar-container">
        <a className="nav-item" href="/">
          {" "}
          {content.menu[0][0]}{" "}
        </a>
        <a className="nav-item" href="/#About">
          {" "}
          {content.menu[1][0]}{" "}
        </a>
        <a className="nav-item" href="/#Projects">
          {" "}
          {content.menu[2][0]}{" "}
        </a>
        <a className="nav-item" href="/#Contact">
          {" "}
          {content.menu[3][0]}{" "}
        </a>
      </div>
      <div className="flag-div nav-button">
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
export default connect(mapStateToProps)(Navbar);
