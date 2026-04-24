import { Badge, Card, Text } from "@mantine/core";
import { Section } from "@/components/ui/sectioncomponents";

type ClassificationVariant = "beige" | "primary" | "white" | "yellow";

const VARIANT_STYLES: Record<ClassificationVariant, { bg: string; title: string; desc: string }> = {
  beige: {
    bg: "var(--color-yellow-100)",
    title: "var(--color-neutral-emphasis)",
    desc: "var(--color-neutral-default)",
  },
  primary: {
    bg: "var(--color-primary-600)",
    title: "white",
    desc: "white",
  },
  white: {
    bg: "var(--color-white)",
    title: "var(--color-neutral-emphasis)",
    desc: "var(--color-neutral-default)",
  },
  yellow: {
    bg: "var(--color-yellow-400)",
    title: "var(--color-neutral-emphasis)",
    desc: "var(--color-neutral-default)",
  },
};

const CLASSIFICATION_CARDS = [
  {
    title: "Estratégicos",
    description:
      "Projetos de caráter transformador, com alta contribuição para o desenvolvimento do Estado. Exigem uma avaliação prévia mais completa e extensiva.",
    variant: "beige" as ClassificationVariant,
    className: "lg:col-span-4",
  },
  {
    title: "Complementares",
    description:
      "Empreendimentos de natureza tático-operacional e impacto localizado. A análise de viabilidade é simplificada, dependendo do volume de investimento.",
    variant: "primary" as ClassificationVariant,
    className: "lg:col-span-4",
  },
  {
    title: "Parcerias e Concessões",
    description:
      "Projetos que envolvem a iniciativa privada e seguem um fluxo normativo específico, já previsto em legislação própria.",
    variant: "white" as ClassificationVariant,
    className: "lg:col-span-4",
  },
  {
    title: "Emergenciais",
    description:
      "Projetos urgentes devido a situações como calamidades públicas. Demandam celeridade e seguem um rito sumário, sem passar por todas as etapas da GIP.",
    variant: "yellow" as ClassificationVariant,
    className: "lg:col-span-6 lg:col-start-1",
  },
  {
    title: "Pactos e Convênios",
    description:
      "Projetos urgentes devido a situações como calamidades publicas. Demandam celeridade e seguem um rito sumário, sem passar por todas as etapas da GIP.",
    variant: "yellow" as ClassificationVariant,
    className: "md:col-span-full lg:col-span-6 lg:col-start-7",
  },
] as const;

function ClassificationCard({
  title,
  description,
  variant,
  className,
}: {
  title: string;
  description: string;
  variant: ClassificationVariant;
  className?: string;
}) {
  const styles = VARIANT_STYLES[variant];

  return (
    <div className={`h-full ${className}`}>
      <Card bg={styles.bg} shadow="xs" radius={12} px={20} py={20} className="h-full">
        <Text c={styles.title} fw={700} fz={{ base: 16, lg: 18 }}>
          {title}
        </Text>
        <Text c={styles.desc} fw={500} fz={{ base: "sm", lg: "md" }}>
          {description}
        </Text>
      </Card>
    </div>
  );
}

function ClassificationContent() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mb-12">
      <Badge variant="light" color="#EAB30826" c="#A16207" size="lg" radius="sm">
        Classificacao
      </Badge>

      <Text fw={700} lh={1.2} fz={{ base: 24, sm: 28, md: 36 }} ta="center" className="text-balance">
        Nem todo projeto é igual
      </Text>

      <Text
        c="var(--color-neutral-default)"
        fz={{ base: "sm", md: "md" }}
        lh={1.6}
        fw={500}
        ta="center"
        className="text-pretty"
      >
        A GIP adapta a profundidade da análise conforme a natureza e o impacto
        de cada projeto.
      </Text>
    </div>
  );
}

function ClassificationCards() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
      {CLASSIFICATION_CARDS.map((card) => (
        <ClassificationCard
          key={card.title}
          title={card.title}
          description={card.description}
          variant={card.variant}
          className={card.className}
        />
      ))}
    </div>
  );
}

export function ClassificationSection() {
  return (
    <Section id="classification">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center justify-center gap-8 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-0">
          <ClassificationContent />
          <ClassificationCards />
      </div>
    </Section>
  );
}
