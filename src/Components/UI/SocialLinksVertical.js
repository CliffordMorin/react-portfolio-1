import "./SocialLinksVertical.css";

import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdOutlineComputer } from "react-icons/md";
import { IconContext } from "react-icons";
import Slide from "react-reveal/Slide";

const SocialLinksVertical = () => {
  return (
    <IconContext.Provider
      value={{
        color: "var(--secondary-color)",
        className: "global-class-name",
        size: "50px",
      }}
    >
      <Slide left>
        <div className="social-links-vertical">
          <a
            href="https://www.linkedin.com/in/zachinjapan888/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className="social-link-img" />
          </a>
          <a
            href="https://github.com/zachinjapan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineGithub className="social-link-img" />
          </a>
          <a
            href="https://twitter.com/zachstonewebdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillTwitterCircle className="social-link-img" />
          </a>
          <a
            href="https://zachinjapan.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdOutlineComputer className="social-link-img" />
          </a>
        </div>
      </Slide>
    </IconContext.Provider>
  );
};

export default SocialLinksVertical;
