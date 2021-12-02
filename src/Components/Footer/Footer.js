import "../Footer/Footer.css";
import SocialLinks from "../UI/SocialLinks";
import { GiPartyPopper } from "react-icons/gi";
import Confetti from "react-confetti";
import { useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";

const Footer = (props) => {
  const { width, height } = useWindowSize();

  const [confetti, setConfetti] = useState(true);

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

  if (confetti === true) {
    return (
      <>
        <Confetti width={width} height={height} numberOfPieces={5000} />;
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
      </>
    );
  } else {
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
  }
};

export default Footer;
