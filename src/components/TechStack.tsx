import React from "react";
import "../styles/TechStack.css";

import javascriptIcon from "../assets/JavaScript.png";
import nodejsIcon from "../assets/Node.png";
import mongodbIcon from "../assets/MongoDB.png";
import gitIcon from "../assets/Git.png";

import typescriptIcon from "../assets/TypeScript.png";
import expressIcon from "../assets/Express.png";
import mysqlIcon from "../assets/MySQL.png";
import githubIcon from "../assets/GitHub.png";

const TechStack: React.FC = () => {
  const technologies = [
    { name: "JavaScript", icon: javascriptIcon },
    { name: "Node.js", icon: nodejsIcon },
    { name: "MongoDB", icon: mongodbIcon },
    { name: "Git", icon: gitIcon },
    { name: "TypeScript", icon: typescriptIcon },
    { name: "Express", icon: expressIcon },
    { name: "MySQL", icon: mysqlIcon },
    { name: "GitHub", icon: githubIcon },
  ];

  return (
    <section id="stack" className="tech-stack">
      <div className="tech-stack-content">
        <h2>Tech Stack</h2>
        <div className="tech-images">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-item">
              <img src={tech.icon} alt={tech.name} className="tech-image" />
              <p className="tech-name">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
