import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export interface CardData {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: CardVariant;
}

export type CardVariant = "blue" | "#EAB30826" | "orange" | "red";

export interface TimelineStep {
  title: string;
  description: string;
}

export interface ToolCardData {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}
