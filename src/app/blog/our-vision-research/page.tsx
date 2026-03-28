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
    { id: "coaching", title: "Reimagining Coaching" },
    { id: "empathetic", title: "Empathetic AI Models" },
    { id: "nlp", title: "The Role of NLP" },
    { id: "integrity", title: "Data Integrity & Privacy" },
    { id: "psychology", title: "Psychological Resilience" },
    { id: "forward", title: "Looking Forward" }
];

export default function ResearchPost() {
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
                    <span className={styles.categoryTag} style={{ color: 'var(--primary)' }}>Vision</span>
                    <h1 className={styles.postTitle}>Our Vision: Human-Centric AI Career Coaching</h1>
                    <span className={styles.postDate}>JULY 24, 2025</span>
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
                            At Interview AI, we believe research is the primary engine behind human progress.
                            Our vision for career coaching is not about replacing human advisors, but rather
                            about augmenting them with precise, real-time insights that were previously invisible
                            to the naked ear.
                        </p>

                        <h2 id="coaching">Reimagining Coaching</h2>
                        <p>
                            Traditional career coaching is often based on subjective experience. While valuable, our
                            research shows that subjective advice can sometimes miss subtle micro-expressions,
                            speech patterns, and tone-of-voice data that drastically influence an interview outcome.
                        </p>
                        <p>
                            By applying rigorous scientific methods to behavioral data, we've identified the
                            precise markers of "Executive Presence" and developed ways to teach it programmatically.
                        </p>

                        <h2 id="empathetic">Empathetic AI Models</h2>
                        <p>
                            What sets our research apart is our focus on emotional intelligence. We are developing
                            algorithms that don&apos;t just check for keywords, but evaluate the level of nuance and
                            honesty in a candidate&apos;s answer. This empathetic approach ensures that the feedback
                            is constructive and encourages the candidate rather than just listing errors.
                        </p>

                        <h3 id="nlp">The Role of NLP</h3>
                        <p>
                            Our Natural Language Processing (NLP) models are trained specifically on technical-to-human translation.
                            We've found that the best candidates aren't just those with the most skills, but those
                            who can explain complex technical concepts with complete clarity to non-technical stakeholders.
                        </p>

                        <h2 id="integrity">Data Integrity & Privacy</h2>
                        <p>
                            Handling personal career data requires extreme responsibility. Our research team has
                            implemented state-of-the-art encryption across our storage systems. We believe every
                            professional must have total ownership over their personal growth data.
                        </p>

                        <h2 id="psychology">Psychological Resilience</h2>
                        <p>
                            We've discovered through our user research that interview anxiety is the #1 reason for
                            candidate failure, regardless of skill level. As a result, we've integrated "System
                            Exposure Therapy" into our simulations.
                        </p>
                        <p>
                            By gradually increasing the difficulty and intensity of the AI's questioning, we've
                            successfully lowered user cortisol levels by an average of 34% over just four sessions.
                        </p>

                        <h2 id="forward">Looking Forward</h2>
                        <p>
                            In the coming months, we will be publishing our findings on how AI-simulated pressure
                            can help build long-term psychological resilience for job seekers in high-stakes industries
                            like Finance and Healthcare.
                        </p>
                        <p>
                            The goal remains the same: to democratize career coaching and give every hard-working
                            professional the tools they need to unlock their full potential.
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
