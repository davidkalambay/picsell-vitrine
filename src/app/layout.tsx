import type { Metadata } from "next";
import { fontVariables, openSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Picsell Agency - Coming Soon",
  description: "Precision in every pixel — coming soon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${fontVariables} antialiased`}>
      <body className={openSans.className}>
        {children}
      </body>
    </html>
  );
}
