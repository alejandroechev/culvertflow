import { useState } from 'react';
import { SAMPLES } from '../samples';
import { FeedbackModal } from './FeedbackModal';

interface Props {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onNew: () => void;
  onOpen: () => void;
  onSave: () => void;
  onReport: () => void;
  onLoadSample: (id: string) => void;
}

export function Toolbar({ theme, onToggleTheme, onNew, onOpen, onSave, onReport, onLoadSample }: Props) {
  const [showFeedback, setShowFeedback] = useState(false);
  return (
    <div className="toolbar no-print">
      <h1>🔧 CulvertFlow</h1>
      <div className="toolbar-left">
        <button onClick={onNew}>New</button>
        <button onClick={onOpen}>Open</button>
        <select
          value=""
          onChange={e => { if (e.target.value) onLoadSample(e.target.value); }}
          title="Load a sample dataset"
        >
          <option value="" disabled>📂 Samples</option>
          {SAMPLES.map(s => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>
        <button onClick={onSave}>Save</button>
        <button onClick={onReport}>📄 Report</button>
      </div>
      <div className="toolbar-right">
        <button onClick={() => window.open('/intro.html', '_blank')} title="Domain guide">📖 Guide</button>
        <button onClick={() => setShowFeedback(true)} title="Feedback">💬 Feedback</button>
        <a className="github-link" href="https://github.com/alejandroechev/culvertflow" target="_blank" rel="noopener noreferrer">GitHub</a>
        <button onClick={onToggleTheme}>{theme === 'light' ? '🌙' : '☀️'}</button>
      </div>
      {showFeedback && <FeedbackModal product="CulvertFlow" onClose={() => setShowFeedback(false)} />}
    </div>
  );
}
