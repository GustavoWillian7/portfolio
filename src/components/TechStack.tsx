import React from 'react';
import '../styles/TechStack.css';
import javascriptIcon from '../assets/JavaScript.png';
import nodejsIcon from '../assets/Node.js.png';
import expressIcon from '../assets/Express.png';
import mongodbIcon from '../assets/MongoDB.png';
import jestIcon from '../assets/Jest.png';
import socketioIcon from '../assets/Socket.io.png';
import githubIcon from '../assets/GitHub.png';
import gitIcon from '../assets/Git.png';

const TechStack: React.FC = () => {
  const technologies = [
    { name: 'JavaScript', icon: javascriptIcon },
    { name: 'Node.js', icon: nodejsIcon },
    { name: 'Express', icon: expressIcon },
    { name: 'MongoDB', icon: mongodbIcon },
    { name: 'Jest', icon: jestIcon },
    { name: 'Socket.io', icon: socketioIcon },
    { name: 'GitHub', icon: githubIcon },
    { name: 'Git', icon: gitIcon },
  ];

  return (
    <section id="stack" className="tech-stack">
      <div className="tech-stack-content">
        <h2>Tech Stack</h2>
        <div className="tech-images">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-item">
              <img
                src={tech.icon}
                alt={tech.name}
                className="tech-image"
              />
              <p className="tech-name">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
