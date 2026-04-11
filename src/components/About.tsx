import React from 'react';
import portfolioData from '../data/portfolioData';

const About = () => {
    return (
        <div>
            <h1>About Me</h1>
            <p>{portfolioData.description}</p>
        </div>
    );
};

export default About;