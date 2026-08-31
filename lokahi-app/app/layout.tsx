import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lokahi-ten.vercel.app"),

  title: "LOKAHI | Viaggi di gruppo per donne queer",

  description:
    "Esperienze, connessioni autentiche e nuove avventure da vivere insieme. Scopri i prossimi viaggi LOKAHI.",

  openGraph: {
    title: "LOKAHI | Viaggi di gruppo per donne queer",
    description:
      "Esperienze, connessioni autentiche e nuove avventure da vivere insieme. Scopri i prossimi viaggi LOKAHI.",
    url: "https://lokahi-ten.vercel.app",
    siteName: "LOKAHI",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/logo-lokahi.png",
        alt: "LOKAHI – Viaggi di gruppo per donne queer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "LOKAHI | Viaggi di gruppo per donne queer",
    description:
      "Esperienze, connessioni autentiche e nuove avventure da vivere insieme.",
    images: ["/logo-lokahi.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
