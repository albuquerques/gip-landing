import { Badge, Card, Text } from "@mantine/core";
import { Section } from "@/components/ui/section";

const GOVERNANCE_CARDS = [
  {
    title: "Grupo Técnico de Investimento (GTI)",
    description:
      "Estuda a viabilidade orcamentária, avaliando a sustentabilidade financeira dos projetos.",
  },
  {
    title: "Grupo Técnico de Gestao Fiscal (GTF)",
    description:
      "Estuda a viabilidade orcamentária, avaliando a sustentabilidade financeira dos projetos.",
  },
  {
    title: "Órgao de Governança (CGRF)",
    description:
      "Delibera e decide, avaliando os pareceres técnicos e fiscais para aprovação final junto ao Governador.",
  },
] as const;

function GovernanceCard({ title, description }: { title: string; description: string }) {
  return (
    <Card bg="var(--color-surface)" shadow="xs" radius={12} px={20} py={20}>
      <Text c="white" fw={700} fz={{ base: 16, lg: 18 }}>
        {title}
      </Text>
      <Text c="white" fw={500} fz={{ base: "sm", lg: "md" }}>
        {description}
      </Text>
    </Card>
  );
}

function GovernanceContent() {
  return (
    <div className="flex flex-col items-start gap-2">
      <Badge variant="light" color="yellow" size="lg" radius="sm">
        Governanca
      </Badge>

      <div className="flex flex-col items-start">
        <Text fw={700} lh={1.2} fz={{ base: 24, sm: 28, md: 36 }}>
          Decisões Inteligentes,
        </Text>
        <Text fw={700} lh={1.2} fz={{ base: 24, sm: 28, md: 36 }}>
          Estrutura Robusta
        </Text>
      </div>

      <Text
        c="white"
        fw={500}
        fz={{ base: "sm", md: "md" }}
        lh={1.6}
        className="text-pretty"
      >
        O sucesso da GIP depende de uma governanca bem definida, que garante avaliações técnicas, imparciais e alinhadas à capacidade fiscal do Estado.
      </Text>
    </div>
  );
}

function GovernanceCards() {
  return (
    <div className="flex flex-col gap-4">
      {GOVERNANCE_CARDS.map((card) => (
        <GovernanceCard
          key={card.title}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}

export function GovernanceSection() {
  return (
    <section
      id="governance"
      className="w-full bg-[#15719A] py-8 text-white md:py-12 lg:py-20"
    >
      <Section>
        <GovernanceContent />
        <GovernanceCards />
      </Section>
    </section>
  );
}
