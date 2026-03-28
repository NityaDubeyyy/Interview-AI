"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./post.module.css";
import mainStyles from "../../page.module.css";
import {
    Bot, ArrowUp, Mail, MapPin, PhoneCall,
    Twitter, Instagram, Linkedin, Facebook
} from "lucide-react";

const sections = [
    { id: "ambition", title: "Our Ambition" },
    { id: "centralization", title: "The Need for Centralization" },
    { id: "scale", title: "The Scale of Ambition" },
    { id: "works", title: "How it Works" },
    { id: "feedback", title: "Recursive Feedback Loops" },
    { id: "privacy", title: "Privacy by Design" },
    { id: "future", title: "Future of Career Vault" }
];

export default function SinglePost() {
    const [activeId, setActiveId] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-20% 0% -70% 0%" }
        );

        sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = el.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <main className={styles.postPage}>
            {/* NAVBAR */}
            <div className="container">
                <nav className="navbar animate-fade">
                    <div className="brand">
                        <Bot size={32} color="var(--primary)" />
                        Interview AI
                    </div>
                    <ul className="nav-links">
                        <li className="nav-link"><Link href="/">Home</Link></li>
                        <li className="nav-link"><Link href="/practice-interview">Career Preparation</Link></li>
                        <li className="nav-link"><Link href="#">Learn & Grow</Link></li>
                        <li className="nav-link active"><Link href="/blog">Blog</Link></li>
                        <li className="nav-link"><Link href="/contact">Contact Us</Link></li>
                    </ul>
                    <button className="btn btn-primary">Get Started</button>
                </nav>
            </div>

            {/* POST CONTENT */}
            <article>
                <header className={styles.postHeader}>
                    <span className={styles.categoryTag}>Announcements</span>
                    <h1 className={styles.postTitle}>Announcing Career Vault: Why we built a job hub for modern talent</h1>
                    <span className={styles.postDate}>OCTOBER 15, 2025</span>
                    <div className={styles.gradientDivider}></div>
                </header>

                <section className={styles.postContentArea}>
                    {/* SIDEBAR */}
                    <aside className={styles.sidebar}>
                        <span className={styles.sidebarLabel}>CONTENTS</span>
                        <ul className={styles.sidebarLinks}>
                            {sections.map((s) => (
                                <li
                                    key={s.id}
                                    className={activeId === s.id ? styles.activeLink : ""}
                                    onClick={() => scrollTo(s.id)}
                                >
                                    {s.title}
                                </li>
                            ))}
                        </ul>

                        <div className={styles.socialLinks}>
                            <Twitter size={18} className={styles.socialIcon} />
                            <Instagram size={18} className={styles.socialIcon} />
                            <Linkedin size={18} className={styles.socialIcon} />
                            <Facebook size={18} className={styles.socialIcon} />
                        </div>
                    </aside>

                    {/* ARTICLE BODY */}
                    <div className={styles.articleBody}>
                        <p>
                            We are excited to announce Career Vault, our most ambitious data infrastructure project to date.
                            Designed specifically for the modern job seeker, this decentralized yet unified hub will serve as the
                            backbone for the next generation of career management models.
                        </p>

                        <h2 id="ambition">Our Ambition</h2>
                        <p>
                            Our vision with Career Vault is to move beyond static resumes and one-off job applications.
                            We want to empower candidates with a dynamic repository of their skills, progress, and
                            practice data. By housing every simulated interview session, AI-critique, and skill-metric
                            in a single vault, we are creating a longitudinal view of professional growth.
                        </p>
                        <p>
                            In an era where technology evolves every quarter, a CV should be more than a CSV and more
                            than a PDF. It should be a living, breathing record of your capability and potential.
                            That is exactly what the Vault provides.
                        </p>

                        <h2 id="centralization">The Need for Centralization</h2>
                        <p>
                            The current landscape of job hunting is fragmented. Candidates jump between dozens of
                            platforms, losing track of their data and progress along the way. Texas provides a unique
                            combination of abundant renewable energy, a skilled tech workforce, and a business-friendly
                            environment that makes it the ideal physical location for our data centers housing the
                            Interview AI backend.
                        </p>

                        <h3 id="scale">The Scale of Ambition</h3>
                        <p>
                            To put our compute capacity into perspective, we are managing millions of data points every
                            hour. For our users, this represents the compute density required to train personalized
                            coaching models that are orders of magnitude more effective than generic career advice tools.
                        </p>

                        <h2 id="works">How it Works</h2>
                        <p>
                            Starting today, every Interview AI user will have access to their own Career Vault. This
                            vault automatically ingests data from your mock interviews, synthesizes actionable insights,
                            and even predicts which areas of your role-specific knowledge need the most refinement.
                        </p>
                        <p>
                            The ingestion process uses advanced NLP (Natural Language Processing) to strip away
                            unimportant filler words and focus purely on the core competency demonstrated during
                            the session.
                        </p>

                        <h2 id="feedback">Recursive Feedback Loops</h2>
                        <p>
                            One of the breakthrough features of Career Vault is its ability to perform "recursive feedback."
                            This means the AI doesn&apos;t just look at how you performed today—it looks at how you
                            responded to the advice it gave you last week.
                        </p>
                        <p>
                            If the system suggested you improve your "star method" storytelling, it will specifically
                            watch for those improvements in subsequent sessions, marking progress with a level of
                            granularity never before seen in digital coaching.
                        </p>

                        <h2 id="privacy">Privacy by Design</h2>
                        <p>
                            Handling personal career data requires extreme responsibility. Our research team has
                            implemented state-of-the-art encryption across our storage systems. We believe every
                            professional must have total ownership over their personal growth data.
                        </p>
                        <p>
                            This means your data is never sold to third-party recruiters without your explicit permission.
                            You own the Vault; we just provide the tools to fill it.
                        </p>

                        <h2 id="future">Future of Career Vault</h2>
                        <p>
                            In the coming months, we will be publishing our findings on how AI-simulated pressure
                            can help build long-term psychological resilience for job seekers in high-stakes industries.
                        </p>
                        <p>
                            The Vault is just the beginning. We envision a future where your Vault can securely
                            share "verified skills" directly with hiring managers, bypassing the traditional screening
                            phone call entirely.
                        </p>
                    </div>
                </section>
            </article>

            {/* FOOTER */}
            <footer className={mainStyles.footer}>
                <div className="container">
                    <div className={mainStyles.footerGrid}>
                        <div>
                            <div className={mainStyles.footerBrand}>
                                <Bot size={32} color="var(--primary)" />
                                Interview AI
                            </div>
                            <div className={mainStyles.footerContact}>
                                <div className={mainStyles.footerContactItem}>
                                    <MapPin size={18} color="var(--primary)" />
                                    <span>1800, Walt Disney World, Bay Lake,<br />Orlando, United State</span>
                                </div>
                                <div className={mainStyles.footerContactItem}>
                                    <Mail size={18} color="var(--primary)" />
                                    <span>support@interviewai.com</span>
                                </div>
                                <div className={mainStyles.footerContactItem}>
                                    <PhoneCall size={18} color="var(--primary)" />
                                    <span>+1 (786) 259 4652</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className={mainStyles.footerColTitle}>Company</div>
                            <div className={mainStyles.footerLinks}>
                                <Link href="/contact">Contact Us</Link>
                                <Link href="/blog">Blog</Link>
                                <Link href="#">Pricing</Link>
                                <Link href="#">Sign in / Sign Up</Link>
                            </div>
                        </div>

                        <div>
                            <div className={mainStyles.footerColTitle}>Quick Navigation</div>
                            <div className={mainStyles.footerLinks}>
                                <Link href="/">Home</Link>
                                <Link href="/practice-interview">Career Preparation</Link>
                                <Link href="#">Learn & Grow</Link>
                            </div>
                        </div>

                        <div>
                            <div className={mainStyles.footerColTitle}>Tools</div>
                            <div className={mainStyles.footerLinks}>
                                <Link href="#">Career Vault</Link>
                                <Link href="#">The Prep Engine</Link>
                                <Link href="#">Mock Interview</Link>
                                <Link href="#">Smart Career Coach</Link>
                                <Link href="#">Question Hub</Link>
                            </div>
                        </div>
                    </div>

                    <div className={mainStyles.footerBottom}>
                        <div>© 2026 InterviewAI. All rights reserved.</div>
                        <div className={mainStyles.backToTop} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            Back to the top <ArrowUp size={16} />
                        </div>
                    </div>
                </div>

                <div className={mainStyles.footerGiantText}>
                    Interview AI
                </div>
            </footer>
        </main>
    );
}
