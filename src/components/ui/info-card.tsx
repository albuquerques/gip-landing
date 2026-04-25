import { Card } from "@mantine/core";
import type { LucideIcon } from "lucide-react";
import type { CardVariant } from "@/types";

const VARIANT_STYLES: Record<CardVariant, { bg: string; icon: string; border: string }> = {
  blue: {
    bg: "bg-blue-50",
    icon: "text-blue-600",
    border: "border-l-blue-500",
  },
  orange: {
    bg: "bg-orange-50",
    icon: "text-orange-600",
    border: "border-l-orange-500",
  },
  red: {
    bg: "bg-red-50",
    icon: "text-red-600",
    border: "border-l-red-500",
  },
};

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: CardVariant;
}

export function InfoCard({
  icon: Icon,
  title,
  description,
  variant = "blue",
}: InfoCardProps) {
  const styles = VARIANT_STYLES[variant];

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      className={`h-full border-l-4 ${styles.border} transition-shadow hover:shadow-md`}
    >
      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${styles.bg}`}>
        <Icon className={`h-6 w-6 ${styles.icon}`} />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </Card>
  );
}
