import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Intellix - AI Interview",
  description: "Advanced AI Interview Preparations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
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

