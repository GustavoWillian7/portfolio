import React from 'react';
import '../styles/Hero.css';
import profilePicture from '../assets/pfp_linkedin.png';
import whatsappIcon from '../assets/Whatsapp.png';
import { useLanguage } from '../contexts/LanguageContext';

const WHATSAPP_URL = 'https://wa.me/5564984344807';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();

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
            <img src={profilePicture} alt={language === 'pt' ? 'Foto de perfil' : 'Profile picture'} />
          </div>
          <div className="greeting">
            <p><span className="prompt">&gt;_</span> {t('hero.prefix')}</p>
            <h1>Gustavo Willian{t('hero.titleSuffix')}</h1>
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
          <h2><span className="cmd-prefix">#</span> {t('hero.aboutTitle')}</h2>
          <p>{t('hero.aboutText')}</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            <img src={whatsappIcon} alt="WhatsApp" />
            <span>&gt;_ {t('hero.contact')}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
