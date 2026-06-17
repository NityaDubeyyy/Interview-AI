import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Intellix - AI Interview & Candidate Screening Platform",
    template: "%s | Intellix AI",
  },
  description: "Advanced AI Interview Preparations. Streamline interviews, analyse candidates with AI, and make faster, data-driven hiring decisions with Intellix.",
  keywords: [
    "AI Interview",
    "Interview Preparation",
    "Candidate Screening",
    "AI Recruitment",
    "Mock Interviews",
    "Technical Interviews",
    "HR Tech",
    "Automated Hiring"
  ],
  authors: [{ name: "Intellix Team" }],
  creator: "Intellix",
  publisher: "Intellix",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Intellix - Advanced AI Interview Platform",
    description: "Streamline interviews, analyse candidates with AI, and make faster, data-driven hiring decisions.",
    url: "https://intellix.ai",
    siteName: "Intellix AI",
    images: [
      {
        url: "https://intellix.ai/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Intellix AI Interview Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Intellix - Advanced AI Interview Platform",
    description: "Streamline interviews, analyse candidates with AI, and make faster, data-driven hiring decisions.",
    images: ["https://intellix.ai/og-image.jpg"],
    creator: "@IntellixAI",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Intellix AI",
  url: "https://intellix.ai",
  logo: "https://intellix.ai/logo.png",
  description: "Advanced AI Interview Preparations. Streamline interviews, analyse candidates with AI, and make faster, data-driven hiring decisions.",
  sameAs: [
    "https://twitter.com/IntellixAI",
    "https://www.linkedin.com/company/intellix-ai"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {/* Global Bottom Blur Overlay */}
        <div 
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            height: "140px",
            zIndex: 999,
            pointerEvents: "none",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            maskImage: "linear-gradient(to bottom, transparent, black 80%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 80%)",
          }}
        />
      </body>
    </html>
  );
}

