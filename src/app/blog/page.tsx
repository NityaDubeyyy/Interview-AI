"use client";

import Link from "next/link";
import styles from "./blog.module.css";
import mainStyles from "../page.module.css";
import LoginLiquidMorph from "@/components/LoginLiquidMorph";
import {
    Bot, ArrowUp, Mail, MapPin, PhoneCall,
    Radio, Code, Search
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogPage() {
    return (
        <main className={styles.blogPage}>
            {/* NAVBAR */}
            <Navbar />

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

            <Footer />
        </main>
    );
}

