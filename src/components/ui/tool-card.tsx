import { Card } from "@mantine/core";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ToolCardData } from "@/types";

interface ToolCardProps extends ToolCardData {}

export function ToolCard({ title, description, href, icon: Icon }: ToolCardProps) {
  const isExternal = href.startsWith("http");

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      className="group h-full transition-all hover:shadow-lg"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#0352AA]/10">
        <Icon className="h-6 w-6 text-[#0352AA]" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mb-4 text-sm text-gray-600">{description}</p>
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="inline-flex items-center gap-2 text-sm font-medium text-[#0352AA] transition-colors hover:text-[#1b5e20]"
      >
        Acessar
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </Card>
  );
}
