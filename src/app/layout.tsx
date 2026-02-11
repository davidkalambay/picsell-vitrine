import type { Metadata } from "next";
import { Sora, Quicksand } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Picsell Agency - Coming Soon",
  description: "Precision in progress — coming soon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${sora.variable} ${quicksand.variable} antialiased`}>
      <body className="font-sora">
        {children}
      </body>
    </html>
  );
}
