"use client";

import styles from "./practice.module.css";
import mainStyles from "../page.module.css";
import Link from "next/link";
import LoginLiquidMorph from "@/components/LoginLiquidMorph";
import {
    Bot, ArrowUp, Mail, MapPin, PhoneCall, ArrowRight,
    Code, Database, Brain, Cpu, Layers, MessageSquare,
    Terminal, BarChart, Network, ChevronDown
} from "lucide-react";

const techAgents = [
    {
        id: "frontend",
        name: "Frontend Specialist",
        icon: <Layers size={32} />,
        desc: "React, Next.js, Performance Optimization, and System Design for the Web."
    },
    {
        id: "backend",
        name: "Backend Architect",
        icon: <Terminal size={32} />,
        desc: "Node.js, Go, Database Schema, Scalability, and Distributed Systems."
    },
    {
        id: "datascience",
        name: "Data Science Expert",
        icon: <BarChart size={32} />,
        desc: "Python, Pandas, Visualizations, and Statistical Methods for Business."
    },
    {
        id: "genai",
        name: "GenAI Specialist",
        icon: <Brain size={32} />,
        desc: "LLMs, RAG Architectures, Vector Stores, and AI Prompt Engineering."
    },
    {
        id: "mlops",
        name: "MLOps Engineer",
        icon: <Network size={32} />,
        desc: "Deployment Pipelines, Model Monitoring, and Cloud AI Infrastructure."
    }
];

const englishExams = [
    {
        id: "ielts",
        name: "IELTS",
        tag: "International English",
        desc: "Academic & General Training mock sessions for speaking and writing."
    },
    {
        id: "toefl",
        name: "TOEFL iBT",
        tag: "Academic Excellence",
        desc: "Structure your answers for university-level academic speaking tasks."
    },
    {
        id: "pte",
        name: "PTE Academic",
        tag: "Pearson Test",
        desc: "AI-ready preparation focusing on fluency and pronunciation scoring."
    }
];

const coursesAgents = [
    { id: "softskills", name: "Executive Soft Skills", icon: <MessageSquare size={32} />, desc: "Master the art of high-stakes communication." },
    { id: "systemdesign", name: "System Design Masterclass", icon: <Cpu size={32} />, desc: "Scale your architecture knowledge from 0 to 1M." },
    { id: "leadership", name: "Leadership Coaching", icon: <Network size={32} />, desc: "Prepare for management and VP-level inquiries." }
];

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PracticeInterviewPage() {
    return (
        <main className={styles.practicePage}>
            <Navbar />

            {/* HERO SECTION */}
            <section className={styles.heroSection}>
                <div className={styles.heroLabel}>Practice Arena</div>
                <h1 className={styles.heroTitle}>Master Every Scenario with AI Agents</h1>
                <p className={styles.heroSubtitle}>
                    From high-stakes Technical Interviews to English Fluency exams—choose your specialized AI Agent and start practicing.
                </p>
            </section>

            <div className={styles.mainContent}>
                {/* Description Panel */}
                <section className={styles.descriptionPanel}>
                    <div className={styles.descText}>
                        <h2>Why Practice with Interview AI?</h2>
                        <p>
                            Our simulation engine uses low-latency neural voices and real-time behavioral analysis
                            to provide an experience indistinguishable from a real physical interview. You&apos;ll get
                            immediate feedback on technical accuracy, sentiment, and structural delivery.
                        </p>
                        <div className={styles.statsGrid}>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>94%</span>
                                <span className={styles.statLabel}>Success Rate</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>1.2M+</span>
                                <span className={styles.statLabel}>Sessions Held</span>
                            </div>
                        </div>
                    </div>
                    <div style={{ background: 'var(--dark-card)', borderRadius: '24px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--dark-border)' }}>
                        <Bot size={120} color="var(--primary)" opacity={0.3} />
                    </div>
                </section>

                {/* Technical Interview Section */}
                <section>
                    <div className={styles.sectionTitleWrapper}>
                        <div>
                            <h2 className={styles.sectionTitle}>Technical Interview</h2>
                            <p className={styles.sectionSubtitle}>Select your domain and face our specialized Technical Agents.</p>
                        </div>
                    </div>
                    <div className={styles.agentsGrid}>
                        {techAgents.map((agent) => (
                            <div key={agent.id} className={styles.agentCard}>
                                <div className={styles.iconBox}>{agent.icon}</div>
                                <h3 className={styles.agentName}>{agent.name}</h3>
                                <p className={styles.agentDesc}>{agent.desc}</p>
                                <div className={styles.startBtn}>
                                    Start Practice <span><ArrowRight size={18} /></span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* English Conversation Practice */}
                <section className={styles.englishSection}>
                    <div className={styles.sectionTitleWrapper}>
                        <div>
                            <h2 className={styles.sectionTitle}>English Fluency</h2>
                            <p className={styles.sectionSubtitle} style={{ color: '#94a3b8' }}>Professional & Academic proficiency exams practice.</p>
                        </div>
                    </div>
                    <div className={styles.englishGrid}>
                        {englishExams.map((exam) => (
                            <div key={exam.id} className={styles.englishCard}>
                                <div className={styles.examTag}>{exam.tag}</div>
                                <div className={styles.examLogo}>{exam.name}</div>
                                <p className={styles.agentDesc} style={{ color: '#94a3b8' }}>{exam.desc}</p>
                                <div className={styles.startBtn} style={{ color: '#fff' }}>
                                    Begin Mock Test <span><ArrowRight size={18} /></span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Courses Section */}
                <section>
                    <div className={styles.sectionTitleWrapper}>
                        <div>
                            <h2 className={styles.sectionTitle}>Courses & Workshops</h2>
                            <p className={styles.sectionSubtitle}>Guided AI-driven pathways for specific high-value skills.</p>
                        </div>
                    </div>
                    <div className={styles.agentsGrid}>
                        {coursesAgents.map((course) => (
                            <div key={course.id} className={styles.agentCard}>
                                <div className={styles.iconBox} style={{ background: '#fff7ed', color: '#f97316' }}>{course.icon}</div>
                                <h3 className={styles.agentName}>{course.name}</h3>
                                <p className={styles.agentDesc}>{course.desc}</p>
                                <div className={styles.startBtn} style={{ color: '#f97316' }}>
                                    Explore Course <span><ArrowRight size={18} /></span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}

