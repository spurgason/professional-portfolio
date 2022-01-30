import "./contact.scss";

import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import EmailOutlined from "@material-ui/icons/EmailOutlined";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/sputnik.svg" alt="contact icon" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <div className="socials">
          <a className="contact-info" href=" https://github.com/spurgason" target="_blank" rel="noopener noreferrer">
            <GitHub className="icon" />
            <span>github.com/spurgason</span>
          </a>
          <a className="contact-info" href="https://linkedin.com/in/shane-purgason" target="_blank" rel="noopener noreferrer"> 
            <LinkedIn className="icon" />
            <span>linkedin.com/in/shane-purgason</span>
          </a>
          <a className="contact-info" href="mailto:shanepurgason.98@gamil.com" target="_blank" rel="noopener noreferrer">
            <EmailOutlined className="icon" />
            <span>shanepurgason.98@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
