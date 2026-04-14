import { useState } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import portfolioData from "../data/portfolioData";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Work = () => {
  const [current, setCurrent] = useState(0);
  const projects = portfolioData.projects;

  const prev = () =>
    setCurrent((c) => (c - 1 + projects.length) % projects.length);
  const next = () =>
    setCurrent((c) => (c + 1) % projects.length);

  return (
    <div className="work-section section-container" id="work">
      <div className="work-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={prev}
            aria-label="Previous project"
          >
            <MdChevronLeft />
          </button>
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {projects.map((project, i) => (
                <div className="carousel-slide" key={project.title}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>{String(i + 1).padStart(2, "0")}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>
                        <p>{project.description}</p>
                        <div className="carousel-tools">
                          <p className="tools-label">Tools</p>
                          <p>{project.techStack.join(" / ")}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={next}
            aria-label="Next project"
          >
            <MdChevronRight />
          </button>
          <div className="carousel-dots">
            {projects.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot${
                  i === current ? " carousel-dot-active" : ""
                }`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;