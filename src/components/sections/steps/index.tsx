import { Badge, Card, Text, Timeline, TimelineItem } from "@mantine/core";
import { Section } from "@/components/ui/sectioncomponents";

const STEPS = [
  {
    title: "Ideacão e Concepção",
    description:
      "Onde as grandes ideias nascem e as propostas de projeto são elaboradas e alinhadas às necessidades do Piauí.",
  },
  {
    title: "Avaliação Prévia",
    description:
      "Análise técnica e de viabilidade para garantir que apenas os projetos sólidos avancem, com base em sua complexidade e valor.",
  },
  {
    title: "Priorização e Seleção",
    description:
      "Os projetos viáveis são hierarquizados com base no impacto estratégico e nos riscos, para otimizar a alocação do orcamento do Estado.",
  },
  {
    title: "Execução do Investimento",
    description:
      "Implementação e monitoramento do projeto aprovado, com registro de informações para garantir a transparência e o aprendizado.",
  },
  {
    title: "Avaliação Ex Post",
    description:
      "Após a entrega, os resultados são comparados com o planejado, gerando lições que aprimoram todos os futuros investimentos.",
  },
] as const;

function StepImage() {
  return (
    <img
      src="/steps.svg"
      alt="Imagem ilustrativa sobre as etapas"
      className="w-full max-w-[600px] rounded-lg object-contain"
    />
  );
}

function StepCard({ title, description }: { title: string; description: string }) {
  return (
    <Card bg="var(--color-primary-50)" shadow="xs" radius={12} px={20} py={20}>
      <Text c="#0352AA" fw={700} fz={{ base: 16, lg: 18 }}>
        {title}
      </Text>
      <Text c="var(--color-neutral-default)" fw={500} fz={{ base: "sm", lg: "md" }}>
        {description}
      </Text>
    </Card>
  );
}

function StepsTimeline() {
  return (
    <Timeline active={STEPS.length} bulletSize={28} lineWidth={2} color="#0352AA">
      {STEPS.map((step, idx) => (
        <TimelineItem
          key={step.title}
          bullet={
            <span className="text-xs font-bold text-white">{idx + 1}</span>
          }
          lineVariant="dashed"
        >
          <StepCard title={step.title} description={step.description} />
        </TimelineItem>
      ))}
    </Timeline>
  );
}

function StepsContent() {
  return (
    <div className="flex flex-col items-start justify-center gap-4">
      <Badge variant="light" color="#EAB30826" c="#A16207" size="lg" radius="sm">
        As 5 Etapas
      </Badge>

      <div className="flex flex-col items-start justify-center">
        <Text fw={700} lh={1.2} fz={{ base: 24, sm: 28, md: 36 }}>
          O Caminho para o
        </Text>
        <Text c="#0352AA" fw={700} lh={1.2} fz={{ base: 24, sm: 28, md: 36 }}>
          Investimento de Impacto
        </Text>
      </div>

      <Text
        c="var(--color-neutral-default)"
        fz={{ base: "sm", md: "md" }}
        lh={1.6}
        fw={500}
        className="text-pretty"
      >
        O modelo GIP organiza o ciclo de vida dos projetos em 5 etapas
        estratégicas, baseadas nas melhores práticas nacionais e internacionais.
      </Text>

      <StepImage />
    </div>
  );
}

export function StepsSection() {
  return (
    <Section id="steps">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
        {/* Esquerda: badge, título, descrição e SVG */}
        <div className="flex flex-col gap-4 lg:w-1/2">
          <StepsContent />
        </div>

        {/* Direita: timeline */}
        <div className="lg:w-1/2">
          <StepsTimeline />
        </div>
      </div>
    </Section>
  );
}
