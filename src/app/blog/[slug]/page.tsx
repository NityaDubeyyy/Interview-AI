import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPostBySlug, getAllBlogPosts } from "@data/blog-data";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ChevronLeft, Clock, Calendar, Tag } from "lucide-react";
import { Metadata } from "next";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Intellix AI",
    };
  }

  return {
    title: `${post.title} | Intellix Blog`,
    description: post.description,
    keywords: [...post.tags, "AI", "Interview Prep", "Hiring"],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: post.authors.map(a => a.name),
      url: `https://intellix.ai/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    }
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "image": "https://intellix.ai/og-image.jpg",  
    "author": post.authors.map(a => ({
      "@type": "Person",
      "name": a.name
    })),
    "publisher": {
      "@type": "Organization",
      "name": "Intellix AI",
      "logo": {
        "@type": "ImageObject",
        "url": "https://intellix.ai/logo.png"
      }
    },
    "datePublished": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://intellix.ai/blog/${post.slug}`
    }
  };

  return (
    <main style={{ backgroundColor: "transparent", color: "#ffffff", minHeight: "100vh", fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      
      <article style={{ paddingTop: "140px", paddingBottom: "100px", maxWidth: "800px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px" }}>
        {/* Back Button */}
        <Link 
          href="/blog" 
          style={{ 
            display: "inline-flex", 
            alignItems: "center", 
            gap: "8px", 
            color: "rgba(255,255,255,0.6)", 
            textDecoration: "none",
            marginBottom: "32px",
            fontSize: "14px",
            fontWeight: 500
          }}
        >
          <ChevronLeft size={16} />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header style={{ marginBottom: "48px" }}>
          <div style={{ display: "flex", gap: "12px", marginBottom: "24px", flexWrap: "wrap" }}>
            <span style={{ 
              background: "rgba(255,255,255,0.1)", 
              padding: "6px 12px", 
              borderRadius: "20px", 
              fontSize: "12px", 
              fontWeight: 500,
              color: "rgba(255,255,255,0.8)"
            }}>
              {post.category}
            </span>
            <span style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "6px", 
              fontSize: "14px", 
              color: "rgba(255,255,255,0.5)" 
            }}>
              <Clock size={14} />
              {post.readTime}
            </span>
            <span style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "6px", 
              fontSize: "14px", 
              color: "rgba(255,255,255,0.5)" 
            }}>
              <Calendar size={14} />
              {post.date}
            </span>
          </div>

          <h1 style={{ 
            fontSize: "3rem", 
            fontWeight: 700, 
            lineHeight: 1.2, 
            marginBottom: "24px", 
            letterSpacing: "-0.02em" 
          }}>
            {post.title}
          </h1>

          <p style={{ 
            fontSize: "1.25rem", 
            color: "rgba(255,255,255,0.6)", 
            lineHeight: 1.6, 
            marginBottom: "32px" 
          }}>
            {post.description}
          </p>

          {/* Authors */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ display: "flex" }}>
              {post.authors.map((author, index) => (
                <img 
                  key={index}
                  src={author.img} 
                  alt={author.name} 
                  style={{ 
                    width: "40px", 
                    height: "40px", 
                    borderRadius: "50%", 
                    border: "2px solid #060606",
                    marginLeft: index > 0 ? "-12px" : "0"
                  }} 
                />
              ))}
            </div>
            <div>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff" }}>
                {post.authors.map(author => author.name).join(", ")}
              </div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>
                Authors
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div 
          style={{ 
            fontSize: "1.125rem", 
            lineHeight: 1.8, 
            color: "rgba(255,255,255,0.85)",
            marginBottom: "64px"
          }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div style={{ 
          borderTop: "1px solid rgba(255,255,255,0.1)", 
          paddingTop: "32px",
          marginBottom: "64px"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <Tag size={16} color="rgba(255,255,255,0.6)" />
            <span style={{ fontSize: "14px", fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>
              Tags
            </span>
          </div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {post.tags.map((tag) => (
              <span 
                key={tag}
                style={{ 
                  background: "rgba(255,255,255,0.05)", 
                  padding: "8px 16px", 
                  borderRadius: "20px", 
                  fontSize: "13px", 
                  color: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(255,255,255,0.1)"
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Posts */}
        <div>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "24px" }}>
            More Articles
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px" }}>
            {getAllBlogPosts()
              .filter(p => p.slug !== post.slug)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link 
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  style={{ 
                    textDecoration: "none",
                    color: "inherit",
                    display: "block"
                  }}
                >
                  <div style={{ 
                    background: "rgba(255,255,255,0.03)", 
                    borderRadius: "12px", 
                    padding: "20px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    transition: "all 0.2s"
                  }}>
                    <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginBottom: "8px" }}>
                      {relatedPost.date}
                    </div>
                    <h3 style={{ 
                      fontSize: "1rem", 
                      fontWeight: 600, 
                      lineHeight: 1.4, 
                      marginBottom: "8px" 
                    }}>
                      {relatedPost.title}
                    </h3>
                    <p style={{ 
                      fontSize: "0.875rem", 
                      color: "rgba(255,255,255,0.5)", 
                      lineHeight: 1.5 
                    }}>
                      {relatedPost.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
