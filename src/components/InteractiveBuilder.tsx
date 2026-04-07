"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  FileText, Settings, LineChart, Plus, Trash2, ChevronDown, LayoutGrid, ArrowUpRight, 
  Briefcase, Users, Milestone, ChevronLeft, ChevronRight, Check, Sparkles, Globe
} from 'lucide-react';
import styles from '../app/interview-builder/builder.module.css';

interface Question {
  id: number;
  tabId: number;
  type: string;
  text: string;
}

interface TemplateDetails {
  name: string;
  brand?: string;
  logo?: string;
  skills: number;
  rounds: number;
  questions: number;
  mins: number;
  color?: string;
}

const TABS = [
  { id: 1, name: "1. Phone Interview" },
  { id: 2, name: "2. Technical Interview" },
  { id: 3, name: "3. Cultural Interview" },
  { id: 4, name: "4. Case Study" },
];

const QUESTION_TYPES = ['Motivation', 'Skill', 'Culture', 'Candidate', 'Other'];
const ROLES = ['Software Engineer', 'Product Manager', 'UX Designer', 'Data Scientist', 'Marketing Manager'];
const TEAMS = ['Engineering', 'Product', 'Design', 'Growth', 'Operations'];
const SKILLS = ['Leadership', 'Communication', 'Problem Solving', 'Technical Depth', 'Teamwork', 'Critical Thinking', 'Adaptability'];
const ROUNDS = ['Initial Screen', 'Technical Round 1', 'System Design', 'Behavioral', 'Executive Review'];

const TEMPLATES: TemplateDetails[] = [
  { name: 'Product Marketer', brand: 'IDEO', skills: 10, rounds: 4, questions: 8, mins: 20, color: '#f87171' },
  { name: 'Junior Marketing Analyst', brand: 'Microsoft', skills: 10, rounds: 4, questions: 8, mins: 20, color: '#60a5fa' },
  { name: 'Junior Marketing Analyst', brand: 'Glassdoor', skills: 10, rounds: 4, questions: 8, mins: 20, color: '#4ade80' },
  { name: 'Senior Dev Lead', brand: 'Internal', skills: 12, rounds: 5, questions: 12, mins: 45, color: '#1c9cf0' },
  { name: 'Frontend Architect', brand: 'Google', skills: 15, rounds: 6, questions: 15, mins: 60, color: '#1c9cf0' },
];

type BuildStep = 'role' | 'template' | 'team' | 'skills' | 'rounds' | 'questions';
const STEP_ORDER: BuildStep[] = ['role', 'template', 'team', 'skills', 'rounds', 'questions'];

export default function InteractiveBuilder() {
  const [activeTab, setActiveTab] = useState(1);
  const [currentStep, setCurrentStep] = useState<BuildStep>('role');
  const [selections, setSelections] = useState({
    role: '',
    template: '',
    team: '',
    skills: [] as string[],
    rounds: [] as string[],
  });

  const [questions, setQuestions] = useState<Question[]>([
    { id: 1, tabId: 1, type: 'Motivation', text: 'Why are you interested in this role at Interview AI?' },
    { id: 2, tabId: 1, type: 'Culture', text: 'Can you tell us about a time you handled a difficult conflict within a team?' },
    { id: 3, tabId: 2, type: 'Skill', text: 'How do you handle state management in complex React applications?' }
  ]);

  const activeQuestions = questions.filter(q => q.tabId === activeTab);

  const addQuestion = (type: string) => {
    setQuestions([...questions, {
      id: Date.now(),
      tabId: activeTab,
      type,
      text: `New ${type.toLowerCase()} question. Customize this text for your script.`
    }]);
  };

  const removeQuestion = (id: number) => setQuestions(questions.filter(q => q.id !== id));
  const clearScript = () => setQuestions(questions.filter(q => q.tabId !== activeTab));

  const toggleSelection = (step: 'skills' | 'rounds', item: string) => {
    setSelections(prev => {
      const currentItems = prev[step];
      const newItems = currentItems.includes(item) 
        ? currentItems.filter(i => i !== item)
        : [...currentItems, item];
      return { ...prev, [step]: newItems };
    });
  };

  const goNext = () => {
    const currentIndex = STEP_ORDER.indexOf(currentStep);
    if (currentIndex < STEP_ORDER.length - 1) {
      setCurrentStep(STEP_ORDER[currentIndex + 1]);
    }
  };

  const goBack = () => {
    const currentIndex = STEP_ORDER.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(STEP_ORDER[currentIndex - 1]);
    }
  };

  const SelectionGrid = ({ items, step, icon: Icon }: { items: string[], step: 'role' | 'team', icon: any }) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
      {items.map(item => (
        <button 
          key={item} 
          onClick={() => setSelections(prev => ({ ...prev, [step]: item }))}
          style={{ 
            padding: '2rem 1rem', 
            background: selections[step] === item ? 'rgba(255,255,255,0.05)' : 'var(--card-bg)', 
            border: selections[step] === item ? '2px solid var(--primary)' : '1px solid var(--border)', 
            borderRadius: '16px', 
            color: 'white', 
            transition: 'all 0.2s', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: '12px'
          }}
        >
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: selections[step] === item ? 'var(--primary)' : 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>
            <Icon size={20} color={selections[step] === item ? 'white' : 'var(--text-muted)'} />
          </div>
          <span style={{ fontWeight: selections[step] === item ? 600 : 400 }}>{item}</span>
        </button>
      ))}
    </div>
  );

  const TemplateStep = () => (
    <div style={{ textAlign: 'left', marginTop: '1rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h3 style={{ fontSize: '2.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>Choose a template, or start from scratch</h3>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>Choose from a list of vetted templates related to your role, create your own, or skip planning for now.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
        {/* Custom Template Card */}
        <button 
            onClick={() => setSelections(prev => ({ ...prev, template: 'Custom' }))}
            style={{ 
                border: '1px dashed rgba(255,255,255,0.3)', 
                borderRadius: '16px', 
                background: selections.template === 'Custom' ? 'rgba(255,255,255,0.05)' : 'transparent',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                cursor: 'pointer',
                textAlign: 'center',
                minHeight: '220px',
                transition: 'all 0.2s'
            }}
        >
            <Plus size={24} color="var(--primary)" style={{ marginBottom: '1rem' }} />
            <span style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}>Create a custom interview plan</span>
        </button>

        {TEMPLATES.slice(0, 3).map(temp => (
            <button 
                key={temp.brand + temp.name}
                onClick={() => setSelections(prev => ({ ...prev, template: temp.name }))}
                style={{ 
                    background: 'var(--card-bg)', 
                    border: selections.template === temp.name ? '2px solid var(--primary)' : '1px solid var(--border)', 
                    borderRadius: '16px', 
                    padding: '1.5rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.2s', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-between', 
                    minHeight: '220px'
                }}
            >
                <div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
                        {temp.brand === 'Microsoft' ? <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#8B5CF6' }}>microsoft</span> : 
                         temp.brand === 'Glassdoor' ? <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#8B5CF6' }}>glassdoor</span> : 
                         <span style={{ fontSize: '1rem', fontWeight: 900 }}>{temp.brand}</span>}
                    </div>
                    <h4 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem' }}>{temp.name}</h4>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '0.65rem', fontWeight: 800 }}>
                    <span style={{ color: 'var(--primary)' }}>{temp.skills} SKILLS</span>
                    <span style={{ color: 'var(--primary)' }}>{temp.rounds} ROUNDS</span>
                    <span style={{ color: 'var(--primary)' }}>{temp.questions} QUESTIONS</span>
                    <span style={{ color: 'var(--primary)' }}>{temp.mins} MINS</span>
                </div>
            </button>
        ))}
      </div>

      <div style={{ marginTop: '3rem' }}>
        <h5 style={{ fontWeight: 600, marginBottom: '1.5rem', fontSize: '0.9rem' }}>From your company</h5>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {[1, 2].map(i => (
                <div key={i} style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '16px', padding: '1.5rem', textAlign: 'left', minHeight: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
                            <div style={{ width: '20px', height: '20px', background: 'var(--primary)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', fontWeight: 900 }}>IA</div>
                        </div>
                        <h4 style={{ color: 'white', fontSize: '1rem', fontWeight: 600 }}>{i === 1 ? 'Technical Lead Script v2' : 'Software Architect Screening'}</h4>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '0.65rem', fontWeight: 800 }}>
                        <span style={{ color: 'var(--primary)' }}>10 SKILLS</span>
                        <span style={{ color: 'var(--primary)' }}>4 ROUNDS</span>
                        <span style={{ color: 'var(--primary)' }}>8 QUESTIONS</span>
                        <span style={{ color: 'var(--primary)' }}>20 MINS</span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );

  const MultiSelectionList = ({ items, step }: { items: string[], step: 'skills' | 'rounds' }) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
      {items.map(item => (
        <button 
          key={item} 
          onClick={() => toggleSelection(step, item)}
          style={{ 
            padding: '0.8rem 1.5rem', 
            background: selections[step].includes(item) ? 'var(--primary)' : 'var(--card-bg)', 
            border: selections[step].includes(item) ? '1px solid var(--primary)' : '1px solid var(--border)', 
            borderRadius: '30px', 
            color: 'white', 
            transition: 'all 0.2s',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontWeight: 600
          }}
        >
          {selections[step].includes(item) && <Check size={16} />}
          {item}
        </button>
      ))}
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 'role': return <div style={{ textAlign: 'center' }}><h3 style={{ fontSize: '1.75rem' }}>What role are you hiring for?</h3><SelectionGrid items={ROLES} step="role" icon={Briefcase} /></div>;
      case 'template': return <TemplateStep />;
      case 'team': return <div style={{ textAlign: 'center' }}><h3 style={{ fontSize: '1.75rem' }}>Which Team is this for?</h3><SelectionGrid items={TEAMS} step="team" icon={Users} /></div>;
      case 'skills': return <div style={{ textAlign: 'center' }}><h3 style={{ fontSize: '1.75rem' }}>Select Core Skills to Evaluate</h3><MultiSelectionList items={SKILLS} step="skills" /></div>;
      case 'rounds': return <div style={{ textAlign: 'center' }}><h3 style={{ fontSize: '1.75rem' }}>Select Interview Rounds</h3><MultiSelectionList items={ROUNDS} step="rounds" /></div>;
      case 'questions': return (
        <>
          <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '1px solid var(--border)', padding: '0 1rem' }}>
            {TABS.map(tab => (
              <button key={tab.id} className={`${styles.tab} ${activeTab === tab.id ? styles.activeTab : ''}`} onClick={() => setActiveTab(tab.id)}>{tab.name}</button>
            ))}
          </div>
          <div className={styles.builderPanel}>
            <div className={styles.panelHeader}>
              <div className={styles.panelTitleGroup}>
                <h2 className={styles.panelTitle}>{TABS.find(t => t.id === activeTab)?.name.split('. ')[1]}</h2>
                <div className={styles.usersGroup}>
                  <Image src="https://i.pravatar.cc/150?img=11" width={32} height={32} className={styles.userAvatar} alt="U" />
                  <Image src="https://i.pravatar.cc/150?img=12" width={32} height={32} className={styles.userAvatar} alt="U" />
                </div>
              </div>
              <div className={styles.panelActions}>
                <div className={styles.actionItem}><FileText size={16} /> <span>{activeQuestions.length} questions</span></div>
                <button className={styles.actionItem} onClick={clearScript}><Settings size={16} /> <span>Clear</span></button>
                <div className={`${styles.actionItem} ${styles.timer}`}><LineChart size={16} /> <span>15 mins</span> <ChevronDown size={14} /></div>
              </div>
            </div>
            <div className={styles.addBox}>
              <div className={styles.addBoxText}>Add a question below</div>
              <div className={styles.typeButtons}>
                {QUESTION_TYPES.map(type => (
                  <button key={type} className={styles.typeBtn} onClick={() => addQuestion(type)}><Plus size={14} /> {type}</button>
                ))}
              </div>
            </div>
            <div className={styles.questionsList}>
              {activeQuestions.map((q, index) => (
                <div key={q.id} className={styles.questionCard}>
                  <div className={styles.questionInner}>
                    <div className={styles.questionHeader}>
                      <div className={styles.questionTitleGroup}><h3 className={styles.questionTitle}>Q{index + 1}</h3><span className={styles.questionBadge}>{q.type}</span></div>
                      <button className={styles.deleteBtn} onClick={() => removeQuestion(q.id)}><Trash2 size={16} /></button>
                    </div>
                    <p className={styles.questionText}>{q.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '24px', overflow: 'hidden', color: 'white', boxShadow: '0 25px 50px rgba(0,0,0,0.5)' }}>
      {/* Top Navbar */}
      <div style={{ padding: '1rem 2rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--card-bg)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '10px', height: '10px', background: 'var(--primary)', borderRadius: '50%', boxShadow: '0 0 10px var(--primary)' }}></div>
            <span style={{ fontWeight: 800, fontSize: '1.1rem', color: 'white', letterSpacing: '-0.02em' }}>Hire IQ</span>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', gap: '8px', marginLeft: '1rem' }}>
            {STEP_ORDER.map((step, idx) => (
              <span key={step} style={{ color: currentStep === step ? 'white' : 'inherit', fontWeight: currentStep === step ? 700 : 400 }}>/ {step}</span>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.85rem' }}>
          <span>Need help <ArrowUpRight size={14} style={{ display: 'inline' }} /></span>
          <Image src="https://i.pravatar.cc/150?img=32" width={30} height={30} style={{ borderRadius: '50%' }} alt="U" />
        </div>
      </div>

      {/* Main Controls Area */}
      <div style={{ padding: '2rem 4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.01)' }}>
        <button 
          onClick={goBack} 
          disabled={currentStep === 'role'}
          style={{ 
            background: 'transparent', 
            border: '1px solid rgba(255,255,255,0.1)', 
            color: currentStep === 'role' ? '#3f3f46' : 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '10px',
            fontSize: '0.85rem',
            fontWeight: 600,
            cursor: currentStep === 'role' ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <ChevronLeft size={18} /> Back
        </button>

        <button 
          onClick={goNext}
          disabled={currentStep === 'questions'}
          style={{ 
            background: 'var(--primary)', 
            color: 'white',
            padding: '0.75rem 2.5rem',
            borderRadius: '10px',
            fontSize: '0.9rem',
            fontWeight: 700,
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 0 25px rgba(139, 92, 246, 0.4)',
            opacity: currentStep === 'questions' ? 0.3 : 1
          }}
        >
          Continue <ChevronRight size={18} />
        </button>
      </div>

      {/* Dynamic Content */}
      <div style={{ padding: '1rem 4rem 4rem', minHeight: '700px' }}>
        {renderStepContent()}
      </div>
    </div>
  );
}

