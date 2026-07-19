import React from "react";
import "../styles/TechStack.css";

import javascriptIcon from "../assets/JavaScript.png";
import typescriptIcon from "../assets/TypeScript.png";
import nodejsIcon from "../assets/Node.png";
import expressIcon from "../assets/Express.png";
import mongodbIcon from "../assets/MongoDB.png";
import mysqlIcon from "../assets/MySQL.png";
import dockerIcon from "../assets/Docker.svg";
import jestIcon from "../assets/Jest.svg";
import { useLanguage } from "../contexts/LanguageContext";

const TechStack: React.FC = () => {
  const { t } = useLanguage();

  const technologies = [
    { name: "JavaScript", icon: javascriptIcon },
    { name: "TypeScript", icon: typescriptIcon },
    { name: "Node.js", icon: nodejsIcon },
    { name: "Express", icon: expressIcon, dark: true },
    { name: "MongoDB", icon: mongodbIcon },
    { name: "MySQL", icon: mysqlIcon },
    { name: "Docker", icon: dockerIcon },
    { name: "Jest", icon: jestIcon },
  ];

  return (
    <section id="stack" className="tech-stack">
      <div className="tech-stack-content">
        <h2>{t("stack.title")}</h2>
        <div className="tech-images">
          {technologies.map((tech) => (
            <div key={tech.name} className="tech-item">
              <img
                src={tech.icon}
                alt={tech.name}
                className={`tech-image ${tech.dark ? "tech-image-dark" : ""}`}
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
