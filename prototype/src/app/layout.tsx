import type { Metadata } from "next";
import { Playfair_Display, Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Picsell Agency | Maison de Haute Horlogerie Digitale",
  description: "Picsell Agency fusionne l'IA de pointe avec la rigueur artisanale de la méthode BMAD pour transformer votre business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} ${robotoMono.variable} antialiased selection:bg-brushed-gold selection:text-midnight-black`}
      >
        {children}
      </body>
    </html>
  );
}

