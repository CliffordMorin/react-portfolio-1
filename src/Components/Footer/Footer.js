import "../Footer/Footer.css";
import SocialLinks from "../UI/SocialLinks";

const Footer = (props) => {
  let content = {
    English: {
      description:
        "I made this portfolio from using React, npx create-react-app, Redux, and Material-UI.",
    },
    Japanese: {
      description:
        "このポートフォリオはReact, npx create-react-app,  Redux,  Material-UIを使用して作成されました。",
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);

  return (
    <footer>
      <div className="footer-text">
        <span>{content.description} </span>
      </div>
      <SocialLinks />
    </footer>
  );
};

export default Footer;
