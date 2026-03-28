"use client";

import Link from "next/link";
import styles from "./blog.module.css";
import mainStyles from "../page.module.css";
import LoginLiquidMorph from "@/components/LoginLiquidMorph";
import {
    Bot, ArrowUp, Mail, MapPin, PhoneCall,
    Radio, Code, Search
} from "lucide-react";

export default function BlogPage() {
    return (
        <main className={styles.blogPage}>
            {/* NAVBAR */}
            <div style={{ position: 'sticky', top: 0, left: 0, right: 0, zIndex: 1000, background: 'rgba(5, 1, 13, 0.7)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <div className="container">
                    <nav className="navbar animate-fade" style={{ padding: '1rem 0' }}>
                        <div className="brand">
                            <Bot size={32} color="var(--primary)" />
                            Interview AI
                        </div>
                        <ul className="nav-links">
                            <li className="nav-link"><Link href="/">Home</Link></li>
                            <li className="nav-link"><Link href="#">Career Preparation</Link></li>
                            <li className="nav-link"><Link href="#">Learn & Grow</Link></li>
                            <li className="nav-link active"><Link href="/blog">Blog</Link></li>
                            <li className="nav-link"><Link href="/contact">Contact Us</Link></li>
                        </ul>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                            <LoginLiquidMorph />
                            <button className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', borderRadius: '10px' }}>Get Started</button>
                        </div>
                    </nav>
                </div>
            </div>

            <div className={styles.blogContainer}>
                {/* BLOG HERO - Featured Cards */}
                <section className={styles.blogHero}>
                    <Link href="/blog/announcing-career-vault" className={styles.featuredCard}>
                        <div className={styles.cardIcon}><Radio size={32} /></div>
                        <h3 className={styles.cardTitle}>Announcing Career Vault: Why we built a job hub for modern talent</h3>
                        <span className={styles.cardDate}>2025-10-15</span>
                    </Link>
                    <div className={styles.featuredCard}>
                        <div className={styles.cardIcon}><Code size={32} /></div>
                        <h3 className={styles.cardTitle}>The hidden data engineering behind our AI interview model</h3>
                        <span className={styles.cardDate}>2025-08-17</span>
                    </div>
                    <Link href="/blog/our-vision-research" className={styles.featuredCard}>
                        <div className={styles.cardIcon}><Search size={32} /></div>
                        <h3 className={styles.cardTitle}>Our vision: Human-Centric AI Career Coaching</h3>
                        <span className={styles.cardDate}>2025-07-24</span>
                    </Link>
                </section>

                {/* Vision Section */}
                <section className={styles.categorySection}>
                    <h2 className={styles.categoryTitle}>Vision</h2>
                    <div className={styles.postList}>
                        <Link href="/blog/our-vision-research" className={styles.postItem}>
                            <span className={styles.postItemTitle}>Our vision: Human-Centric AI Career Coaching</span>
                            <span className={styles.postItemDate}>2025-07-24</span>
                        </Link>
                        <div className={styles.postItem}>
                            <span className={styles.postItemTitle}>The Purpose of Generative AI in Recruitment</span>
                            <span className={styles.postItemDate}>2025-06-12</span>
                        </div>
                    </div>
                </section>

                {/* Research Section */}
                <section className={styles.categorySection}>
                    <h2 className={styles.categoryTitle}>Research</h2>
                    <div className={styles.postList}>
                        <div className={styles.postItem}>
                            <span className={styles.postItemTitle}>The finishing touches: Audio Latency in Mock Interviews</span>
                            <span className={styles.postItemDate}>2025-05-25</span>
                        </div>
                        <div className={styles.postItem}>
                            <span className={styles.postItemTitle}>The carrier and the beacon: Real-time sentiment analysis</span>
                            <span className={styles.postItemDate}>2025-05-14</span>
                        </div>
                        <div className={styles.postItem}>
                            <span className={styles.postItemTitle}>Designing a world-class code execution environment for technical rounds</span>
                            <span className={styles.postItemDate}>2025-05-02</span>
                        </div>
                        <div className={styles.postItem}>
                            <span className={styles.postItemTitle}>Mastering behavioral patterns in AI feedback models</span>
                            <span className={styles.postItemDate}>2025-04-18</span>
                        </div>
                    </div>
                </section>

                {/* Announcements Section */}
                <section className={styles.categorySection}>
                    <h2 className={styles.categoryTitle}>Announcements</h2>
                    <div className={styles.postList}>
                        <div className={styles.postItem}>
                            <span className={styles.postItemTitle}>Announcing the acquisition of SkillMatch Labs</span>
                            <span className={styles.postItemDate}>2025-03-22</span>
                        </div>
                        <div className={styles.postItem}>
                            <span className={styles.postItemTitle}>Enabling the AI-Powered HR Enterprise with InterviewAI Pro</span>
                            <span className={styles.postItemDate}>2025-03-01</span>
                        </div>
                        <div className={styles.postItem}>
                            <span className={styles.postItemTitle}>Unveiling our first-party partnership with LinkedIn Talent Solutions</span>
                            <span className={styles.postItemDate}>2025-02-14</span>
                        </div>
                        <div className={styles.postItem}>
                            <span className={styles.postItemTitle}>Announcing our $50 million Series B fundraise to expand global reach</span>
                            <span className={styles.postItemDate}>2025-01-05</span>
                        </div>
                    </div>
                </section>
            </div>

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
                                <Link href="#">Career Preparation</Link>
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
