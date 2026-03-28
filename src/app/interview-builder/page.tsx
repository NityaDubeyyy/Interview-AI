import InteractiveBuilder from '../../components/InteractiveBuilder';

export default function InterviewBuilderPage() {
  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem' }}>
      <div style={{ maxWidth: '1200px', width: '100%' }}>
        <h1 style={{ color: 'white', textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem' }}>Interactive Interview Builder</h1>
        <InteractiveBuilder />
      </div>
    </div>
  );
}
