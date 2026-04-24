import { Badge as MantineBadge } from "@mantine/core";

interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({
  badge,
  title,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <MantineBadge
        variant="light"
        color="#EAB30826"
        size="lg"
        radius="sm"
        className="mb-4"
      >
        {badge}
      </MantineBadge>
      <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-3xl text-lg text-gray-600 text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
