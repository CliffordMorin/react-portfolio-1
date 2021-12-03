import "../Footer/Footer.css";
import SocialLinks from "../UI/SocialLinks";

const Footer = (props) => {
  let content = {
    English: {
      description:
        "I made this portfolio using React, React-Router, and Material-UI.",
    },
    Japanese: {
      description:
        "このポートフォリオはReact, React-Router, Material-UIを使用して作成されました。",
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);

  return (
    <footer>
      <div class="footer-text">
        <span>{content.description} </span>
      </div>
      <SocialLinks />
    </footer>
  );
};

export default Footer;
