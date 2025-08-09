import React from 'react';
import '../styles/Header.css';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const Header: React.FC = () => {
  const scrollToSection = useSmoothScroll();

  return (
    <header className="header">
      <div className="navbar-center">
        <a href="#sobre" onClick={(e) => { e.preventDefault(); scrollToSection('sobre'); }}>
          Sobre mim
        </a>
        <a href="#stack" onClick={(e) => { e.preventDefault(); scrollToSection('stack', 100); }}>
          Tech Stack
        </a>
        <a href="#projetos" onClick={(e) => { e.preventDefault(); scrollToSection('projetos', 100); }}>
          Projetos
        </a>
      </div>
    </header>
  );
};

export default Header;
