import React from "react";
import "../styles/Header.css";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

const Header: React.FC = () => {
  const scrollToSection = useSmoothScroll();

  const handleSobreMimClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const width = window.innerWidth;
    let extraOffset = 0;

    if (width === 375 && window.innerHeight === 667) {
      extraOffset = -100;
    } else if (width === 412 && window.innerHeight === 915) {
      extraOffset = -375;
    } else if (width === 768 && window.innerHeight === 1024) {
      extraOffset = -150;
    } else if (width === 912 && window.innerHeight === 1368) {
      extraOffset = -475;
    }

    scrollToSection("sobre", extraOffset);
  };

  return (
    <header className="header">
      <div className="navbar-center">
        <a href="#sobre" onClick={handleSobreMimClick}>
          Sobre mim
        </a>
        <a
          href="#stack"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("stack", 150);
          }}
        >
          Tech Stack
        </a>
        <a
          href="#projetos"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("projetos", 150);
          }}
        >
          Projetos
        </a>
      </div>
    </header>
  );
};

export default Header;
