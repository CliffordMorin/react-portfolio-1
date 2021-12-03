import "./SocialLinks.css";

import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdOutlineComputer } from "react-icons/md";
import { IconContext } from "react-icons";

const SocialLinks = () => {
  return (
    <IconContext.Provider
      value={{ color: "green", className: "global-class-name", size: "40px" }}
    >
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/zachinjapan888/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/zachinjapan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineGithub />
        </a>
        <a
          href="https://twitter.com/zachinjapan888"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillTwitterCircle />
        </a>
        <a
          href="https://zstoneblog.gatsbyjs.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdOutlineComputer />
        </a>
      </div>
    </IconContext.Provider>
  );
};

export default SocialLinks;
