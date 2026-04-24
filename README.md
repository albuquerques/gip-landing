<div align="center">

<img src="public/Projetos.svg" alt="GIP Logo" height="80" />

# GIP — Gestão do Investimento Público do Piauí

**Landing page institucional da metodologia GIP, desenvolvida para a Secretaria de Planejamento do Estado do Piauí (SEPLAN-PI).**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Mantine](https://img.shields.io/badge/Mantine-7-339af0?logo=data:image/svg+xml;base64,)](https://mantine.dev/)

</div>

---

## Sobre o Projeto

O **GIP (Gestão do Investimento Público)** é a metodologia adotada pelo Governo do Piauí para aumentar a eficiência, a transparência e a efetividade dos investimentos estaduais. Esta landing page apresenta a metodologia ao público, detalhando suas etapas, estrutura de governança e formas de classificação de projetos.

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
git clone https://github.com/seu-usuario/gip-seplan.git
cd gip-seplan

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

## Contribuindo

1. Crie uma branch: `git checkout -b feature/minha-feature`
2. Faça o commit: `git commit -m 'feat: minha feature'`
3. Envie para a branch: `git push origin feature/minha-feature`
4. Abra um Pull Request

---

## Licença

Este projeto é de propriedade da **Secretaria de Planejamento do Estado do Piauí (SEPLAN-PI)**.  
Todos os direitos reservados © 2025 SEPLAN.

---

<div align="center">
  <sub>Desenvolvido pela equipe de TI da SEPLAN-PI</sub>
</div>
