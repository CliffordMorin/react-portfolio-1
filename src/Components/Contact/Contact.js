import "./Contact.css";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = (props) => {
  const [disabled, setDisabled] = useState(true);

  const handleContactButton = () => {
    setDisabled(false);
    console.log("contact button clicked");
  };

  let content = {
    English: {
      title: "Contact",
      description: "Software Engineer",
    },
    Japanese: {
      title: "お問い合わせ",
      description: "ソフトエンジニア",
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);

  return (
    <div className="Contact" id="Contact">
      <div className="contact-container">
        <h1 className="contact-title">{content.title}</h1>
        <form
          className="contact-form"
          name="contact-form"
          action="https://getform.io/f/17aa9ac3-5398-4d30-9798-3d17b1813f83"
          method="POST"
        >
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required></textarea>
          <ReCAPTCHA
            className="g-recaptcha"
            data-theme="light"
            onChange={handleContactButton}
            sitekey="6Lcy0b8cAAAAAJGHWWpU6LDWMITe62X1FzbTvedo"
          ></ReCAPTCHA>
          <button id="submitBtn" type="submit" disabled={disabled}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
