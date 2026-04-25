import {
  Instagram,
  Youtube,
  FileText,
  BookOpen,
  Mail, 
  FileSpreadsheet,
  Phone,
  FolderKanban,
  Users,
  Building2,
  Scale,
  ClipboardList,
  Target,
  TrendingUp,
  Lightbulb,
  BarChart3,
} from "lucide-react";
import type {
  NavItem,
  SocialLink,
  CardData,
  TimelineStep,
  ToolCardData,
} from "@/types";

// Navigation
export const NAV_ITEMS: NavItem[] = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#about" },
  { label: "Etapas", href: "#steps" },
  { label: "Governança", href: "#governance" },
  { label: "Classificação", href: "#classification" },
  { label: "Ferramentas", href: "#tools" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/seikipi/",
    label: "Instagram",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@secretariadeplanejamento-pi",
    label: "YouTube",
  },
  {
    icon: Mail,
    href: "#", 
    label: "E-mail",
  },
  {
    icon: Phone,
    href: "tel:+558632165000",  // substitua pelo telefone correto
    label: "Telefone",
  },
];

// External Links
export const EXTERNAL_LINKS = {
  accessoExclusivo: "https://gip.seplan.pi.gov.br",
  seplan: "https://www.pi.gov.br/seplan/",
  manual: "#",
  guiaRapido: "#",
  planilha: "#",
} as const;

// Hero Section Content
export const HERO_CONTENT = {
  badge: "SEPLAN",
  title: "Gestão do Investimento Público do Piauí",
  subtitle:
    "Plataforma integrada para gestão estratégica de projetos de investimento público, promovendo transparência, eficiência e desenvolvimento sustentável para o Estado do Piauí.",
};

// About Section Content
export const ABOUT_CONTENT = {
  badge: "Sobre o GIP",
  title: "O que é a Gestão do Investimento Público?",
  paragraphs: [
    "A Gestão do Investimento Público (GIP) é um sistema estruturado para planejar, avaliar, selecionar, implementar e monitorar projetos de investimento público. Seu principal objetivo é garantir que os recursos públicos sejam aplicados de forma eficiente e estratégica, maximizando o impacto positivo para a sociedade.",
    "No Piauí, a implementação da GIP representa um avanço significativo na modernização da administração pública, permitindo uma visão integrada e transparente de todos os projetos de investimento do estado.",
  ],
};

// Steps Timeline Content
export const STEPS_CONTENT = {
  badge: "Etapas",
  title: "Ciclo da Gestão do Investimento Público",
  description:
    "O ciclo da GIP é composto por quatro etapas fundamentais que garantem a eficiência e transparência dos investimentos públicos.",
};

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    title: "Planejamento Estratégico",
    description:
      "Definição de prioridades e alinhamento com os objetivos estratégicos do governo estadual, considerando as demandas da sociedade e a disponibilidade orçamentária.",
  },
  {
    title: "Avaliação e Seleção",
    description:
      "Análise técnica e econômica dos projetos propostos, utilizando critérios objetivos para selecionar aqueles com maior potencial de impacto positivo.",
  },
  {
    title: "Implementação",
    description:
      "Execução dos projetos selecionados com acompanhamento contínuo, gestão de riscos e garantia de qualidade na entrega dos resultados.",
  },
  {
    title: "Monitoramento e Avaliação",
    description:
      "Acompanhamento dos resultados alcançados, avaliação de impacto e retroalimentação do ciclo para melhoria contínua dos processos.",
  },
];

// Governance Section Content
export const GOVERNANCE_CONTENT = {
  badge: "Governança",
  title: "Estrutura de Governança",
  description:
    "A governança da GIP é estruturada para garantir a participação de diferentes níveis de gestão e a tomada de decisões de forma colegiada e transparente.",
};

export const GOVERNANCE_CARDS: CardData[] = [
  {
    icon: Users,
    title: "Comitê Estratégico",
    description:
      "Responsável pelas diretrizes estratégicas e priorização de investimentos de alto impacto para o desenvolvimento do estado.",
    variant: "blue",
  },
  {
    icon: Building2,
    title: "Unidade de Gestão",
    description:
      "Coordena a operacionalização do sistema, oferecendo suporte técnico às secretarias e órgãos executores.",
  },
  {
    icon: Scale,
    title: "Comitê Técnico",
    description:
      "Realiza análises técnicas e econômicas dos projetos, garantindo a qualidade das avaliações e pareceres.",
    variant: "orange",
  },
  {
    icon: ClipboardList,
    title: "Órgãos Executores",
    description:
      "Secretarias e entidades responsáveis pela proposição e execução dos projetos de investimento.",
    variant: "red",
  },
];

// Classification Section Content
export const CLASSIFICATION_CONTENT = {
  badge: "Classificação",
  title: "Classificação dos Projetos",
  description:
    "Os projetos de investimento são classificados de acordo com critérios que avaliam seu alinhamento estratégico, viabilidade e potencial de impacto.",
};

export const CLASSIFICATION_CARDS: CardData[] = [
  {
    icon: Target,
    title: "Alinhamento Estratégico",
    description:
      "Avalia a aderência do projeto aos objetivos e metas do Plano Plurianual e às prioridades governamentais.",
    variant: "blue",
  },
  {
    icon: TrendingUp,
    title: "Viabilidade Técnica",
    description:
      "Analisa a capacidade técnica e operacional para execução do projeto dentro dos prazos e padrões estabelecidos.",
    variant: "#EAB30826",
  },
  {
    icon: Lightbulb,
    title: "Impacto Socioeconômico",
    description:
      "Mensura os benefícios esperados para a população e o potencial de geração de desenvolvimento regional.",
    variant: "orange",
  },
  {
    icon: BarChart3,
    title: "Sustentabilidade Fiscal",
    description:
      "Verifica a compatibilidade com o orçamento disponível e os impactos fiscais de médio e longo prazo.",
    variant: "red",
  },
];

// Tools Section Content
export const TOOLS_CONTENT = {
  badge: "Ferramentas",
  title: "Ferramentas de Apoio",
  description:
    "Acesse os recursos disponíveis para auxiliar na elaboração e gestão dos seus projetos de investimento.",
};

export const TOOL_CARDS: ToolCardData[] = [
  {
    title: "Manual do Usuário",
    description:
      "Guia completo com instruções detalhadas para utilização do sistema GIP.",
    href: EXTERNAL_LINKS.manual,
    icon: BookOpen,
  },
  {
    title: "Guia Rápido",
    description:
      "Resumo prático dos principais procedimentos e fluxos do sistema.",
    href: EXTERNAL_LINKS.guiaRapido,
    icon: FileText,
  },
  {
    title: "Planilha Modelo",
    description:
      "Template padronizado para elaboração de propostas de projetos.",
    href: EXTERNAL_LINKS.planilha,
    icon: FileSpreadsheet,
  },
  {
    title: "Acesso ao Sistema",
    description: "Portal de acesso ao sistema GIP para usuários cadastrados.",
    href: EXTERNAL_LINKS.accessoExclusivo,
    icon: FolderKanban,
  },
];

// Footer Content
export const FOOTER_CONTENT = {
  copyright: `© ${new Date().getFullYear()} SEPLAN - Secretaria de Planejamento do Piauí. Todos os direitos reservados.`,
  developedBy: "Desenvolvido pela equipe de TI da SEPLAN",
};
