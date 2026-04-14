import Marquee from "react-fast-marquee";
import portfolioData from "../data/portfolioData";
import "./styles/SkillsMarquee.css";

const SkillsMarquee = () => {
  const skills = portfolioData.skills;

  return (
    <div className="skills-marquee-section">
      <h2 className="skills-marquee-title">My Tech Stack</h2>
      <Marquee gradient={false} speed={40} pauseOnHover className="skills-marquee-track">
        {skills.map((skill, i) => (
          <div className="skills-marquee-tag" key={`${skill}-${i}`}>
            {skill}
          </div>
        ))}
      </Marquee>
      <Marquee gradient={false} speed={30} direction="right" pauseOnHover className="skills-marquee-track">
        {skills.map((skill, i) => (
          <div className="skills-marquee-tag skills-marquee-tag-alt" key={`${skill}-alt-${i}`}>
            {skill}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default SkillsMarquee;
