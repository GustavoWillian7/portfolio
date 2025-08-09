import React from 'react';
import '../styles/Hero.css';
import profilePicture from '../assets/pfp_linkedin.png';
import whatsappIcon from '../assets/Whatsapp.png';

const Hero: React.FC = () => {
  return (
    <div className="hero-container">
      <div className="left-section">
        <div className="profile-picture">
          <img src={profilePicture} alt="Foto de perfil" />
        </div>
        <div className="greeting">
          <p>Olá, eu sou</p>
          <h1>Gustavo Willian</h1>
        </div>
      </div>
      <div className="right-section">
        <section id="sobre">
          <h2>Sobre mim</h2>
          <p>
            Sou desenvolvedor backend de 23 anos, com foco em Node.js e seus
            frameworks. Estudo Ciência da Computação no Instituto Federal Goiano
            - Campus Morrinhos. Cultivo uma duradoura paixão e curiosidade pela
            tecnologia desde criança.
          </p>
        </section>
        <a
          href="https://wa.me/5564984344807"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          <img src={whatsappIcon} alt="Logo do WhatsApp" />
          <span>Contato</span>
        </a>
      </div>
    </div>
  );
};

export default Hero;
