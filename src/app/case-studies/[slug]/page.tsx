"use client";

import React, { use } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ExternalLink, ArrowLeft } from "lucide-react";

type CaseStudyData = {
  id: string;
  name: string;
  title: string;
  heroColor: string;
  description: string;
  founded: string;
  joined: string;
  website: string;
  content: React.ReactNode;
};

const caseStudiesData: Record<string, CaseStudyData> = {
  stripe: {
    id: "stripe",
    name: "Stripe",
    title: "How Stripe Rebuilt Their Marketing Pages Faster With Tailark Pro",
    heroColor: "#635BFF",
    description: "Stripe is the world's leading financial infrastructure platform, powering payments and revenue operations for millions of businesses globally.",
    founded: "March 13, 2012",
    joined: "November 12, 2025",
    website: "https://stripe.com",
    content: (
      <>
        <p>When Stripe was small, friction was manageable. A handful of engineers could coordinate in a single Slack thread, ship a new page in an afternoon, and redesign entire sections of the marketing site over a weekend. Decisions were quick, and the cost of inconsistency was low.</p>
        <p>But scale changes the gravity of everything. What used to be a small inconvenience becomes a recurring tax. A design mismatch becomes a support burden. A slow iteration cycle becomes dozens of delayed experiments. As Stripe grew—more countries, more products, more markets—these points of friction didn't simply add up; they multiplied.</p>
        <p>Stripe's marketing site is one of its most critical surfaces. It must communicate trust to enterprises, clarity to developers, and simplicity to founders evaluating payment infrastructure. As the product suite expanded, the burden on the team responsible for building the site increased proportionally. Coordination grew harder. Pages grew more complex. Launch timelines tightened.</p>
        <p>The question wasn't whether Stripe could ship. It was whether they could continue shipping with the same velocity while maintaining the standard of quality that defines their brand.</p>

        <h3>The hidden cost of design fragmentation</h3>
        <p>Before Tailark Pro, Stripe's website evolved through many iterations. Teams built pages using slightly different layouts, custom patterns, and individually maintained components. Over time, the system became a patchwork where no single team understood the whole. It worked—until it didn't.</p>
        <p>One engineer described it as "an invisible maze." Projects lived across multiple branches, prototypes existed only in Figma frames, and every new feature announcement required navigating a landscape of one-off components.</p>
        <p>A few recurring challenges emerged:</p>
        <ul>
          <li>Different product teams built pages using their own micro-patterns, creating subtle inconsistencies.</li>
          <li>Engineering spent significant time re-implementing variations of components that already existed.</li>
          <li>The velocity of new product launches outpaced the team's ability to produce polished, high-converting pages efficiently.</li>
        </ul>
        <p>Small delays compounded into slower cycles. A messy system creates friction, and friction, at scale, becomes drag.</p>
        <p>This isn't unique to Stripe—it's a natural consequence of rapid growth—but Stripe wanted to solve it in a way that preserved their craft, speed, and attention to detail.</p>

        <h3>A shift begins quietly</h3>
        <p>The change didn't start with a mandate. It began with one team experimenting with Tailark Pro, looking for a faster way to launch a feature page without reinventing layouts or re-engineering components from scratch. The fit was immediate. The code matched their existing stack. The patterns felt intentional. The constraints felt liberating rather than limiting.</p>
        <p>What happened next wasn't a rollout—it was an adoption curve.</p>
        <p>A few engineers pulled in Tailark Pro blocks. Then another team used it for a campaign page. Soon, the pricing team used it for a redesign. Teams across regions began experimenting. The momentum built naturally, driven not by policy, but by utility.</p>
        <p>Engineers appreciated that Tailark Pro wasn't trying to be everything. It avoided the trap of infinite configuration. Instead, its components were designed around how marketing pages actually get built: clear hierarchies, flexible storytelling patterns, repeatable structures.</p>
        <p>Tailark Pro wasn't adding new choices—it was removing unnecessary ones.</p>

        <h3>Systems that scale don't just simplify work—they shape habits</h3>
        <p>The impact wasn't only technical. It was cultural.</p>
        <p>Teams started building with a common set of components. This meant fewer decisions to negotiate, fewer handoffs to interpret, and fewer chances for inconsistencies to creep in. Marketing and engineering spoke the same visual language, and this alignment reduced friction in the small day-to-day moments that shape workflow culture.</p>
        <p>The simplicity of the system encouraged better habits. Pages were assembled faster. Reviews were cleaner. Iteration cycles shortened. The quality bar went up—not because anyone demanded it, but because the system made it easier to do good work.</p>
        <p>Several engineers remarked privately that Tailark Pro "felt fast." Not just in performance, but in usage. Opening a file felt predictable. Editing a section felt safe. Composing a page felt natural. These aren't metrics a dashboard tracks, but they are the details that shape real productivity.</p>

        <h3>Clarity at the speed of Stripe</h3>
        <p>Stripe's marketing team began shipping pages at a pace that matched the company's ambitions. Large product launches that once required weeks could now be assembled in days. Regional variants rolled out faster. Experiments happened more often. Teams weren't just working faster—they were thinking faster.</p>
      </>
    )
  },
  hulu: {
    id: "hulu",
    name: "Hulu",
    title: "How Hulu Scaled Their Streaming Interfaces With Lightning Precision",
    heroColor: "#1CE783",
    description: "Hulu is a premium streaming service offering live and on-demand TV and movies, with and without commercials, both in and outside the home.",
    founded: "October 29, 2007",
    joined: "January 15, 2024",
    website: "https://hulu.com",
    content: (
      <>
        <p>As Hulu expanded its library and user base, delivering a consistent, lightning-fast experience across thousands of different devices became an increasingly complex engineering challenge.</p>
        <p>The engineering team faced a common dilemma for massive scale streaming platforms: how to maintain a unified design system that performs flawlessly on a 10-year-old smart TV just as well as it does on the latest flagship smartphone.</p>
        
        <h3>The challenge of device fragmentation</h3>
        <p>With millions of active viewers, even a slight degradation in UI performance could lead to measurable drops in engagement. Teams were spending weeks optimizing simple animations for lower-end devices, while struggling to keep visual consistency across platforms.</p>
        <p>The adoption of our unified component architecture allowed Hulu's engineers to write once and deploy everywhere, with built-in performance optimization that adapted to the hardware capabilities of the target device.</p>
        
        <h3>A new era of rapid prototyping</h3>
        <p>By standardizing on a robust design system, Hulu's product teams reduced their time-to-market for new features by over 40%. They can now test new engagement loops, promotional banners, and discovery interfaces in a matter of days instead of months.</p>
      </>
    )
  },
  vercel: {
    id: "vercel",
    name: "Vercel",
    title: "Vercel's Journey to Building the Fastest Marketing Engine",
    heroColor: "#000000",
    description: "Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.",
    founded: "December 2015",
    joined: "February 22, 2025",
    website: "https://vercel.com",
    content: (
      <>
        <p>Vercel's brand is synonymous with speed and developer experience. Their marketing site needed to reflect these core values, serving as both a technical demonstration of their platform and a high-converting acquisition channel.</p>
        <p>As the company grew rapidly, managing the complexity of their marketing architecture while maintaining perfect Lighthouse scores became a significant hurdle.</p>
        
        <h3>Eliminating the tradeoff between design and performance</h3>
        <p>Vercel adopted our highly optimized component library to ensure that rich, interactive marketing pages didn't come at the cost of slow load times. The strict constraints of the system forced best practices by default.</p>
        
        <h3>Empowering the marketing team</h3>
        <p>With a reliable system in place, Vercel's marketing team gained the autonomy to build and launch complex campaigns without waiting on frontend engineering cycles, increasing their experimentation velocity tenfold.</p>
      </>
    )
  },
  beacon: {
    id: "beacon",
    name: "Beacon",
    title: "How Beacon Transformed Their Workflow and Sped Up Delivery",
    heroColor: "#2563EB",
    description: "Beacon is a revolutionary workflow management platform helping teams coordinate complex projects with intuitive ease.",
    founded: "June 4, 2019",
    joined: "September 10, 2025",
    website: "https://beacon.com",
    content: (
      <>
        <p>Beacon's rapid growth meant their marketing site was constantly evolving. However, their legacy codebase was rigid, making simple copy changes a chore and new page layouts a multi-week engineering effort.</p>
        
        <h3> Breaking down silos </h3>
        <p>The implementation of a centralized design system bridged the gap between Beacon's design and engineering teams. Designers could now work within known constraints, and engineers had the pre-built blocks to bring those designs to life instantly.</p>
        
        <h3> Measurable impact </h3>
        <p>Since the transition, Beacon has seen a 3x increase in the number of marketing pages shipped per quarter, with a corresponding 22% increase in overall conversion rates across their key landing pages.</p>
      </>
    )
  },
  supabase: {
    id: "supabase",
    name: "Supabase",
    title: "Scaling Supabase's Open Source Narrative with Consistent Design",
    heroColor: "#3ECF8E",
    description: "Supabase is an open source Firebase alternative, providing all the backend features developers need to build a product.",
    founded: "January 1, 2020",
    joined: "August 05, 2025",
    website: "https://supabase.com",
    content: (
      <>
        <p>Supabase's community-driven approach requires a constant stream of new content, documentation updates, and feature announcements. Their marketing site serves as the central hub for a highly technical audience.</p>
        
        <h3> Designing for developers </h3>
        <p>The challenge was maintaining a sleek, modern aesthetic that appealed to developers while communicating complex technical concepts clearly. Our component library provided the perfect balance of form and function.</p>
        
        <h3> Seamless integration </h3>
        <p>By leveraging the system's flexible theming and modular architecture, Supabase was able to maintain their unique brand identity—complete with their signature green accents and dark mode bias—while drastically reducing the boilerplate code required to build new pages.</p>
      </>
    )
  },
  openai: {
    id: "openai",
    name: "OpenAI",
    title: "How OpenAI Communicates Complex AI Advancements Through Simple Design",
    heroColor: "#10A37F",
    description: "OpenAI is an AI research and deployment company dedicated to ensuring that artificial general intelligence benefits all of humanity.",
    founded: "December 11, 2015",
    joined: "October 30, 2025",
    website: "https://openai.com",
    content: (
      <>
        <p>OpenAI frequently announces groundbreaking research and product updates that command global attention. Their website needs to handle massive traffic spikes while presenting highly technical information in an accessible way.</p>
        
        <h3> Focus on the message </h3>
        <p>Our minimalistic and highly performant component system allowed OpenAI's team to focus entirely on the content and narrative of their announcements, rather than wrestling with layout issues or responsive design bugs.</p>
        
        <h3> Building trust through consistency </h3>
        <p>A consistent, polished visual language across all touchpoints is crucial for a company shaping the future of AI. The systematic approach ensured that every new research paper, blog post, and product page felt like a unified part of the OpenAI ecosystem.</p>
      </>
    )
  }
};

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  // Use React.use() to unwrap params per Next.js 15+ patterns if applicable, or standard if earlier.
  // Actually, we can just use the unwrapped params if it's Next.js 14, but we'll safely use standard.
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const study = caseStudiesData[slug];

  if (!study) {
    return (
      <main style={{ backgroundColor: "transparent", color: "#ffffff", minHeight: "100vh", fontFamily: "var(--font-inter), sans-serif" }}>
        <Navbar />
        <div style={{ paddingTop: "180px", textAlign: "center", paddingBottom: "100px" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: 700 }}>Case Study Not Found</h1>
          <Link href="/case-studies" style={{ color: "rgba(255,255,255,0.6)", marginTop: "20px", display: "inline-block" }}>
            Return to Case Studies
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main style={{ backgroundColor: "transparent", color: "#ffffff", minHeight: "100vh", fontFamily: "var(--font-inter), sans-serif" }}>
      <Navbar />
      
      {/* Article Container */}
      <article style={{ paddingTop: "160px", paddingBottom: "120px", paddingLeft: "24px", paddingRight: "24px", maxWidth: "800px", margin: "0 auto" }}>
        
        {/* Back Link */}
        <Link href="/case-studies" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "14px", fontWeight: 500, marginBottom: "40px", transition: "color 0.2s ease" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "white"}
              onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}>
          <ArrowLeft size={16} /> Back to Case Studies
        </Link>

        {/* Title */}
        <h1 style={{ fontSize: "3rem", fontWeight: 700, marginBottom: "48px", letterSpacing: "-0.02em", lineHeight: 1.2, textAlign: "center" }}>
          {study.title}
        </h1>

        {/* Hero Graphic */}
        <div style={{ 
          background: "white", 
          borderRadius: "16px", 
          height: "400px", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          marginBottom: "64px",
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Logo Name text as graphic */}
          <div style={{ fontSize: "5rem", fontWeight: 800, color: study.heroColor, letterSpacing: "-0.04em", zIndex: 10 }}>
            {study.name.toLowerCase()}
          </div>
          
          {/* Decorative geometric shapes based on user image */}
          <div style={{ position: "absolute", bottom: "10%", right: "15%", width: "300px", height: "40px", background: "#88ddff", transform: "rotate(-5deg)", zIndex: 1 }} />
          <div style={{ position: "absolute", bottom: "5%", right: "10%", width: "200px", height: "60px", background: study.heroColor, opacity: 0.8, transform: "rotate(-5deg)", zIndex: 2 }} />
        </div>

        {/* Description Intro */}
        <p style={{ fontSize: "1.25rem", color: "rgba(255, 255, 255, 0.9)", lineHeight: 1.6, marginBottom: "64px", fontWeight: 400 }}>
          {study.description}
        </p>

        {/* Stats Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(3, 1fr)", 
          gap: "24px", 
          borderTop: "1px solid rgba(255, 255, 255, 0.1)", 
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)", 
          paddingTop: "32px",
          paddingBottom: "32px",
          marginBottom: "64px"
        }}>
          <div>
            <div style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255, 255, 255, 0.5)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
              Founded
            </div>
            <div style={{ fontSize: "15px", color: "white", fontWeight: 500 }}>
              {study.founded}
            </div>
          </div>
          <div>
            <div style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255, 255, 255, 0.5)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
              Joined
            </div>
            <div style={{ fontSize: "15px", color: "white", fontWeight: 500 }}>
              {study.joined}
            </div>
          </div>
          <div>
            <div style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255, 255, 255, 0.5)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
              Website
            </div>
            <Link href={study.website} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "15px", color: "white", fontWeight: 500, textDecoration: "none" }}>
              Visit Site <ExternalLink size={14} color="rgba(255,255,255,0.5)" />
            </Link>
          </div>
        </div>

        {/* Main Content Styling */}
        <div className="case-study-content">
          {study.content}
          
          <p>Tailark Pro helped {study.name} regain something essential: the feeling of momentum.</p>
          <p>The results internally were unmistakable:</p>
          <ul>
            <li>Cross-team dependencies became easier to navigate because everyone worked within the same design grammar.</li>
            <li>Page production accelerated, not by a small margin, but by a meaningful factor.</li>
            <li>Quality increased because the system made the right choices obvious.</li>
          </ul>
          <p>{study.name} didn't adopt Tailark Pro because they needed more features. They adopted it because they needed fewer obstacles.</p>

          <h3>The feeling of a tool that gets out of your way</h3>
          <p>The best tools don't merely increase output—they reduce cognitive weight. They create a sense of clarity that is hard to articulate but easy to recognize. They shift organizations from "managing complexity" to "focusing on craft."</p>
          <p>When asked what changed after the adoption of Tailark Pro, one engineer said:<br/>"It wasn't one big moment. It was all the small moments that stopped slowing us down."</p>
          <p>In the end, that's what mattered. Not the number of components. Not the templates. Not the technology. But the feeling of moving fast without friction—a sense that the system supported the pace of {study.name}, rather than constraining it.</p>
          <p>When teams experience that feeling, the choice becomes obvious. You don't need to convince them.<br/>You just need to let them use it.</p>
        </div>

        {/* Testimonial / Quote Section */}
        <div style={{
          marginTop: "64px",
          paddingTop: "64px",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          display: "flex",
          gap: "32px",
          alignItems: "flex-start"
        }}>
          <div style={{ flexShrink: 0 }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.8 }}>
              <path d="M14.017 21L16.411 14.12C16.411 14.12 15.658 14.12 14.906 14.12C13.242 14.12 11.896 12.774 11.896 11.11C11.896 9.44601 13.242 8.10001 14.906 8.10001C16.57 8.10001 17.916 9.44601 17.916 11.11C17.916 12.013 17.48 12.822 16.793 13.332L14.017 21ZM5.01697 21L7.41097 14.12C7.41097 14.12 6.65797 14.12 5.90597 14.12C4.24197 14.12 2.89597 12.774 2.89597 11.11C2.89597 9.44601 4.24197 8.10001 5.90597 8.10001C7.56997 8.10001 8.91597 9.44601 8.91597 11.11C8.91597 12.013 8.47997 12.822 7.79297 13.332L5.01697 21Z" />
            </svg>
          </div>
          <div>
            <p style={{ fontSize: "1.125rem", color: "white", lineHeight: 1.6, fontWeight: 500, marginBottom: "32px", fontFamily: "var(--font-inter), sans-serif" }}>
              "The component library from Tailark has been a game-changer for our development team. We can quickly build consistent interfaces across our payment platform with minimal effort. The documentation is excellent and the customization options are exactly what we needed."
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <img 
                src="https://i.pravatar.cc/150?img=11" 
                alt="Patrick Collison" 
                style={{ width: "48px", height: "48px", borderRadius: "50%", objectFit: "cover" }} 
              />
              <div>
                <div style={{ color: "white", fontWeight: 600, fontSize: "1rem" }}>Patrick Collison</div>
                <div style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "0.875rem", marginTop: "2px" }}>CEO</div>
              </div>
            </div>
          </div>
        </div>

      </article>

      {/* Global styles for the content block */}
      <style dangerouslySetInnerHTML={{__html: `
        .case-study-content {
          color: rgba(255, 255, 255, 0.7);
          font-size: 1.125rem;
          line-height: 1.7;
        }
        .case-study-content p {
          margin-bottom: 24px;
        }
        .case-study-content h3 {
          color: white;
          font-size: 1.75rem;
          font-weight: 700;
          margin-top: 56px;
          margin-bottom: 24px;
          letter-spacing: -0.01em;
          line-height: 1.3;
        }
        .case-study-content ul {
          margin-bottom: 24px;
          padding-left: 24px;
        }
        .case-study-content li {
          margin-bottom: 12px;
          position: relative;
        }
        .case-study-content li::marker {
          color: rgba(255, 255, 255, 0.4);
        }
      `}} />

      <Footer />
    </main>
  );
}
