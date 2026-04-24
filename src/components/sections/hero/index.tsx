"use client";

import { Anchor, Burger, Button, Group, Menu, Progress, Stack, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { Info, Layers, ListChecks, Lock, MapIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { EXTERNAL_LINKS } from "@/lib/constants";

const INTERNAL_NAV_ITEMS = [
  { label: "Sobre", id: "about", icon: Info },
  { label: "Etapas", id: "steps", icon: Layers },
  { label: "Governancia", id: "governance", icon: MapIcon },
  { label: "Classificação", id: "classification", icon: ListChecks },
] as const;

function StateStripes() {
  return (
    <div className="w-full mt-14" role="presentation" aria-hidden="true">
      <Progress.Root size={12} radius={0} w="100%">
        <Progress.Section value={35} color="#F7B500" />
        <Progress.Section value={35} color="#E6392E" />
        <Progress.Section value={35} color="#0D7138" />
      </Progress.Root>
    </div>
  );
}

function ExclusiveAccessButton() {
  return (
    <Link
      href={EXTERNAL_LINKS.accessoExclusivo}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 rounded-md bg-[#0352AA] px-3 py-2 text-white shadow transition-colors hover:bg-[#0352AA]"
    >
      <Lock size={18} />
      <div className="flex flex-col items-start leading-tight">
        <span className="text-xs font-medium">acesso exclusivo</span>
        <span className="text-sm font-semibold">Servidor</span>
      </div>
    </Link>
  );
}

function HeroNav() {
  const [opened, { toggle, close }] = useDisclosure();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-foreground bg-white py-3">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-3 sm:px-5 md:px-8">
        <Link href="#hero">
          <Image
            src="/Projetos.svg"
            alt="Logo do GIP - Gestao do Investimento Público"
            width={160}
            height={48}
            priority
            className="h-10 w-auto sm:h-12 lg:h-16"
          />
        </Link>

        {/* Mobile Navigation */}
        <nav className="flex lg:hidden" aria-label="Menu de navegacao mobile">
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <Burger
                opened={opened}
                onClick={toggle}
                color="#0352AA"
                aria-label="Abrir menu de navegacao"
              />
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label>Navegacao</Menu.Label>
              {INTERNAL_NAV_ITEMS.map((item) => (
                <Menu.Item
                  key={item.id}
                  leftSection={<item.icon size={16} />}
                  component="a"
                  href={`#${item.id}`}
                  onClick={close}
                >
                  {item.label}
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
        </nav>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex" aria-label="Navegacao principal">
          <Group gap="lg">
            {INTERNAL_NAV_ITEMS.map((item) => (
              <Anchor
                key={item.id}
                size="md"
                fw={500}
                c="var(--color-neutral-default)"
                href={`#${item.id}`}
              >
                {item.label}
              </Anchor>
            ))}
            <ExclusiveAccessButton />
          </Group>
        </nav>
      </div>
    </header>
  );
}

function HeroContent() {
  const handleDownloadClick = () => {
    notifications.show({
      title: "Baixando Guia Completo",
      message: "O arquivo pode demorar um pouco para baixar.",
      color: "#EAB30826",
    });
  };

  return (
    <div className="relative flex flex-col items-center justify-center bg-white px-5 py-12 sm:px-8 md:px-16 md:py-20 lg:px-20 lg:py-32 xl:py-40">
      <img
        src="/heroart1.svg"
        style={{ width: "400px", height: "auto" }}
        className="absolute -bottom-16 left-52 hidden select-none lg:block"
      />

      <img
        src="/heroart2.svg"
        style={{ width: "400px", height: "auto" }}
        className="absolute -bottom-16 right-52 hidden select-none lg:block"
      />

      <div className="mx-auto max-w-4xl px-4 py-12">
        <Stack align="center" gap="lg">
          <Stack align="center" gap="sm">
            <Title
              order={1}
              ta="center"
              fw={700}
              lh={1.2}
              fz={{ base: 32, md: 44, lg: 52, xl: 64 }}
              className="text-balance"
            >
              Investimento Público
            </Title>

            <Title
              order={1}
              ta="center"
              fw={700}
              lh={1.2}
              fz={{ base: 32, md: 44, lg: 52, xl: 64 }}
              className="text-balance"
            >
              que{" "}
              <Text span inherit c="#0352AA">
                Transforma o Piaui
              </Text>
            </Title>
          </Stack>

          <Text
            ta="center"
            c="var(--color-neutral-default)"
            fz="md"
            lh={1.6}
            fw={500}
            maw={600}
            className="text-pretty"
          >
            O GIP e a metodologia que garante que cada investimento realizado pelo
            Estado gere desenvolvimento, qualidade de vida e mais oportunidades para
            a população.
          </Text>

          <Group justify="center" mt={{ base: 8, md: 12 }} w="100%">
            <Anchor href="#steps">
              <Button size="md" radius="md" color="#0352AA">
                Conheca as 5 Etapas
              </Button>
            </Anchor>

            <Button
              size="md"
              radius="md"
              variant="outline"
              color="#0352AA"
              onClick={handleDownloadClick}
            >
              Baixar Guia Completo
            </Button>
          </Group>
        </Stack>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="hero">
      <HeroNav />
      <HeroContent />
      <StateStripes />
    </section>
  );
}