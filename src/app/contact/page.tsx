"use client";

import Link from "next/link";
import styles from "./contact.module.css";
import mainStyles from "../page.module.css";
import LoginLiquidMorph from "@/components/LoginLiquidMorph";
import {
    Bot, ArrowUp, Mail, MapPin, PhoneCall,
    Twitter, Instagram, Linkedin, Facebook, Send,
    Clock
} from "lucide-react";

export default function ContactPage() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Message sent! We'll get back to you shortly.");
    };

    return (
        <main className={styles.contactPage}>
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
                            <li className="nav-link"><Link href="/blog">Blog</Link></li>
                            <li className="nav-link active"><Link href="/contact">Contact Us</Link></li>
                        </ul>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                            <LoginLiquidMorph />
                            <button className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', borderRadius: '10px' }}>Get Started</button>
                        </div>
                    </nav>
                </div>
            </div>

            <div className={styles.contactContainer}>
                {/* HEADER */}
                <header className={styles.contactHeader}>
                    <span className={styles.contactLabel}>Contact Us</span>
                    <h1 className={styles.contactTitle}>Let&apos;s Build Your Career Together</h1>
                    <p className={styles.contactSubtitle}>
                        Have questions about our AI coaching? Want to discuss a custom training plan?
                        We&apos;re here to help you navigate your journey to success.
                    </p>
                </header>

                <section className={styles.contactGrid}>
                    {/* INFO SECTION */}
                    <div className={styles.infoSection}>
                        <div className={styles.infoCard}>
                            <div className={styles.infoIconWrapper}><Mail size={24} /></div>
                            <h3 className={styles.infoTitle}>Email Us</h3>
                            <p className={styles.infoValue}>support@interviewai.com<br />hello@interviewai.com</p>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.infoIconWrapper}><PhoneCall size={24} /></div>
                            <h3 className={styles.infoTitle}>Call Anytime</h3>
                            <p className={styles.infoValue}>+1 (786) 259 4652<br />+1 (800) 456 7890</p>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.infoIconWrapper}><MapPin size={24} /></div>
                            <h3 className={styles.infoTitle}>Visit HQ</h3>
                            <p className={styles.infoValue}>1800 Walt Disney World, Bay Lake,<br />Orlando, FL 32836, United States</p>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.infoIconWrapper}><Clock size={24} /></div>
                            <h3 className={styles.infoTitle}>Support Hours</h3>
                            <p className={styles.infoValue}>Monday - Friday: 9AM - 6PM EST<br />Saturday: 10AM - 2PM EST</p>
                        </div>

                        <div style={{ marginTop: '1rem' }}>
                            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1a1a1a' }}>Follow Our Journey</h4>
                            <div className={styles.socialIcons}>
                                <div className={styles.socialIcon}><Twitter size={20} /></div>
                                <div className={styles.socialIcon}><Instagram size={20} /></div>
                                <div className={styles.socialIcon}><Linkedin size={20} /></div>
                                <div className={styles.socialIcon}><Facebook size={20} /></div>
                            </div>
                        </div>
                    </div>

                    {/* FORM SECTION */}
                    <div className={styles.formSection}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Full Name</label>
                                <input type="text" placeholder="Enter your full name" className={styles.formInput} required />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Email Address</label>
                                <input type="email" placeholder="you@example.com" className={styles.formInput} required />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Subject</label>
                                <select className={styles.formInput}>
                                    <option>General Inquiry</option>
                                    <option>Technical Support</option>
                                    <option>Pricing & Plans</option>
                                    <option>Business Partnerships</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Your Message</label>
                                <textarea placeholder="How can we help you today?" className={styles.formTextarea} required></textarea>
                            </div>

                            <button type="submit" className={styles.submitBtn}>
                                Send Message <Send size={20} />
                            </button>
                        </form>
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
