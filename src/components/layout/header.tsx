"use client";

import { Anchor, Button, Group, Menu, Text } from "@mantine/core";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const EXTERNAL_NAV_ITEMS = [
  { label: "Diálogos", href: "https://dialogos.seplan.pi.gov.br/" },
  { label: "OPA", href: "https://opa.seplan.pi.gov.br/" },
  { label: "dadosPI", href: "https://dados.gov.br/home" },
  { label: "Pactos pelo Piauí", href: "https://pactospelopiaui.seplan.pi.gov.br/" },
  { label: "Retribuir", href: "https://www.seplan.pi.gov.br/projetos/retribuir/" },
  { label: "PSI", href: "https://psi.seplan.pi.gov.br/" },
  { label: "Pilares", href: "https://www.seplan.pi.gov.br/projetos/pilares-ii/" },
] as const;

function MobileMenu() {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Group gap={6} className="group cursor-pointer items-center">
          <Text fw={500} c="white">
            Projetos e Programas
          </Text>
          <ChevronDown size={16} />
        </Group>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Outros Links</Menu.Label>
        {EXTERNAL_NAV_ITEMS.map((item) => (
          <Link
            href={item.href}
            key={item.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Menu.Item>{item.label}</Menu.Item>
          </Link>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}

export function Header() {
  return (
    <header className="w-full bg-[#0352AA] py-3 text-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-3 sm:px-5 md:px-8">
        <div className="lg:hidden">
          <MobileMenu />
        </div>

        <nav className="hidden lg:flex" aria-label="Links externos">
          <Group justify="center" gap="lg">
            <Link href="https://www.seplan.pi.gov.br/" target="_blank" rel="noopener noreferrer">
              <Button variant="default" radius="md" c="var(--color-neutral-default)">
                Site da Seplan
              </Button>
            </Link>

            {EXTERNAL_NAV_ITEMS.map((item) => (
              <Anchor
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                c="white"
                size="md"
              >
                {item.label}
              </Anchor>
            ))}
          </Group>
        </nav>

        <Link href="https://www.seplan.pi.gov.br/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/SEPLAN.svg"
            alt="Logo da SEPLAN - Secretaria de Planejamento do Piauí"
            width={160}
            height={48}
            priority
            className="h-10 w-auto sm:h-12 lg:h-16"
          />
        </Link>
      </div>
    </header>
  );
}