import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const heebo = localFont({
  src: "./fonts/Heebo-VariableFont_wght.ttf",
  variable: "--font-heebo",
});

const inter = localFont({
  src: "./fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Figma to Nextjs (Portfolio)",
  description: "Welcome to my Figma to Nextjs Pixel Perfect Conversion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${heebo.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
