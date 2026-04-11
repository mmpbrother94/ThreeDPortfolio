import { portfolioData } from './path_to_portfolioData';

const Work = () => {
  return (
    <div>
      {portfolioData.projects.map((project) => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Work;