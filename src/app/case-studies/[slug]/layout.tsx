import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>
}

const seoData: Record<string, { title: string; description: string }> = {
  stripe: {
    title: "Stripe Case Study | Intellix AI",
    description: "How Stripe rebuilt their marketing pages faster and streamlined interview processes.",
  },
  hulu: {
    title: "Hulu Case Study | Intellix AI",
    description: "How Hulu scaled their streaming interfaces and optimized hiring velocity.",
  },
  vercel: {
    title: "Vercel Case Study | Intellix AI",
    description: "Vercel's journey to building the fastest marketing engine with advanced tools.",
  },
  beacon: {
    title: "Beacon Case Study | Intellix AI",
    description: "How Beacon transformed their workflow and sped up delivery using AI.",
  },
  supabase: {
    title: "Supabase Case Study | Intellix AI",
    description: "Scaling Supabase's open source narrative with consistent design and automated screening.",
  },
  openai: {
    title: "OpenAI Case Study | Intellix AI",
    description: "How OpenAI communicates complex AI advancements through simple design and fast hiring.",
  }
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const data = seoData[slug];

  if (!data) {
    return {
      title: "Case Study Not Found | Intellix AI",
    }
  }

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
    }
  }
}

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
