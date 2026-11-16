"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Sparkles, Mail, Lock, User, ArrowRight, CheckCircle2, 
  Github, Chrome, Shield, Briefcase, UserCheck
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [tab, setTab] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState<"candidate" | "recruiter">("candidate");
  const [isLoading, setIsLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setSuccessMsg(tab === "login" ? "Welcome back! Redirecting to setup..." : "Account created successfully! Redirecting...");
      setTimeout(() => {
        router.push("/role-setup");
      }, 900);
    }, 800);
  };

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#06030E", color: "#fff" }}>
      <Navbar />

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "6rem 1rem 4rem" }}>
        <div
          style={{
            width: "100%",
            maxWidth: "460px",
            background: "rgba(16, 14, 28, 0.85)",
            border: "1px solid rgba(139, 92, 246, 0.25)",
            borderRadius: "24px",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            padding: "2.5rem 2rem",
            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(139, 92, 246, 0.15)",
          }}
        >
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.35rem 0.9rem",
                borderRadius: "99px",
                background: "rgba(139, 92, 246, 0.15)",
                border: "1px solid rgba(139, 92, 246, 0.3)",
                color: "#c084fc",
                fontSize: "0.8rem",
                fontWeight: 600,
                marginBottom: "1rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              <Sparkles size={14} /> AI Powered Platform
            </div>

            <h1 style={{ fontSize: "2rem", fontWeight: 700, margin: "0 0 0.5rem", letterSpacing: "-0.02em" }}>
              {tab === "login" ? "Welcome Back" : "Get Started Free"}
            </h1>
            <p style={{ color: "#94a3b8", fontSize: "0.9rem", margin: 0 }}>
              {tab === "login" 
                ? "Enter your credentials to access your interview workspace" 
                : "Create an account to begin practicing AI interviews"}
            </p>
          </div>

          {/* Tab Switcher */}
          <div
            style={{
              display: "flex",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              padding: "4px",
              marginBottom: "1.75rem",
            }}
          >
            <button
              type="button"
              onClick={() => { setTab("login"); setSuccessMsg(null); }}
              style={{
                flex: 1,
                padding: "0.6rem 0",
                border: "none",
                borderRadius: "8px",
                background: tab === "login" ? "#8B5CF6" : "transparent",
                color: tab === "login" ? "white" : "rgba(255, 255, 255, 0.6)",
                fontWeight: 600,
                fontSize: "0.9rem",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => { setTab("signup"); setSuccessMsg(null); }}
              style={{
                flex: 1,
                padding: "0.6rem 0",
                border: "none",
                borderRadius: "8px",
                background: tab === "signup" ? "#8B5CF6" : "transparent",
                color: tab === "signup" ? "white" : "rgba(255, 255, 255, 0.6)",
                fontWeight: 600,
                fontSize: "0.9rem",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              Create Account
            </button>
          </div>

          {/* Success Banner */}
          {successMsg && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.85rem 1rem",
                borderRadius: "10px",
                background: "rgba(16, 185, 129, 0.15)",
                border: "1px solid rgba(16, 185, 129, 0.4)",
                color: "#34d399",
                fontSize: "0.88rem",
                fontWeight: 600,
                marginBottom: "1.25rem",
              }}
            >
              <CheckCircle2 size={18} />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Social Quick Login */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <button
              type="button"
              onClick={() => {
                setSuccessMsg("Signed in with Google!");
                setTimeout(() => router.push("/role-setup"), 800);
              }}
              style={{
                padding: "0.65rem 1rem",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "10px",
                color: "white",
                fontSize: "0.85rem",
                fontWeight: 500,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"}
            >
              <Chrome size={16} color="#ea4335" /> Google
            </button>
            <button
              type="button"
              onClick={() => {
                setSuccessMsg("Signed in with GitHub!");
                setTimeout(() => router.push("/role-setup"), 800);
              }}
              style={{
                padding: "0.65rem 1rem",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "10px",
                color: "white",
                fontSize: "0.85rem",
                fontWeight: 500,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"}
            >
              <Github size={16} /> GitHub
            </button>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ flex: 1, height: "1px", background: "rgba(255, 255, 255, 0.1)" }} />
            <span style={{ fontSize: "0.75rem", color: "#64748b", textTransform: "uppercase" }}>or with email</span>
            <div style={{ flex: 1, height: "1px", background: "rgba(255, 255, 255, 0.1)" }} />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
            {tab === "signup" && (
              <>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#cbd5e1", marginBottom: "0.4rem" }}>
                    Full Name
                  </label>
                  <div style={{ position: "relative" }}>
                    <User size={18} style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "#64748b" }} />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex Taylor"
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem 0.75rem 2.75rem",
                        background: "rgba(10, 8, 20, 0.7)",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        borderRadius: "10px",
                        color: "white",
                        fontSize: "0.95rem",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                {/* Role Switcher */}
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#cbd5e1", marginBottom: "0.4rem" }}>
                    I am using Interview AI as:
                  </label>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
                    <button
                      type="button"
                      onClick={() => setRole("candidate")}
                      style={{
                        padding: "0.6rem 0.5rem",
                        background: role === "candidate" ? "rgba(139, 92, 246, 0.2)" : "rgba(255, 255, 255, 0.04)",
                        border: role === "candidate" ? "1px solid #8B5CF6" : "1px solid rgba(255, 255, 255, 0.08)",
                        borderRadius: "8px",
                        color: role === "candidate" ? "#e9d5ff" : "#94a3b8",
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                      }}
                    >
                      <UserCheck size={15} /> Job Seeker
                    </button>
                    <button
                      type="button"
                      onClick={() => setRole("recruiter")}
                      style={{
                        padding: "0.6rem 0.5rem",
                        background: role === "recruiter" ? "rgba(139, 92, 246, 0.2)" : "rgba(255, 255, 255, 0.04)",
                        border: role === "recruiter" ? "1px solid #8B5CF6" : "1px solid rgba(255, 255, 255, 0.08)",
                        borderRadius: "8px",
                        color: role === "recruiter" ? "#e9d5ff" : "#94a3b8",
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                      }}
                    >
                      <Briefcase size={15} /> Recruiter
                    </button>
                  </div>
                </div>
              </>
            )}

            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#cbd5e1", marginBottom: "0.4rem" }}>
                Work Email
              </label>
              <div style={{ position: "relative" }}>
                <Mail size={18} style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "#64748b" }} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com"
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem 0.75rem 2.75rem",
                    background: "rgba(10, 8, 20, 0.7)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "10px",
                    color: "white",
                    fontSize: "0.95rem",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
                <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "#cbd5e1" }}>
                  Password
                </label>
                {tab === "login" && (
                  <button
                    type="button"
                    onClick={() => alert("Password reset instructions have been dispatched to your email address.")}
                    style={{ background: "none", border: "none", color: "#a78bfa", fontSize: "0.78rem", cursor: "pointer", padding: 0 }}
                  >
                    Forgot password?
                  </button>
                )}
              </div>
              <div style={{ position: "relative" }}>
                <Lock size={18} style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "#64748b" }} />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem 0.75rem 2.75rem",
                    background: "rgba(10, 8, 20, 0.7)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "10px",
                    color: "white",
                    fontSize: "0.95rem",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              style={{
                marginTop: "0.5rem",
                padding: "0.85rem",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
                border: "none",
                color: "white",
                fontSize: "1rem",
                fontWeight: 700,
                cursor: isLoading ? "wait" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                boxShadow: "0 4px 18px rgba(139, 92, 246, 0.4)",
                transition: "all 0.2s ease",
              }}
            >
              {isLoading ? (
                "Processing..."
              ) : (
                <>
                  {tab === "login" ? "Sign In to Dashboard" : "Create Free Account"} <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          {/* Footer note */}
          <div style={{ marginTop: "1.75rem", textAlign: "center", fontSize: "0.8rem", color: "#64748b" }}>
            By continuing, you agree to Interview AI's{" "}
            <Link href="/legal" style={{ color: "#a78bfa", textDecoration: "none" }}>
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/legal" style={{ color: "#a78bfa", textDecoration: "none" }}>
              Privacy Policy
            </Link>.
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
