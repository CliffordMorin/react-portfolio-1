import "./HeaderLink.css";

const HeaderLink = ({ text, link }) => {
  return (
    <a className="header-link" href={link}>
      {text}
    </a>
  );
};

export default HeaderLink;
