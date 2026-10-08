import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PROFILE } from "@/data/portfolio";

export const viewport: Viewport = {
  themeColor: "#080a0f",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${PROFILE.name} | AI Engineer & Software Engineer`,
  description: `${PROFILE.headline} Hands-on production AI engineering across computer vision, state estimation, on-premise RAG pipelines, and agent safety runtimes.`,
  keywords: [
    "Yousof Montasser Osman",
    "Yousof Montasser",
    "AI Engineer",
    "Software Engineer",
    "Machine Learning Engineer",
    "Computer Vision",
    "Kalman Filtering",
    "State Estimation",
    "WinTAK",
    "Cursor-on-Target",
    "RAG",
    "RAGFlow",
    "Agent Tool Calling",
    "Deterministic Validation",
    "YOLO",
    "Cairo Egypt",
  ],
  authors: [{ name: PROFILE.name, url: PROFILE.contact.github }],
  creator: PROFILE.name,
  metadataBase: new URL("https://yousof-montasser.github.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yousof-montasser.github.io",
    title: `${PROFILE.name} | AI Engineer & Software Engineer`,
    description: `${PROFILE.headline} Production systems in computer vision, Kalman filtering, on-premise RAG, and agent safety runtimes.`,
    siteName: `${PROFILE.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE.name} | AI Engineer & Software Engineer`,
    description: `${PROFILE.headline} Production systems in computer vision, Kalman filtering, on-premise RAG, and agent safety runtimes.`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PROFILE.name,
    jobTitle: PROFILE.role,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cairo",
      addressCountry: "Egypt",
    },
    email: `mailto:${PROFILE.contact.email}`,
    sameAs: [PROFILE.contact.github, PROFILE.contact.linkedin],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Cairo University",
    },
    description: PROFILE.summary,
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground antialiased min-h-screen flex flex-col selection:bg-emerald-500/20 selection:text-emerald-300">
        {children}
      </body>
    </html>
  );
}
