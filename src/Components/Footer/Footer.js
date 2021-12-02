import "../Footer/Footer.css";
import SocialLinks from "../UI/SocialLinks";
import { GiPartyPopper } from "react-icons/gi";

const Footer = (props) => {
  let content = {
    English: {
      description: "Zach Stone 2021 .... ",
    },
    Japanese: {
      description: "ザック・ストーン 2021 .... ",
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);

  return (
    <footer>
      <div class="footer-text">
        <span>
          {content.description}{" "}
          <button>
            {" "}
            <GiPartyPopper />
          </button>
        </span>
      </div>
      <SocialLinks />
    </footer>
  );
};

export default Footer;
