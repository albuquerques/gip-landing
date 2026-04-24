"use client";

import Link from "next/link";
import type { NavItem } from "@/types";

interface NavLinkProps extends NavItem {
  onClick?: () => void;
  className?: string;
}

export function NavLink({ label, href, onClick, className = "" }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    onClick?.();
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`text-gray-700 transition-colors hover:text-[#0352AA] font-medium ${className}`}
    >
      {label}
    </Link>
  );
}
