import { Badge, Stack, Text, Title } from "@mantine/core";
import { Section } from "@/components/ui/sectioncomponents";

function AboutImage() {
  return (
    <img
      src="/about.svg"
      alt="Imagem ilustrativa sobre o GIP"
      className="w-full max-w-[500px] rounded-lg object-contain"
    />
  );
}

function AboutContent() {
  return (
    <Stack gap={10}>
      <Badge variant="light" color="#EAB30826" c="#A16207" size="lg" radius="sm" w="fit-content">
        Sobre
      </Badge>

      <Title order={2} fw={700} lh={1.2} fz={{ base: 24, md: 32 }} className="text-balance">
        O que é o GIP?
      </Title>

      <Text
        c="var(--color-neutral-default)"
        fz={{ base: "sm", md: "md" }}
        lh={1.6}
        fw={500}
        className="text-pretty"
      >
        <Text span fw={700}>
          A Gestão do Investimento Público (GIP)
        </Text>{" "}
        é um modelo inovador adotado pelo Governo do Piauí para{" "}
        <Text span fw={700}>
          aumentar a eficiência, a transparência e a efetividade
        </Text>{" "}
        dos investimentos estaduais.
      </Text>

      <Text
        c="var(--color-neutral-default)"
        fz={{ base: "sm", md: "md" }}
        lh={1.6}
        fw={500}
        className="text-pretty"
      >
        Com base nas melhores práticas nacionais e internacionais, o GIP
        organiza os projetos em um{" "}
        <Text span fw={700}>
          ciclo de 5 etapas
        </Text>
        , assegurando que os recursos públicos sejam aplicados de forma{" "}
        <Text span fw={700}>
          estratégica e sustentável
        </Text>
        .
      </Text>
    </Stack>
  );
}

export function AboutSection() {
  return (
    <Section id="about">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:gap-10 lg:gap-12">
            <AboutImage />
            <div className="min-w-0 w-full sm:w-1/2">
              <AboutContent />
            </div>
          </div>
        </div>
    </Section>
  );
}
