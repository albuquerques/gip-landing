import Image from "next/image";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";

function SocialIcon({
  icon: Icon,
  href,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
    >
      <Icon className="h-5 w-5" />
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-black py-4 text-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-3 sm:px-5 md:px-8">
        <Link
          href="https://www.seplan.pi.gov.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/SEPLAN.svg"
            alt="Logo da SEPLAN - Secretaria de Planejamento do Piauí"
            width={160}
            height={48}
            className="h-10 w-auto sm:h-12 lg:h-16"
          />
        </Link>

        <div className="flex items-center justify-center gap-4">
          {SOCIAL_LINKS.map((link) => (
            <SocialIcon
              key={link.label}
              icon={link.icon}
              href={link.href}
              label={link.label}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}