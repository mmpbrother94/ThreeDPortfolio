import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co-Founder</h4>
                <h5>TrashMorph</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building an IoT + ML smart waste management platform with a
              rewards system, incubated at KIIT-TBI.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research Intern</h4>
                <h5>NIT Rourkela</h5>
              </div>
              <h3>2024–25</h3>
            </div>
            <p>
              Hybrid deep learning research for brain tumor detection using
              U-Net++ and Swin Transformer. National Best Paper Award at RAECC
              2025.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern</h4>
                <h5>SDI Bhubaneswar</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Software development internship focused on building scalable
              applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hackathon Winner</h4>
                <h5>IIIT Bhubaneswar Hackfest</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              1st Prize for Gringotts FinTech, a fantasy stock trading platform
              gamified with AI and blockchain.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
