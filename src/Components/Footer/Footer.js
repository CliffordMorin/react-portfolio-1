import "../Footer/Footer.css";
import SocialLinks from "../UI/SocialLinks";

const Footer = () => {
  return (
    <footer>
      <div className="footer-text">
        <span
          style={{
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          Thanks for looking at my portfolio. Let's connect!
          {"  "}
        </span>
      </div>
      <SocialLinks />
    </footer>
  );
};

export default Footer;
