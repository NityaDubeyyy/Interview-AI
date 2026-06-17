import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Intellix vs Willo | Best AI Interview Platform Comparison',
  description: 'Compare Intellix and Willo. See why Intellix is the best alternative to Willo for AI-powered candidate screening and interview preparation.',
  keywords: ['Intellix vs Willo', 'Willo Alternative', 'AI Interview Platform', 'Candidate Screening Software'],
  openGraph: {
    title: 'Intellix vs Willo | The Ultimate AI Interview Platform Comparison',
    description: 'Find out why leading companies choose Intellix over Willo for automated screening.',
    type: 'article',
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Intellix vs Willo Comparison",
  "description": "A detailed comparison of Intellix and Willo AI interview platforms.",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "SoftwareApplication",
        "name": "Intellix",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web"
      },
      {
        "@type": "SoftwareApplication",
        "name": "Willo",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web"
      }
    ]
  }
};

export default function ComparisonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
