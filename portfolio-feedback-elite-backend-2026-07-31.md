> # Feedback Consolidado — Portfolio Backend Elite
>
> **Autor do feedback:** Claude Code (sessão SistemacWeb, 2026-07-31)
> **Destinatário:** Gustavo Willian
> **Objetivo:** Orientar evolução do portfolio pessoal (https://portfolio-roan-omega-n3sv1b6jhn.vercel.app/) para comunicar com clareza que você é um desenvolvedor backend sênior/pleno forte, mesmo atuando full stack no dia a dia.
> **Como usar:** envie este arquivo para o Claude Code que for atuar na pasta clonada do portfolio. Ele deve ler integralmente antes de propor mudanças.

---

## 1. VISÃO GERAL E DIAGNÓSTICO

O portfolio atual é tecnicamente sólido para o nível de projeto pessoal:

- React 19 + TypeScript + Vite, sem libs de UI externas.
- i18n (PT/EN) via Context API + hook próprio.
- SEO/meta tags completas (Open Graph, Twitter Cards).
- Animação MatrixRain em canvas com controle de FPS.
- Scroll customizado com easing cúbico.

**O problema principal:** o portfolio ainda parece de **desenvolvedor frontend/júnior que faz projetos pessoais**. Ele não comunica ainda que você mantém um ERP real em produção, com 2.800+ testes, múltiplos serviços, integrações bancárias/iFood/POS e um bot WhatsApp com NLP. Esse gap é o maior a ser corrigido.

**Segundo problema:** algumas tecnologias expostas na Tech Stack não são comprovadas por repositórios públicos (Docker e Jest). Como você quer manter Docker, a recomendação é criar um projeto novo que de fato use Docker, ou referenciar o SistemacWeb se lá houver uso interno (hoje não há Dockerfile no repo público). Jest pode ser mantido porque o SistemacWeb o usa massivamente.

---

## 2. PROJETOS ATUAIS NO PORTFOLIO — ANÁLISE INDIVIDUAL

### 2.1 Thata Cosméticos — REMOVER

- **Por quê:** o cliente não paga mais o site/dominio, o projeto não está no ar.
- **Você não tem repositório** — era feito no WordPress, então não há código para mostrar.
- **Risco de manter:** link quebrado ou projeto não verificável prejudica a credibilidade.
- **Decisão:** remover o card do grid.

### 2.2 Japanese Discord Bot — MANTER

- **Por quê:** projeto autoral, está em produção, usa MongoDB.
- **O que melhorar:** descrição pode destacar quiz interativo e persistência de progresso.
- **Não é "simples demais" para portfolio** — é um produto autoral rodando.

### 2.3 Real Time Chat — SUBSTITUÍVEL

- **Por quê:** é o mais básico dos 4. CRUD + Socket.io + MongoDB.
- **Veredito:** se o grid for mantido com 4–5 cards, esse é o primeiro a sair. Se expandirmos para 6 cards, pode ficar, mas sem destaque.
- **Substitutos ideais:** `partygames` ou `momentum` cobrem o mesmo nicho (comunicação/tempo real) com arquitetura muito mais forte.

### 2.4 Reactflix — MANTER

- **Por quê:** único projeto com deploy funcional e código TypeScript moderno no front.
- **Importante:** mostra que você entrega interfaces, mesmo sendo backend de coração.
- **O que melhorar:** o print `reactflix.jpg` pesa 723KB — otimizar.

---

## 3. PROJETOS CANDIDATOS A ENTRAR

### 3.1 Sistemac Web — ENTRAR COMO CASE PRINCIPAL (OBRIGATÓRIO)

- **Por quê:** é de longe o projeto mais significativo.
- **Dados para comunicar:**
  - ERP fullstack real em produção.
  - 3 serviços (backend Node/Express/Sequelize/MySQL, frontend React, bot-wpp Node/wppconnect/node-nlp).
  - Backend com 2.800+ testes Jest, bot-wpp com 275+ testes.
  - Integrações: iFood (homologado 60/60), Efí Bank, POS Stone, etc.
  - NLP com node-nlp, Socket.IO em tempo real.
  - Documentação viva: `docs/INDICE.md`, `CLAUDE.md`, `docs/ativo/`, `docs/testes/`, `docs/historico/`.
- **Como expor sem vazar código:**
  - Não linkar o repositório privado.
  - Criar card de **case study** com arquitetura, desafios e tecnologias.
  - Usar números e escopo como prova social.
- **Posição sugerida:** primeiro card, talvez com destaque visual (maior, badge "Sistema em produção").

### 3.2 Momentum — ENTRAR

- **Por quê:** sai completamente do CRUD comum. FFmpeg, buffer contínuo, upload YouTube via OAuth2, live streaming RTMP.
- **Ressalva:** ainda em desenvolvimento, frontend é `App.tsx` único, sem testes.
- **Como expor:** marcar como "em desenvolvimento" até ter um vídeo/GIF de demonstração. Sem demo, o visitante pode não entender o valor.
- **Posição sugerida:** segundo ou terceiro card.

### 3.3 PastelariaGames (partygames) — ENTRAR

- **Por quê:** arquitetura de nível acima do RealTimeChat.
- **Stack forte:** Turborepo + pnpm, React + TypeScript, Socket.io, Redis, MongoDB, Zod, Zustand, Framer Motion.
- **Status:** parado, mas você confirmou que funciona razoavelmente.
- **Como expor:** destacar a arquitetura (monorepo, handlers separados por domínio, schemas compartilhados). Não precisa estar online para impressionar tecnicamente.
- **Posição sugerida:** segundo ou terceiro card.

### 3.4 Habit Tracker — NÃO ENTRAR AGORA

- **Por quê:** você confirmou que está parado e incompleto.
- **Decisão:** aguardar até ter funcionalidades core funcionando e deploy.

### 3.5 TFTHero — NÃO ENTRAR AGORA

- **Por quê:** README já admite que é "projeto de estudo" e próximo passo é migrar para React/Vue. Frontend é JS puro, backend é proxy simples.
- **Decisão:** deixar fora até fazer uma versão mais madura.

---

## 4. GRID FINAL RECOMENDADO

**Atualizado após confirmar que Thata Cosméticos não está mais no ar.**

Opção A (5 cards) — **recomendada**:

1. **Sistemac Web** — case de produção (ERP multi-cliente, 2.800+ testes, 3 serviços).
2. **Momentum** — automação de vídeo (FFmpeg, YouTube API, live streaming RTMP).
3. **PastelariaGames** — multiplayer/monorepo/Redis/Socket.io.
4. **Reactflix** — frontend TypeScript moderno, deploy funcional.
5. **Japanese Discord Bot** — bot autoral em produção.

Opção B (4 cards):

1. **Sistemac Web**
2. **Momentum**
3. **PastelariaGames**
4. **Reactflix**

Opção C (4 cards focado em backend):

1. **Sistemac Web**
2. **Momentum**
3. **PastelariaGames**
4. **Japanese Discord Bot**

Recomendação pessoal: **Opção A com 5 cards**. Ela comunica todas as facetas: produção real, arquitetura complexa, frontend entregável e produto autoral. Sem o Thata, o Sistemac Web passa a ser a prova de entrega de valor real.

---

## 5. AJUSTES DE UX — SCROLL DA NAVBAR

**Problema visualizado em:** `docs/temp/screenshot.217.jpg` e `docs/temp/screenshot.218.jpg`.

**O que acontece:** ao clicar em "tech_stack" ou "projetos", o scroll para com o título da seção muito próximo do topo da viewport, quase cortado. O usuário fica um pouco acima do conteúdo real.

**Causa provável:** `useSmoothScroll.ts` usa `HEADER_HEIGHT = 100` como offset, mas o cálculo não está deixando margem suficiente. Além disso, a duração de 800ms pode parecer lenta.

**Correções solicitadas:**

1. Aumentar o offset para que o título da seção fique mais abaixo do header. Sugerir: `HEADER_HEIGHT = 100` + margem extra (ex: 40–80px), resultando em `SECTION_OFFSET = 140–180`.
2. Reduzir a duração da animação. Sugerir: `DURATION = 500–600ms` em vez de 800ms.
3. Testar nos 3 links ("sobre_mim", "tech_stack", "projetos") garantindo que cada seção comece visível abaixo do header com respiro.
4. Considerar usar `element.getBoundingClientRect()` + `window.scrollY` em vez de `element.offsetTop` para maior precisão cross-browser.

---

## 6. TECH STACK — AJUSTE RECOMENDADO

**Stack atual no site:** JavaScript, TypeScript, Node.js, Express, MongoDB, MySQL, Docker, Jest.

**Problema:** Docker e Jest não aparecem em nenhum repositório público seus hoje.

**Decisão do autor:** manter Docker na stack.

**Como justificar:**

- **Docker:** criar um projeto novo (recomendado abaixo) que use Docker de verdade, ou adicionar uma nota de que está em uso em ambientes de desenvolvimento.
- **Jest:** mantido porque o SistemacWeb usa massivamente (2.800+ testes no backend, 275+ no bot-wpp).

**Tecnologias que faltam e deveriam aparecer:**

- **Socket.IO** — usado em RealTimeChat, partygames e SistemacWeb.
- **Redis** — usado em partygames.
- **React + Vite** — usado em Reactflix, momentum, partygames, SistemacWeb frontend.
- **Tailwind CSS** — usado em Reactflix, momentum, partygames.
- **PostgreSQL / Supabase** — usado em habit-tracker (só se mantiver o projeto no radar futuro).
- **NLP / wppconnect** — usado no SistemacWeb bot-wpp (diferenciador forte).
- **Sequelize / Prisma** — usado em SistemacWeb backend.

**Stack sugerida a exibir (máximo 8–10 ícones para não poluir):**

1. JavaScript
2. TypeScript
3. Node.js
4. Express
5. React
6. Socket.IO
7. MongoDB
8. MySQL
9. Redis
10. Docker
11. Jest

Se precisar reduzir, manter: JS, TS, Node, Express, React, Socket.IO, MongoDB, MySQL, Docker, Jest. Redis pode ficar no card do partygames em vez de na stack geral.

---

## 7. MELHORIAS TÉCNICAS RÁPIDAS NO PORTFÓLIO

1. **Otimizar imagens:**
   - `pfp_linkedin.png` (1.6MB) → WebP/AVIF, <= 200KB.
   - `reactflix.jpg` (723KB) → WebP, <= 150KB.
   - Remover `thatacosmeticos.jpg` — o projeto Thata Cosméticos saiu do portfolio.
2. **Remover assets órfãos:** `random-password-generator.jpg`, `toughts.jpg` e `thatacosmeticos.jpg`.
3. **Adicionar ESLint + Prettier + GitHub Actions:** mostra prática de pipeline (importante para backend dev).
4. **Corrigir `html lang` dinâmico:** alternar entre `pt-BR` e `en` junto com o idioma selecionado.
5. **Reformula descrições dos projetos:** focar em problema → solução → impacto, não só stack.
6. **Reposicionar WhatsApp no Hero:** para vagas formais, LinkedIn + GitHub + e-mail transmitem mais profissionalismo. WhatsApp pode ir para footer ou ser link secundário.

---

## 8. NOVOS PROJETOS — RECOMENDAÇÕES COM DOCKER

Como você quer manter Docker na stack, crie pelo menos um projeto público que use Docker de verdade. Ideias alinhadas ao seu perfil backend:

### 8.1 Microserviço de filas com Docker

- **Idea:** API Node/Express que recebe jobs, enfileira em Redis/Bull, processa em worker separado, persistência em Postgres.
- **Docker:** `docker-compose.yml` com app, worker, Redis, Postgres.
- **Por quê:** mostra arquitetura de filas, containers, persistência, separação de responsabilidades.
- **Inspiração no SistemacWeb:** o bot-wpp já usa jobs/intervalos; uma versão educacional e containerizada seria natural.

### 8.2 API de gateway/pagamentos simulada

- **Idea:** gateway que simula adquirente (igual Efí Bank/Stone no Sistemac), com webhooks, idempotência, conciliação e Docker.
- **Por quê:** mostra domínio financeiro, transações, idempotência — tudo que você já faz no Sistemac.

### 8.3 Sistemac Web Lite (open-source / demonstração)

- **Idea:** extrair um módulo pequeno do Sistemac (ex: cardápio digital ou bot simplificado) em repo público, containerizado.
- **Cuidado:** não expor código real nem dados sensíveis. Reescrever do zero um subset didático.

### 8.4 CLI/DevOps tool

- **Idea:** ferramenta CLI em Node para automatizar algo que você faz no Sistemac (ex: gerar migrations, verificar integrações, backup de sessões WhatsApp).
- **Docker:** imagem publicada no Docker Hub/ GHCR, CI via GitHub Actions.
- **Por quê:** backend dev que constrói ferramentas para outros devs é um sinal forte.

Recomendação prioritária: **8.1 (microserviço de filas)**. É o mais rápido de implementar e tem ressonância direta com o que você já opera.

---

## 9. ESTRUTURAÇÃO DE NOVOS PROJETOS — COPIAR DO SISTEMACWEB

Para novos projetos, aplique a mesma disciplina de documentação e organização que o SistemacWeb usa. Isso acelera manutenção e impressiona quem olha o repositório.

**Copiar/adaptar:**

1. **`README.md` robusto:** stack, como rodar, scripts, arquitetura, variáveis de ambiente, decisões.
2. **`CLAUDE.md`:** instruções para futuras sessões do Claude Code (você já sentiu o valor disso).
3. **`docs/INDICE.md`:** índice temático de toda a documentação.
4. **`docs/ativo/`:** planos de implementação, status, integrações.
5. **`docs/testes/`:** bugs encontrados, roteiros de teste, análises.
6. **`docs/historico/`:** erros resolvidos (read-only).
7. **`__tests__/`:** testes unitários no bot-wpp/backend (padrão Jest).
8. **Regras de commit/documentação:** atualizar docs junto com código.

**Não copiar cegamente:**

- Não levar complexidade desnecessária para projetos pequenos.
- Adaptar a escala: um microserviço de filas não precisa de 2800 testes, mas precisa de README claro e alguns testes de contrato.

---

## 10. DICAS CONSOLIDADAS PARA PORTFÓLIOS DE ELITE (BACKEND)

Baseado em padrões observados em portfólios que abrem portas para vagas backend/pleno/sênior:

### 10.1 Comunique escala e impacto

- Backend é julgado por **escala, confiabilidade e arquitetura**.
- Frases fracas: "usei Node.js e Express".
- Frases fortes: "sistema processando X transações/dia", "3 microserviços com comunicação em tempo real", "2.800+ testes automatizados", "deploy contínuo em produção".

### 10.2 Tenha um "case de produção"

- Um projeto real em produção vale mais que 10 CRUDs pessoais.
- O SistemacWeb é esse case. Ele deve ser a peça central do portfolio.

### 10.3 Mostre decisões arquiteturais

- Não basta listar tecnologias. Explique **por que** escolheu cada uma.
- Exemplo: "Usei Redis para estado transiente das salas porque MongoDB sozinho não escalaria reconexões rápidas."

### 10.4 Documentação como prova de senioridade

- Repositórios bem documentados (README, decisões, testes) transmitem mais confiança que código com 200 stars e sem docs.
- O SistemacWeb já tem essa cultura; replicá-la em projetos públicos é um diferencial enorme.

### 10.5 Diversidade de bancos de dados

- Mostre que você escolhe banco pelo problema, não pelo hype.
- Hoje você tem: MySQL (Sistemac), MongoDB (RealTimeChat, partygames, bot), Redis (partygames), Postgres/Supabase (habit-tracker).
- Isso já é bom. Pode comunicar melhor.

### 10.6 CI/CD e testes visíveis

- Adicionar GitHub Actions rodando `tsc`, `eslint` e `jest` em projetos públicos mostra prática de engenharia.
- Mesmo um workflow simples já eleva a percepção.

### 10.7 Evite "stack inflada"

- Não liste tecnologias que você não usa de verdade. Se mantiver Docker, confirme que há projeto Dockerizado para apontar.

### 10.8 Design é importante, mas não o centro

- O tema "terminal/hacker" é legal e tem identidade. O portfolio não precisa virar Dribbble. Ele precisa ser legível, rápido e fazer o visitante entender rapidamente que você resolve problemas difíceis no backend.

---

## 11. PROJETOS JÁ BONS VS PROJETOS FALTANTES

### Já bons para o portfolio:

- ✅ **SistemacWeb** (precisa ser exposto como case — é a prova de produção real).
- ✅ **Momentum** (diferenciado técnico, mas precisa de demo).
- ✅ **PastelariaGames** (arquitetura forte).
- ✅ **Reactflix** (frontend moderno, deploy funcional).
- ✅ **JapaneseDiscordBot** (autoral, em produção).

### Faltando para portfolio de elite:

- ❌ **Projeto com Docker de verdade.**
- ❌ **Projeto com testes visíveis** (Jest no repositório público).
- ❌ **Pipeline de CI/CD** em algum repo público.
- ❌ **Projeto com filas/background jobs** (pode ser o microserviço Docker).
- ❌ **Projeto com PostgreSQL/Supabase maduro** (habit-tracker ainda incompleto).

### Podem sair sem perda:

- ⚠️ **RealTimeChat** (coberto por partygames e Sistemac).
- ⚠️ **Toughts / RandomPasswordGenerator** (já não estão no site, mas ainda ocupam assets no repo).
- ⚠️ **Thata Cosméticos** (remover — não está mais no ar e não tem repo).
- ⚠️ **TFTHero** (incompleto, frontend legado).

---

## 12. PRÓXIMOS PASSOS PRIORIZADOS

### Fase 1 — Ajustes rápidos no portfolio existente (1–2 dias)

1. Otimizar `pfp_linkedin.png` e `reactflix.jpg`.
2. Remover assets órfãos.
3. Corrigir scroll da navbar (mais rápido + offset maior).
4. Ajustar Tech Stack: adicionar Socket.IO, React, Redis; manter Docker/Jest.
5. Reformular descrições dos projetos para impacto.
6. Adicionar card do **SistemacWeb** como case principal.

### Fase 2 — Reestruturação dos projetos exibidos (1 semana)

7. Adicionar **Momentum** e **PastelariaGames** ao grid.
8. Decidir se **RealTimeChat** sai ou fica.
9. Criar READMEs/documentação consistentes nos projetos que entrarem (aplicar padrão SistemacWeb).

### Fase 3 — Fechar gaps de stack (2–4 semanas)

10. Criar microserviço de filas com Docker + testes Jest + GitHub Actions.
11. Adicionar CI/CD ao portfolio e aos projetos principais.
12. Gravar demo curta do Momentum.

---

## 13. NOTAS PARA O CLAUDE QUE VAI APLICAR

- **Não remover Docker da Tech Stack.** O autor quer mantê-lo.
- **Adicionar SistemacWeb como case.** Não linkar repositório privado; usar descrição de case study.
- **Priorizar backend.** Mesmo que o portfolio tenha front, o storytelling deve girar em torno de arquitetura, escala, APIs, bancos, testes, integrações.
- **Aplicar padrão SistemacWeb** em novos projetos: README, CLAUDE.md, docs/INDICE.md, docs/ativo/, docs/testes/, testes Jest.
- **Ajustar scroll da navbar** observando os screenshots `docs/temp/screenshot.217.jpg` e `docs/temp/screenshot.218.jpg`.
- **Não esquecer:** o portfólio precisa passar a impressão de que o autor mantém sistemas reais, não apenas faz CRUDs de estudo.

---

## 14. RESUMO DETALHADO DO SISTEMACWEB (PARA O PRÓXIMO CLAUDE CODE)

> **Atenção:** este resumo foi escrito com base nos READMEs, na documentação viva (`docs/INDICE.md`, `docs/ativo/`, `docs/testes/`, `docs/historico/`) e nas memórias de sessão do SistemacWeb. Ele existe para que o próximo Claude Code, atuando na pasta clonada do portfolio, não precise navegar pelo repositório privado do SistemacWeb para entender o projeto.  
> **Regra de uso no portfolio:** não linkar o repo privado, não expor credenciais, clientes, dados reais nem printar trechos de código proprietário. Use apenas os números, o escopo arquitetural e os desafios como prova social no card/case study.

### 14.1 O que é o SistemacWeb

Plataforma ERP fullstack real, em produção, voltada para restaurantes, lanchonetes, comércios de alimentação e varejo. Gerencia cadastro, estoque, vendas, pré-venda, comandas/mesas, delivery, controle de caixa, documentos fiscais (NFC-e/NF-e), integrações de delivery (iFood, OpenDelivery, Foody), logística de motoboy (Gaudium/Machine), gateway de pagamento (Efí Bank), assinaturas B2B e atendimento via WhatsApp com NLP.

### 14.2 Arquitetura de alto nível

Três serviços compartilhando o mesmo banco MySQL 8:

| Serviço     | Tecnologia                                                                 | Porta | Responsabilidade                                                                                                     |
| ----------- | -------------------------------------------------------------------------- | ----- | -------------------------------------------------------------------------------------------------------------------- |
| `backend/`  | Node.js 20 + Express 4 + Sequelize 6 + MySQL2                              | 3001  | Núcleo do ERP: API REST monolítica com lógica de negócio, integrações, NFe, caixa, pedidos, financeiro, assinaturas. |
| `frontend/` | React 18 + react-router-dom v6 + Material-UI v5 + Bootstrap 5 + Sass/SCSS  | 3000  | Painel administrativo (~60+ telas) e páginas públicas (cardápio digital `/menu`, loja varejo `/loja`, login).        |
| `bot-wpp/`  | Node.js + Express + `@wppconnect-team/wppconnect` + `node-nlp` + Socket.IO | 3002  | Microsserviço de WhatsApp: sessões, mensagens transacionais, atendimento automatizado, notificações em tempo real.   |

**Comunicação entre serviços:**

- `frontend` → `backend` via HTTP REST (Axios) e Socket.IO.
- `backend` → `bot-wpp` via HTTP REST (`localhost:3002`) e Socket.IO client.
- `bot-wpp` → `backend` via Socket.IO (eventos de mensagens/status de sessão).
- Todos leem/escrevem no **mesmo banco MySQL** (`sistemac`).

**Deploy:** PM2 na raiz do projeto (`ecosystem.config.js`), com Nginx como proxy reverso. Não usa Docker em produção hoje (analisado e descartado para a escala atual).

### 14.3 Backend — detalhes técnicos

- **Stack:** Node.js 20+, Express 4, Sequelize 6 (MySQL2), JWT, Multer + Sharp, Socket.IO, `nfewizard-io` para NFe/NFCe, Jest 30.
- **Camadas:** Router → Middleware → Controller → Service → Repository → Model. Cada camada tem responsabilidade única.
- **Pastas principais:** `models/`, `migrations/`, `controllers/`, `services/`, `repositories/`, `routers/`, `middlewares/`, `helpers/`, `constants/`, `workers/`, `utils/` (NFe, impressora, bot).
- **Testes unitários:** ~251 suites / ~2.800–2.900 testes no backend (cobertura controllers ~100%, services ~77%, repositories ~75%, helpers ~100%). Testes ficam em `__tests__/` junto ao código e são untracked.
- **Rotas principais (exemplos):**
  - `/api/login`, `/api/organizacao`, `/api/empresa`
  - `/api/pedido-mesa` (criar/listar/fechar múltiplo/NFC-e/NF-e)
  - `/api/produto`, `/api/secao`, `/api/estoque`, `/api/compra`
  - `/api/venda`, `/api/nfe`, `/api/nfce`
  - `/api/etiquetas/*` (gerar/preview/imprimir lote, templates ZPL)
  - `/api/assinaturas/*`, `/api/planos-assinatura/*`
  - `/api/webhooks/efi/*` (webhooks públicos de Pix/assinatura)
  - `/api/pos/*` (transações e terminais Stone POS)
  - `/api/gaudium/*`, `/api/webhooks/machine`
- **Integrações externas no backend:**
  - **Foody Delivery:** ativa em produção.
  - **iFood:** implementação completa, homologação automática aprovada 60/60 em 2026-06-15; card liberado no frontend.
  - **OpenDelivery:** completa, em sandbox (`/sb/v1`).
  - **Gaudium/Machine (logística de motoboy):** completa, em testes internos.
  - **Efí Bank:** Pix CobV (B2B), boleto fallback, webhooks com assinatura `x-efi-secret`.
  - **Mercado Pago:** plano de integração ativo (PIX para pedidos).
  - **Stone POS:** SDK Android nativo (Kotlin) integrado ao backend via `/api/pos/transacao-local`; homologação Partner Hub em andamento.
- **Documentos fiscais:** NFC-e e NF-e (emissão, cancelamento, DANFE, validação de GTIN/EAN-13, certificado A1, SEFAZ, manifestação).
- **Assinaturas B2B:** planos, carência, suspensão, reativação, geração de cobrança, webhook Efí.
- **Performance:** otimizações reais em produção — índices MySQL (FULLTEXT, B-tree, composite), `raw: true`, refatoração de `findAndCountAll` para `count`+`findAll`, cache de `org-data` no frontend.

### 14.4 Frontend — detalhes técnicos

- **Stack:** React 18 (CRA), react-router-dom v6, Material-UI v5, Bootstrap 5 + react-bootstrap, Sass/SCSS, Axios, Socket.IO client, Chart.js, html5-qrcode.
- **Estrutura:** `components/`, `private/` (painel admin), `public/` (páginas abertas), `routes/`, `services/`, `styles/`, `utils/`.
- **Estado global via Context API:** AuthContext, MenuContext, NotificationContext, BannerContext, GlobalAudioContext. Sem Redux/Zustand.
- **HTTP:** todo service usa `BaseService.js` (axios instance com interceptores que injetam `Authorization`, `cod_org`, `cod_empresa`). Regra explícita: nunca criar `axios.create()` solto.
- **Telas privadas principais:** Pedidos (Kanban), PDV, Estoque, Cadastros (produtos, clientes, funcionários), NFe/NFCe, Financeiro, Relatórios, Integrações, Configurações.
- **Páginas públicas:** `/menu/:empresa` (delivery), `/loja/:empresa` (varejo), `/app/pdv`, `/app/mesas` (garçom), login.
- **Responsividade:** plano ativo de responsividade para telas privadas, começando por Pedidos. PDV mobile-first (`AppMobile/Pdv/`) já implementado.
- **Permissões:** controle granular via `checkPermission('NomePermissao')`; novas permissões devem ser registradas em `frontend/src/private/CadUsuario/permissoesConfig.js`.

### 14.5 Bot-WPP — detalhes técnicos

- **Stack:** Node.js, Express, `@wppconnect-team/wppconnect` (WhatsApp Web via Puppeteer), `node-nlp`, Sequelize, Socket.IO, JWT.
- **Funções:**
  - Gerenciar sessões WhatsApp (QR code, conexão, reconexão, desconexão, logout).
  - Enviar mensagens transacionais (pedido novo, alterado, status de produção, pré-venda varejo).
  - Atendimento automático com NLP (`node-nlp`) para intents como cardápio, endereço, tempo de entrega, atendimento humano.
  - Rate limiting inbound (3s por conversa).
  - Fallback LLM via Groq API quando NLP não entende (quando `GROQ_API_KEY` configurada).
  - Horário de funcionamento e fila de espera ("avisar quando abrir").
  - Painel administrativo de status e logs de falhas.
- **Modelo NLP:** treinado em `src/utils/bot/modelo-delivery.nlp`. Para retreinar, apaga-se o arquivo e reinicia o serviço. Cuidado: `@nlpjs/nlp` tem auto-save embutido que causou incidente em produção (documentado).
- **Healthcheck:** rodando a cada 5 minutos, remove sessões travadas após 3 falhas consecutivas. Guarda `healthcheckEmAndamento` adicionada em 2026-07-31 para evitar sobreposição.
- **Logs:** logger centralizado compatível com Winston, `LOG_LEVEL` configurável, emoji logs estratégicos em produção.
- **Testes:** ~14 suites / ~270–275 testes unitários no bot-wpp.
- **Pontos de atenção de produção reais:** tokens corrompidos após restart sem `kill_timeout` suficiente, memória do Chromium (~300–800MB por sessão), pasta `tokens/` precisa de permissão de escrita, `.env` separado do backend.

### 14.6 Cultura de engenharia e documentação

- **Documentação é obrigatória:** regra do CLAUDE.md — toda mudança relevante deve atualizar docs na mesma sessão.
- **Estrutura de docs:**
  - `docs/INDICE.md` — índice temático.
  - `docs/ativo/` — planos de implementação, integrações, correções ativas.
  - `docs/testes/` — bugs em investigação, roteiros de teste, análises.
  - `docs/historico/` — erros resolvidos (read-only, exceto novo arquivo).
- **Processo de desenvolvimento:** workflow de IA com checklist para bugs/ajustes e SDD (requirements + design + tasks + gate) para features grandes/integrações. Inclui as "4 falhas do Karpathy" como gate de revisão.
- **Testes:** Jest massivo no backend, testes no bot-wpp, testes de frontend com React Testing Library. Toda alteração de comportamento exige teste/regressão.
- **Regras de código importantes:**
  - Nunca editar migrations já rodadas em produção; criar nova.
  - Sempre usar transações quando tocar múltiplas tabelas.
  - Nunca retornar senhas/tokens em JSON.
  - Preferir `raw: true` em listagens simples.
  - Graceful shutdown; nunca `process.exit()`.
  - Botões de escrita no frontend devem ser idempotentes (loading + disable).

### 14.7 Números e provas sociais para usar no portfolio

Esses números podem ir no card/case study do SistemacWeb:

- **3 serviços** em produção (backend, frontend, bot-wpp).
- **~2.800–2.900 testes automatizados** só no backend; ~270–275 no bot-wpp; frontend com centenas de suites.
- **5+ integrações externas** conectadas (iFood, OpenDelivery, Foody, Gaudium/Machine, Efí Bank, Mercado Pago, Stone POS).
- **60/60** na homologação automática iFood.
- **Documentação viva** com dezenas de arquivos em `docs/ativo/`, `docs/testes/`, `docs/historico/`.
- **NLP próprio** para atendimento WhatsApp, com fallback para LLM.
- **Documentos fiscais** NFC-e/NF-e emitidos direto do sistema.
- **Multi-tenant** com organizações e empresas isoladas por `cod_org`/`cod_empresa`.

### 14.8 Limitações / gaps honestos (não precisa esconder, mas contextualizar)

- iFood aguarda homologação comercial oficial após aprovação técnica 60/60.
- OpenDelivery ainda está em sandbox.
- Stone POS é SDK Android nativo em homologação Partner Hub; app ainda não distribuído amplamente.
- Frontend ainda usa CRA (não Vite); migração para Vite está no roadmap de escalabilidade.
- Não há Docker em produção (analisado e descartado para a escala atual).

### 14.9 Como apresentar no portfolio

Sugestão de copy para o card/case study:

> "SistemacWeb — ERP fullstack em produção para restaurantes e varejo. Mantenho 3 serviços (Node/Express/MySQL, React, bot WhatsApp com NLP) com mais de 2.800 testes automatizados. Integrei iFood (homologado 60/60), Efí Bank, Stone POS, logística de motoboy e gateway de pagamento. Arquitetura monolítica com camadas bem definidas, documentação viva e deploy via PM2."

Não use print de código, não linque o repositório privado e não mencione nomes de clientes reais.

---

## 15. MENSAGEM FINAL PARA O AUTOR

Seu portfolio já é bom. Com as mudanças acima, ele passa a ser **excelente para o nicho backend**:

- SistemacWeb vira a prova de que você opera sistema real.
- Momentum e PastelariaGames mostram arquitetura e integrações complexas.
- Docker e Jest deixam de ser ícones soltos e passam a ser justificados.
- A documentação e estruturação copiadas do SistemacWeb demonstram maturidade de engenharia.

O diferencial não será mais o design Matrix, mas a **consistência entre código, documentação e impacto de negócio**.
