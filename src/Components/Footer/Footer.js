import "../Footer/Footer.css";
import SocialLinks from "../UI/SocialLinks";
import { BiRightArrowAlt } from "react-icons/bi";

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
        <BiRightArrowAlt size="1.2rem" color="gray" />{" "}
      </div>
      <SocialLinks />
    </footer>
  );
};

export default Footer;
