"use client";

import React, { useState } from "react";
import styles from "./contact.module.css";
import { Check, Send } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bulletItems = [
  "Faster interview screening with AI-driven insights",
  "Higher candidate conversion through engaging hiring experiences",
  "Custom workflows for volume hiring and campus recruitment",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className={styles.contactPage}>
      <Navbar />

      <div className={styles.contactSection}>
        <div className={styles.contentPanel}>
          <span className={styles.eyebrow}>Ready to scale your business?</span>
          <h1 className={styles.headline}>Get in touch below and build the future of hiring.</h1>
          <p className={styles.description}>
            Share your goals with our team and discover how AI-powered interviewing can speed hiring, improve quality, and delight candidates.
          </p>

          <div className={styles.highlights}>
            {bulletItems.map((text) => (
              <div key={text} className={styles.highlightItem}>
                <span className={styles.highlightIcon}>
                  <Check size={16} />
                </span>
                <p>{text}</p>
              </div>
            ))}
          </div>

          <div className={styles.metaGrid}>
            <div className={styles.metaCard}>
              <p className={styles.metaLabel}>Sales inquiry</p>
              <p className={styles.metaValue}>hello@virtualinterview.ai</p>
            </div>
            <div className={styles.metaCard}>
              <p className={styles.metaLabel}>Office hours</p>
              <p className={styles.metaValue}>Mon - Fri, 9am - 6pm</p>
            </div>
            <div className={styles.metaCard}>
              <p className={styles.metaLabel}>Call us</p>
              <p className={styles.metaValue}>+1 (888) 424-4567</p>
            </div>
          </div>
        </div>

        <div className={styles.formPanel}>
          <div className={styles.formHeader}>
            <span>Contact us</span>
            <h2>Tell us about your hiring challenge</h2>
            <p>
              We&apos;ll respond within one business day and help you choose the best solution for your team.
            </p>
          </div>

          {submitted ? (
            <div className={styles.successCard}>
              <div className={styles.successCircle}>
                <Check size={28} />
              </div>
              <h3>Thanks — your message is on its way.</h3>
              <p>One of our experts will contact you soon with next steps.</p>
              <button
                type="button"
                className={styles.submitBtn}
                onClick={() => setSubmitted(false)}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <label className={styles.fieldLabel}>
                Full name
                <input type="text" placeholder="Jane Cooper" required />
              </label>

              <label className={styles.fieldLabel}>
                Work email
                <input type="email" placeholder="jane@company.com" required />
              </label>

              <label className={styles.fieldLabel}>
                Company name
                <input type="text" placeholder="Acme Recruiting" required />
              </label>

              <label className={styles.fieldLabel}>
                Phone number
                <input type="tel" placeholder="(123) 456-7890" />
              </label>

              <label className={styles.fieldLabel}>
                Message
                <textarea placeholder="Tell us what you want to achieve with your hiring program..." required />
              </label>

              <button type="submit" className={styles.submitBtn}>
                Start the conversation <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
