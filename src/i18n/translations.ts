export type Language = "pt" | "en";

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
    "projects.sistemac.description":
      "ERP fullstack em produção para restaurantes e varejo. Mantenho 3 serviços (Node/Express/MySQL, React, bot WhatsApp com NLP) com mais de 2.800 testes automatizados. Integrei iFood (homologado 60/60), Efí Bank, Stone POS, logística de motoboy e gateway de pagamento.",
    "projects.bot.description":
      "Bot autoral para Discord sobre língua japonesa. Quiz interativo, persistência de progresso dos usuários e integração com MongoDB. Em produção.",
    "projects.chat.description":
      "Bate-papo em tempo real com Node.js, Express, Socket.io e MongoDB. Comunicação bidirecional, salas e persistência de mensagens.",
    "projects.pastelaria.description":
      "Plataforma de jogos multiplayer em monorepo com Turborepo, Redis, Socket.io e Zod. Salas privadas, convidados e handlers separados por domínio.",
    "projects.reactflix.description":
      "Catálogo de filmes consumindo a API do TMDB. Interface responsiva construída com React, TypeScript e Tailwind CSS, com deploy funcional.",
    "projects.link.live": "Acesse",
    "projects.link.github": "GitHub",
    "projects.badge.production": "sistema em produção",

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
    "projects.sistemac.description":
      "Fullstack ERP in production for restaurants and retail. I maintain 3 services (Node/Express/MySQL, React, WhatsApp bot with NLP) with 2,800+ automated tests. Integrated iFood (approved 60/60), Efí Bank, Stone POS, delivery logistics and payment gateway.",
    "projects.bot.description":
      "Original Discord bot for Japanese language learners. Interactive quiz, user progress persistence and MongoDB integration. In production.",
    "projects.chat.description":
      "Real-time chat with Node.js, Express, Socket.io and MongoDB. Bidirectional communication, rooms and message persistence.",
    "projects.pastelaria.description":
      "Multiplayer game platform built as a monorepo with Turborepo, Redis, Socket.io and Zod. Private rooms, guests and domain-separated handlers.",
    "projects.reactflix.description":
      "Movie catalog consuming the TMDB API. Responsive interface built with React, TypeScript and Tailwind CSS, with live deploy.",
    "projects.link.live": "Live",
    "projects.link.github": "GitHub",
    "projects.badge.production": "production system",

    // Footer
    "footer.title": "contact.sh",
    "footer.headline": "let's talk?",
    "footer.bottom": "built with React + TypeScript",
  },
};
