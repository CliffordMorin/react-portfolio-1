import Button from "@mui/material/Button";
import "../About/About.css";

const CTAButtons = (props) => {
  let content = {
    English: {
      resume: "Resume",
      contact: "Contact",
    },
    Japanese: {
      resume: "履歴書",
      contact: "お問い合わせ",
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);

  return (
    <div className="resume-div">
      <Button
        color="success"
        variant="contained"
        style={{
          color: "white",
          margin: "10px",
          textDecoration: "none",
        }}
      >
        {" "}
        <a
          href="#Contact"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          {content.contact}
        </a>
      </Button>
    </div>
  );
};

export default CTAButtons;
