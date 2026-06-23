import React from 'react';
import '../styles/Hero.css';
import profilePicture from '../assets/pfp_linkedin.png';
import whatsappIcon from '../assets/Whatsapp.png';

const Hero: React.FC = () => {
  return (
    <div className="hero-container">
      <div className="left-section">
        <div className="terminal-bar">
          <span className="terminal-dot dot-red"></span>
          <span className="terminal-dot dot-yellow"></span>
          <span className="terminal-dot dot-green"></span>
          <span className="terminal-title">profile.sh</span>
        </div>
        <div className="terminal-body">
          <div className="profile-picture">
            <img src={profilePicture} alt="Foto de perfil" />
          </div>
          <div className="greeting">
            <p><span className="prompt">&gt;_</span> olá, eu sou</p>
            <h1>Gustavo Willian</h1>
          </div>
        </div>
      </div>

      <div className="right-section">
        <div id="sobre" className="scroll-anchor" />
        <div className="terminal-bar">
          <span className="terminal-dot dot-red"></span>
          <span className="terminal-dot dot-yellow"></span>
          <span className="terminal-dot dot-green"></span>
          <span className="terminal-title">whoami.sh</span>
        </div>
        <div className="terminal-body">
          <h2><span className="cmd-prefix">#</span> sobre_mim</h2>
          <p>
            Sou desenvolvedor backend de 24 anos, com foco em Node.js e seus
            frameworks. Formado em Ciência da Computação no Instituto Federal Goiano
            - Campus Morrinhos. Cultivo uma duradoura paixão e curiosidade pela
            tecnologia desde criança.
          </p>
          <a
            href="https://wa.me/5564984344807"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            <img src={whatsappIcon} alt="Logo do WhatsApp" />
            <span>&gt;_ contato</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
