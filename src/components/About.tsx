import "./styles/About.css";
import portfolioData from "../data/portfolioData";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-me">
        <h3>About Me</h3>
        <p>
          {portfolioData.about} Passionate about building intelligent systems at
          the intersection of AI, full-stack development, and real-world impact —
          from healthcare to agriculture and beyond.
        </p>
      </div>
    </div>
  );
};

export default About;