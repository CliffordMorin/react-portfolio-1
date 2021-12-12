import "./Contact.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const Contact = (props) => {
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
          action={process.env.REACT_APP_CONTACT_FORM_URL}
          method="POST"
        >
          <TextField
            className="text-form"
            type="text"
            name="name"
            placeholder={content.name}
            required
          />
          <TextField
            className="text-form"
            type="email"
            name="email"
            placeholder={content.email}
            required
          />
          <TextField
            className="text-form"
            size="medium"
            name="message"
            placeholder={content.message}
            required
          ></TextField>

          <Button
            color="success"
            variant="outlined"
            endIcon={<SendIcon />}
            id="submitBtn"
            type="submit"
            disabled={false}
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
