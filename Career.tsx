import portfolioData from "../data/portfolioData";
import "./styles/Career.css";

const Career = () => {
    return (
        <div className="career-section section-container">
            <div className="career-container">
                <h2> My career <span>&</span> <br /> experience </h2>
                <div className="career-info">
                    {portfolioData.career.map((item, index) => (
                        <div key={index}>
                            <div className="career-timeline">
                                <div className="career-dot"></div>
                            </div>
                            <div className="career-info-box">
                                <div className="career-info-in">
                                    <div className="career-role">
                                        <h4>{item.position}</h4>
                                        <h5>{item.company || item.event}</h5>
                                    </div>
                                </div>
                                <p>
                                    {item.position === "Co-Founder" && "Building an IoT + ML smart waste management platform with a rewards system, incubated at KIIT-TBI."}
                                    {item.position === "Research Intern" && "Hybrid deep learning research for brain tumor detection using U-Net++ and Swin Transformer. National Best Paper Award at RAECC 2025."}
                                    {item.position === "Intern" && "Software development internship focused on building scalable applications."}
                                    {item.position === "Hackathon Winner" && "1st Prize for Gringotts FinTech, a fantasy stock trading platform gamified with AI and blockchain."}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Career;