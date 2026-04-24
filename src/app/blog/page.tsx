"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, Search, Rss } from "lucide-react";
import { getAllBlogPosts, getAllCategories } from "@data/blog-data";
import Navbar from "@/components/Navbar";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const posts = getAllBlogPosts();
  const categories = ["All", ...getAllCategories()];

  const generateThumb = (type: string) => {
    switch (type) {
      case "dots-wave":
        return {
          background: "white",
          backgroundImage: "radial-gradient(circle at center, black 1px, transparent 1px)",
          backgroundSize: "6px 6px",
          maskImage: "radial-gradient(ellipse at top left, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse at top left, black 30%, transparent 70%)"
        };
      case "dots-center":
        return {
          background: "white",
          backgroundImage: "radial-gradient(circle at center, black 1.5px, transparent 1.5px)",
          backgroundSize: "12px 12px",
          maskImage: "radial-gradient(circle at center, black, transparent)",
          WebkitMaskImage: "radial-gradient(circle at center, black 20%, transparent 80%)"
        };
      case "gradient-blue":
        return {
          background: "linear-gradient(135deg, rgba(200,255,255,1) 0%, rgba(100,100,255,1) 50%, rgba(50,0,150,1) 100%)",
        };
      case "gradient-warm":
        return {
          background: "linear-gradient(135deg, #ffaf7b 0%, #d76d77 50%, #3a1c71 100%)",
        };
      default:
        return { background: "#111" };
    }
  };

  const featuredPosts = posts.slice(0, 2);
  const morePosts = posts.slice(2);

  return (
    <main style={{ backgroundColor: "#0a0a0a", color: "#ffffff", minHeight: "100vh", fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <Navbar />
      
      <div style={{ paddingTop: "140px", paddingBottom: "100px", maxWidth: "1200px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px" }}>
        
        {/* Blog Header & Nav */}
        <div style={{ marginBottom: "48px" }}>
          <h1 style={{ fontSize: "4rem", fontWeight: 700, marginBottom: "32px", letterSpacing: "-0.02em" }}>Blog</h1>
          
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px" }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    background: activeCategory === cat ? "white" : "transparent",
                    color: activeCategory === cat ? "black" : "rgba(255,255,255,0.6)",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: "100px",
                    fontSize: "14px",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.2s"
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "8px", 
                background: "rgba(255,255,255,0.05)", 
                border: "1px solid rgba(255,255,255,0.1)", 
                padding: "8px 16px", 
                borderRadius: "12px" 
              }}>
                <Search size={16} color="rgba(255,255,255,0.6)" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  style={{ 
                    background: "transparent", 
                    border: "none", 
                    color: "white", 
                    outline: "none",
                    fontSize: "14px",
                    width: "120px"
                  }} 
                />
                <div style={{ display: "flex", gap: "4px" }}>
                  <span style={{ background: "rgba(255,255,255,0.1)", padding: "2px 6px", borderRadius: "4px", fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>⌘</span>
                  <span style={{ background: "rgba(255,255,255,0.1)", padding: "2px 6px", borderRadius: "4px", fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>K</span>
                </div>
              </div>
              <button style={{ background: "transparent", border: "none", color: "rgba(255,255,255,0.6)", cursor: "pointer", display: "flex" }}>
                <Rss size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "32px", marginBottom: "80px" }}>
          {featuredPosts.map((post, idx) => (
            <div key={idx} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ 
                width: "100%", 
                aspectRatio: "16/9", 
                borderRadius: "16px", 
                background: "white",
                position: "relative",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.1)",
                ...generateThumb(post.thumbnailType)
              }}>
                {post.thumbnailType.includes("dots") && <div style={{ position: "absolute", inset: 0, backgroundColor: "white", mixBlendMode: "saturation" }} />}
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", marginBottom: "12px" }}>{post.date}</div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, lineHeight: 1.4, marginBottom: "12px" }}>{post.title}</h2>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, marginBottom: "24px" }}>{post.description}</p>
                
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ display: "flex" }}>
                      {post.authors.map((author, aIdx) => (
                        <img key={aIdx} src={author.img} alt={author.name} style={{ width: "24px", height: "24px", borderRadius: "50%", border: "2px solid #060606", marginLeft: aIdx > 0 ? "-8px" : "0" }} />
                      ))}
                    </div>
                    <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>{post.authors.map(a => a.name).join(", ")}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} style={{ display: "flex", alignItems: "center", gap: "4px", color: "white", textDecoration: "none", fontSize: "14px", fontWeight: 600 }}>
                    Read <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Articles */}
        <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "32px", letterSpacing: "-0.02em" }}>More Articles</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px", marginBottom: "80px" }}>
          {morePosts.map((post, idx) => (
            <div key={idx} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ 
                width: "100%", 
                aspectRatio: "16/10", 
                borderRadius: "12px", 
                background: "white",
                position: "relative",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.1)",
                ...generateThumb(post.thumbnailType)
              }}>
                {post.thumbnailType.includes("dots") && <div style={{ position: "absolute", inset: 0, backgroundColor: "white", mixBlendMode: "saturation" }} />}
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", marginBottom: "8px" }}>{post.date}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 600, lineHeight: 1.4, marginBottom: "12px" }}>{post.title}</h3>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.5, marginBottom: "24px" }}>{post.description}</p>
                
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginTop: "auto" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {post.authors.map((author, aIdx) => (
                      <div key={aIdx} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <img src={author.img} alt={author.name} style={{ width: "20px", height: "20px", borderRadius: "50%" }} />
                        <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>{author.name}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={`/blog/${post.slug}`} style={{ display: "flex", alignItems: "center", gap: "4px", color: "white", textDecoration: "none", fontSize: "14px", fontWeight: 600 }}>
                    Read <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}

