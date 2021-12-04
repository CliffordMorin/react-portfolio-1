import "./Contact.css";
// import { useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const Contact = (props) => {
  // const [disabled, setDisabled] = useState(false);

  // const handleContactButton = () => {
  //   setDisabled(false);
  //   console.log("contact button clicked");
  // };

  let content = {
    English: {
      title: "Contact",
      description: "Software Engineer",
      name: "Name",
      email: "Email",
      message: "Message",
    },
    Japanese: {
      title: "お問い合わせ",
      description: "ソフトエンジニア",
      name: "名前",
      email: "メールアドレス",
      message: "メッセージ",
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
          <TextField
            type="text"
            name="name"
            placeholder={content.name}
            required
          />
          <TextField
            type="email"
            name="email"
            placeholder={content.email}
            required
          />
          <TextField
            size="medium"
            name="message"
            placeholder={content.message}
            required
          ></TextField>
          {/* <ReCAPTCHA
            loading="lazy"
            className="g-recaptcha"
            data-theme="light"
            onChange={handleContactButton}
            sitekey="6Lcy0b8cAAAAAJGHWWpU6LDWMITe62X1FzbTvedo"
          ></ReCAPTCHA> */}
          <Button
            color="success"
            variant="outlined"
            endIcon={<SendIcon />}
            id="submitBtn"
            type="submit"
            // disabled={disabled}
            disabled={false}
            variant="outlined"
            color="primary"
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
