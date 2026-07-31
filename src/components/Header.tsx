import React from "react";
import "../styles/Header.css";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import { useLanguage } from "../hooks/useLanguage";

const Header: React.FC = () => {
  const scrollToSection = useSmoothScroll();
  const { language, toggleLanguage, t } = useLanguage();

  const handleClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <header className="header">
      <span className="header-logo">GW</span>
      <nav className="navbar-center" aria-label={language === "pt" ? "Navegação principal" : "Main navigation"}>
        <a href="#sobre" onClick={(e) => handleClick(e, "sobre")}>
          {t("header.about")}
        </a>
        <a href="#stack-title" onClick={(e) => handleClick(e, "stack-title")}>
          {t("header.stack")}
        </a>
        <a href="#projetos-title" onClick={(e) => handleClick(e, "projetos-title")}>
          {t("header.projects")}
        </a>
      </nav>
      <button
        type="button"
        className="language-toggle"
        onClick={toggleLanguage}
        aria-label={language === "pt" ? "Switch to English" : "Mudar para português"}
      >
        {language === "pt" ? "EN" : "PT"}
      </button>
    </header>
  );
};

export default Header;
