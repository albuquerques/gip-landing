"use client";

import { Badge, Button, Card, Group, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { Download } from "lucide-react";

function ToolsContent() {
  return (
    <div className="flex flex-col items-start justify-center gap-4">
      <Badge variant="light" color="yellow" size="lg" radius="sm">
        Ferramentas e Recursos
      </Badge>

      <Text fw={700} lh={1.2} fz={{ base: 24, sm: 28, md: 36 }}>
        Pronto para começar?
      </Text>

      <Text c="white" fz={{ base: "sm", md: "md" }} lh={1.6} fw={500} className="text-pretty">
        Acesse os recursos, aprofunde seu conhecimento e comece a aplicar a
        metodologia GIP hoje mesmo.
      </Text>
    </div>
  );
}

function ToolsCard() {
  const handleDownloadClick = () => {
    notifications.show({
      title: "Baixando Manual Tecnico",
      message: "O arquivo pode demorar um pouco para baixar.",
      color: "green",
    });
  };

  return (
    <Card bg="#196b8b" shadow="md" radius="lg" withBorder w="100%" maw={460}>
      <Group justify="start" gap={12}>
        <Text c="white" fw={700} fz={{ base: 16, lg: 18 }}>
          Manual Técnico
        </Text>

        <Text c="white" fw={500} fz={{ base: "sm", lg: "md" }}>
          Aprofunde-se em cada detalhe, critério e cálculo da metodologia. O
          guia completo para especialistas.
        </Text>

        <Button
          bg="var(--color-yellow-400)"
          leftSection={<Download size={16} />}
          fullWidth
          c="var(--color-neutral-emphasis)"
          onClick={handleDownloadClick}
        >
          Baixar Manual Técnico
        </Button>
      </Group>
    </Card>
  );
}

export function ToolsSection() {
  return (
    <section id="ferramentas" className="w-full py-8 md:py-12 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-3 sm:px-5 md:px-8">
        <div className="flex flex-col items-start justify-center gap-8 rounded-2xl bg-gradient-to-br from-[#105370] from-0% to-[#196b8b] to-95% px-6 py-10 text-white sm:px-8 md:flex-row md:items-center lg:justify-between lg:px-11 lg:py-24">
          <ToolsContent />
          <ToolsCard />
        </div>
      </div>
    </section>
  );
}