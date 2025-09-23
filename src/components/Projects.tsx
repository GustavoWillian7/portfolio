import React from "react";
import ThataCosmeticos from "../assets/thatacosmeticos.jpg";
import ReactFlix from "../assets/reactflix.jpg";
import RealTimeChat from "../assets/real-time-chat.jpg";
import JapaneseDiscordBot from "../assets/japanese-discord-bot.jpg";
import Toughts from "../assets/toughts.jpg";
import RandomPasswordGenerator from "../assets/random-password-generator.jpg";
import "../styles/Projects.css";

interface Project {
  name: string;
  description: string;
  image: string;
  githubUrl?: string;
  deployUrl?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      name: "Thata Cosméticos",
      description: "Plataforma e-commerce para venda de produtos de beleza.",
      image: ThataCosmeticos,
      deployUrl: "https://www.thatacosmeticos.com", 
    },
    {
      name: "Reactflix",
      description: "Um catálogo de filmes feito com React, TypeScript e Tailwind CSS.",
      image: ReactFlix,
      githubUrl: "https://github.com/GustavoWillian7/Reactflix",
    },
    {
      name: "Real Time Chat",
      description: "Bate papo em tempo real usando Node, Express, Socket.io e MongoDB.",
      image: RealTimeChat,
      githubUrl: "https://github.com/GustavoWillian7/RealTimeChat",
    },
    {
      name: "Japanese Discord Bot",
      description: "Chatbot feito para o aplicativo Discord utilizando Node, com foco em conhecimentos sobre a língua japonesa.",
      image: JapaneseDiscordBot,
      githubUrl: "https://github.com/GustavoWillian7/JapaneseDiscordBot",
    },
    {
      name: "Toughts",
      description: "Aplicação web para compartilhamento de pensamentos.",
      image: Toughts,
      githubUrl: "https://github.com/GustavoWillian7/Toughts",
    },
    {
      name: "Gerador de senha aleatória",
      description: "Gerador de senhas aleatórias com base nas preferências do usuário.",
      image: RandomPasswordGenerator,
      githubUrl: "https://github.com/GustavoWillian7/RandomPasswordGenerator",
    },
  ];

  return (
    <section id="projetos" className="projects">
      <div className="projects-content">
        <h2>Projetos</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <div className="project-image">
                <img src={project.image} alt={project.name} />
              </div>
              <div className="project-info">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  {project.deployUrl && (
                    <a
                      href={project.deployUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github"
                    >
                      Acesse
                    </a>
                  )}
                  {project.githubUrl && (
                     <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
