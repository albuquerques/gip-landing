import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "GIP - Gestão do Investimento Público do Piauí",
  description:
    "Plataforma integrada para gestão estratégica de projetos de investimento público do Estado do Piauí",
};

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-figtree",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={figtree.variable}>
      <body className="bg-white font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
