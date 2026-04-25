import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CSDM3D | ServiceNow CSDM5 Maturity Map",
  description:
    "A public ServiceNow CSDM5 maturity demo that turns CMDB signals into a 3D map, dashboard, report, and AI-ready insights.",
  openGraph: {
    title: "CSDM3D | ServiceNow CSDM5 Maturity Map",
    description:
      "Connect a ServiceNow instance, analyze CSDM5 domains, and generate an executive-ready maturity map.",
    type: "website",
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
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
