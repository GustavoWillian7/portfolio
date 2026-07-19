import React, { createContext, useContext, useState, useCallback } from "react";

type Language = "pt" | "en";

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

interface Translations {
  [language: string]: {
    [key: string]: string;
  };
}

export const translations: Translations = {
  pt: {
    // Header
    "header.about": "sobre_mim",
    "header.stack": "tech_stack",
    "header.projects": "projetos",

    // Hero
    "hero.prefix": "olá, eu sou",
    "hero.titleSuffix": "",
    "hero.aboutTitle": "sobre_mim",
    "hero.aboutText":
      "Sou desenvolvedor backend de 24 anos, com foco em Node.js e seus frameworks. Formado em Ciência da Computação no Instituto Federal Goiano - Campus Morrinhos. Cultivo uma duradoura paixão e curiosidade pela tecnologia desde criança.",
    "hero.contact": "contato",

    // Tech Stack
    "stack.title": "Tech Stack",

    // Projects
    "projects.title": "Projetos",
    "projects.thata.description":
      "E-commerce de beleza no ar com domínio próprio. Integração de catálogo, checkout e pagamento para uma cliente real.",
    "projects.bot.description":
      "Bot para Discord construído em Node.js com foco em conteúdo sobre língua japonesa. Autoral, interativo e em produção.",
    "projects.chat.description":
      "Bate-papo em tempo real com Node.js, Express, Socket.io e MongoDB. Foco em comunicação bidirecional e persistência de mensagens.",
    "projects.reactflix.description":
      "Catálogo de filmes consumindo a API do TMDB. Interface responsiva feita com React, TypeScript e Tailwind CSS.",
    "projects.link.live": "Acesse",
    "projects.link.github": "GitHub",

    // Footer
    "footer.title": "contato.sh",
    "footer.headline": "vamos conversar?",
    "footer.bottom": "desenvolvido com React + TypeScript",
  },
  en: {
    // Header
    "header.about": "about_me",
    "header.stack": "tech_stack",
    "header.projects": "projects",

    // Hero
    "hero.prefix": "hi, i'm",
    "hero.titleSuffix": "",
    "hero.aboutTitle": "about_me",
    "hero.aboutText":
      "I'm a 24-year-old backend developer focused on Node.js and its frameworks. I hold a Computer Science degree from Instituto Federal Goiano - Campus Morrinhos. I've nurtured a lasting passion and curiosity for technology since I was a child.",
    "hero.contact": "contact",

    // Tech Stack
    "stack.title": "Tech Stack",

    // Projects
    "projects.title": "Projects",
    "projects.thata.description":
      "Beauty e-commerce live with its own domain. Catalog, checkout, and payment integration for a real client.",
    "projects.bot.description":
      "Discord bot built with Node.js focused on Japanese language content. Original, interactive, and in production.",
    "projects.chat.description":
      "Real-time chat using Node.js, Express, Socket.io, and MongoDB. Focused on bidirectional communication and message persistence.",
    "projects.reactflix.description":
      "Movie catalog consuming the TMDB API. Responsive interface built with React, TypeScript, and Tailwind CSS.",
    "projects.link.live": "Live",
    "projects.link.github": "GitHub",

    // Footer
    "footer.title": "contact.sh",
    "footer.headline": "let's talk?",
    "footer.bottom": "built with React + TypeScript",
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("pt");

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  }, []);

  const t = useCallback(
    (key: string) => {
      return translations[language][key] ?? key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
