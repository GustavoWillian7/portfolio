import React from "react";
import ThataCosmeticos from "../assets/thatacosmeticos.jpg";
import ReactFlix from "../assets/reactflix.jpg";
import RealTimeChat from "../assets/real-time-chat.jpg";
import JapaneseDiscordBot from "../assets/japanese-discord-bot.jpg";
import "../styles/Projects.css";
import { useLanguage } from "../contexts/LanguageContext";

interface Project {
  key: string;
  name: string;
  image: string;
  githubUrl?: string;
  deployUrl?: string;
}

const Projects: React.FC = () => {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      key: "thata",
      name: "Thata Cosméticos",
      image: ThataCosmeticos,
      deployUrl: "https://www.thatacosmeticos.com",
    },
    {
      key: "bot",
      name: "Japanese Discord Bot",
      image: JapaneseDiscordBot,
      githubUrl: "https://github.com/GustavoWillian7/JapaneseDiscordBot",
    },
    {
      key: "chat",
      name: "Real Time Chat",
      image: RealTimeChat,
      githubUrl: "https://github.com/GustavoWillian7/RealTimeChat",
    },
    {
      key: "reactflix",
      name: "Reactflix",
      image: ReactFlix,
      githubUrl: "https://github.com/GustavoWillian7/Reactflix",
    },
  ];

  return (
    <section id="projetos" className="projects">
      <div className="projects-content">
        <h2>{t("projects.title")}</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.name} className="project-item">
              <div className="project-image">
                <img src={project.image} alt={project.name} />
              </div>
              <div className="project-info">
                <h3>{project.name}</h3>
                <p>{t(`projects.${project.key}.description`)}</p>
                <div className="project-links">
                  {project.deployUrl && (
                    <a
                      href={project.deployUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live"
                    >
                      {t("projects.link.live")}
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github"
                    >
                      {t("projects.link.github")}
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
