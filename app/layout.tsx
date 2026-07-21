import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.drehwald-balz-elektro.de"),
  title: {
    default: "Drehwald-Balz Elektrounternehmen Mainz",
    template: "%s | Drehwald-Balz Elektrounternehmen",
  },
  description:
    "Friedrich Drehwald-Balz Elektrounternehmen in Mainz-Gonsenheim: Elektroinstallation, E-Check, TK-Anlagen und EDV-Verkabelung.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Drehwald-Balz Elektrounternehmen Mainz",
    description:
      "Elektrofachbetrieb für Installation, Sicherheitsprüfung, TK-Anlagen und strukturierte EDV-Verkabelung in Mainz-Gonsenheim.",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Drehwald-Balz Elektrounternehmen Mainz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drehwald-Balz Elektrounternehmen Mainz",
    description:
      "Elektroinstallation, E-Check, TK-Anlagen und EDV-Verkabelung in Mainz-Gonsenheim.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#111827",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
