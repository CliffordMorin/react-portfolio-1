import "./SocialLinks.css";

import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { IconContext } from "react-icons";

const SocialLinks = () => {
  return (
    <IconContext.Provider
      value={{
        color: "var(--secondary-color)",
        className: "global-class-name",
        size: "40px",
      }}
    >
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/zachinjapan888/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <BsLinkedin className="social-link-img" />
        </a>
        <a
          href="https://github.com/zachinjapan"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <AiOutlineGithub className="social-link-img" />
        </a>
        <a
          href="https://twitter.com/zachstonewebdev"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <AiFillTwitterCircle className="social-link-img" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100076178851804"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <AiFillFacebook className="social-link-img" />
        </a>
      </div>
    </IconContext.Provider>
  );
};

export default SocialLinks;
