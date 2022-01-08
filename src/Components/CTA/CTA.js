import "./CTA.css";
import CTAButtons from "../UI/CTAButtons";

const CTA = (props) => {
  let content = {
    English: {
      linkText:
        "Thanks for checking out my portfolio! I am currently available for full-time or freelance work",
    },
    Japanese: {
      linkText:
        "ポルトフォリオをみていただきありがとうございます。現在フルタイムやフリーランスで働く可能です。",
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);

  return (
    <div className="CTA">
      <div className="CTA-text">
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
