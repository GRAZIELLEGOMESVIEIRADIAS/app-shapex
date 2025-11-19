import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShapeX - O Futuro do Shape Inteligente",
  description: "Tira uma foto. Descobre teu shape. A ShapeX lê teu corpo, entende tuas metas e cria teu plano na hora. IA com toque humano. Resultado de verdade.",
  keywords: ["fitness", "IA", "treino", "nutrição", "personal trainer", "shape", "musculação"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
