import "./Contact.css";

const Contact = (props) => {
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
    <div className="Contact">
      <div className="contact-container">
        <h1>{content.title}</h1>
        <form className="contact-form">
          <label>
            <input type="text" name="name" placeholder="Name" />
          </label>
          <label>
            <input type="email" name="email" placeholder="Email" />
          </label>
          <label>
            <textarea name="message" placeholder="Message" />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
