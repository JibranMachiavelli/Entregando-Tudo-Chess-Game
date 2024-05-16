import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css"; // Usando caminho relativo para importar o arquivo globals.css

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
