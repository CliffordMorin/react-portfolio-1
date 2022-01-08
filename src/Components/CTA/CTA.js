import "./CTA.css";
import CTAButtons from "../UI/CTAButtons";

const CTA = (props) => {
  let content = {
    English: {
      callToAction: "Like what you see?",
      link: "https://fib-buzz.netlify.app/",
      linkText: "I am currently available for full-time or freelance work",
    },
    Japanese: {
      callToAction: "詳しい情報",
      link: "https://fib-buzz.netlify.app/",
      linkText: "Fib Buzz",
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);

  return (
    <div className="CTA">
      <div className="CTA-text">
        <h1>{content.callToAction}</h1>
        <p>{content.linkText}</p>
        <div style={{ width: "50%" }}>
          <CTAButtons />
        </div>
      </div>
      <div id="Projects" />
    </div>
  );
};

export default CTA;
