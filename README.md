<div align="center">

<img src="public/Projetos.svg" alt="GIP Logo" height="80" />

# GIP Landing — Gestão do Investimento Público do Piauí

**Projeto desenvolvido como parte de um processo seletivo de estágio.**  
Landing page institucional para a metodologia GIP da Secretaria de Planejamento do Estado do Piauí (SEPLAN-PI).

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Mantine](https://img.shields.io/badge/Mantine-7-339af0)](https://mantine.dev/)

</div>

---

## Contexto

Este projeto foi desenvolvido como desafio técnico de um processo seletivo para estágio na SEPLAN-PI. O objetivo era construir uma landing page institucional apresentando a metodologia **GIP (Gestão do Investimento Público)** — modelo adotado pelo Governo do Piauí para aumentar a eficiência, transparência e efetividade dos investimentos estaduais.

---

## Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| [Next.js](https://nextjs.org/) | 15 | Framework React com App Router |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Tipagem estática |
| [Tailwind CSS](https://tailwindcss.com/) | v4 | Estilização utilitária |
| [Mantine](https://mantine.dev/) | 7 | Componentes de UI |
| [Lucide React](https://lucide.dev/) | — | Ícones |
| [Figtree](https://fonts.google.com/specimen/Figtree) | — | Tipografia (Google Fonts) |

---

## Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css          # Design tokens, breakpoints e tipografia
│   ├── layout.tsx           # Layout raiz com metadados e fonte
│   ├── page.tsx             # Página principal
│   └── providers.tsx        # MantineProvider + Notifications
│
├── components/
│   ├── layout/
│   │   ├── header.tsx       # Barra superior com links externos da SEPLAN
│   │   └── footer.tsx       # Rodapé com logo e redes sociais
│   │
│   └── sections/
│       ├── hero/            # Navegação sticky + conteúdo principal + listras do PI
│       ├── about/           # O que é o GIP
│       ├── steps/           # As 5 etapas com timeline
│       ├── governance/      # Estrutura de governança (GTI, GTF, CGRF)
│       ├── classification/  # Tipos de projetos (grid)
│       └── tools/           # Manual técnico e recursos
│
├── lib/
│   ├── constants.ts         # NAV_ITEMS, SOCIAL_LINKS, EXTERNAL_LINKS
│   └── theme.ts             # Tema customizado do Mantine
│
└── types/
    └── index.ts             # NavItem, SocialLink
```

---

## Instalação e Uso

### Pré-requisitos

- Node.js 18+
- npm, yarn ou pnpm

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/gip-landing.git
cd gip-landing

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Scripts disponíveis

```bash
npm run dev      # Inicia em modo de desenvolvimento
npm run build    # Gera o build de produção
npm run start    # Inicia o servidor de produção
npm run lint     # Executa o ESLint
```

---

## Design System

O projeto usa Tailwind CSS v4 com design tokens definidos diretamente em `globals.css` via `@theme`:

```css
/* Breakpoints */
--breakpoint-xs: 320px
--breakpoint-sm: 632px
--breakpoint-md: 768px
--breakpoint-lg: 1024px
--breakpoint-xl: 1280px

/* Paleta principal */
--color-primary-600: #15719a
--color-yellow-400:  #facc15
--color-neutral-default: #52525b
```

Todos os componentes são totalmente responsivos, cobrindo os breakpoints `xs` → `xl`.

---

## Seções da Página

| Seção | ID | Descrição |
|---|---|---|
| Hero | `#hero` | Apresentação, navegação sticky e CTAs |
| Sobre | `#sobre` | O que é o GIP e seus objetivos |
| Etapas | `#etapas` | As 5 etapas do ciclo GIP com timeline |
| Governança | `#governanca` | GTI, GTF e CGRF |
| Classificação | `#classificacao` | Tipos de projetos e critérios |
| Ferramentas | `#ferramentas` | Download do manual técnico |

---

## Assets

Os arquivos de imagem (`.svg`) devem estar na pasta `public/`:

```
public/
├── SEPLAN.svg       # Logo da SEPLAN
├── Projetos.svg     # Logo do GIP
├── about.svg        # Ilustração da seção Sobre
├── steps.svg        # Ilustração da seção Etapas
├── heroart1.svg     # Decoração do Hero (esquerda)
└── heroart2.svg     # Decoração do Hero (direita)
```

---

<div align="center">
  <sub>Desenvolvido como desafio técnico para processo seletivo de estágio — SEPLAN-PI</sub>
</div>
