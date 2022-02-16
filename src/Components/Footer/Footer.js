import "../Footer/Footer.css";
import SocialLinks from "../UI/SocialLinks";

const Footer = (props) => {
  let content = {
    English: {
      description:
        "I made this portfolio from scratch using npx create-react-app, Redux, and Material-UI.",
    },
    Japanese: {
      description:
        "このウェブサイトは npx create-react-app,  Redux,  Material-UIを使用して作成されました。",
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);

  return (
    <footer>
      <div className="footer-text">
        <span
          style={{
            color: "#2e7d32",
          }}
        >
          {content.description}{" "}
        </span>
      </div>
      <SocialLinks />
    </footer>
  );
};

export default Footer;
