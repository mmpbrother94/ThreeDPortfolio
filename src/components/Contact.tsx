import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/manoharkumarsah/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — manoharkumarsah
              </a>
            </p>
            <h4>Education</h4>
            <p>B.Tech Computer Science (AI), GIFT Bhubaneswar — 2021–2025</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a href="https://github.com/mmpbrother94" target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">
              GitHub <MdArrowOutward />
            </a>
            <a href="https://www.linkedin.com/in/manoharkumarsah/" target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">
              LinkedIn <MdArrowOutward />
            </a>
            <a href="https://youtube.com/@@PlayStorePioneers571" target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">
              YouTube <MdArrowOutward />
            </a>
            <a href="https://instagram.com/manohar0112553" target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Manohar Kumar Sah</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
