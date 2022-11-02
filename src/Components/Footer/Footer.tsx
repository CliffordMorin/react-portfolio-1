import "../Footer/Footer.css";
import SocialLinks from "../UI/SocialLinks";

const Footer = () => {
  return (
    <footer>
      <div className="footer-text">
        <span>
          <span
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            Thanks for looking at my portfolio.
          </span>
          <span> </span>
          <span
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              color: "var(--secondary-color)",
            }}
          >
            Let's connect!
          </span>
        </span>
      </div>
      <SocialLinks />
    </footer>
  );
};

export default Footer;
