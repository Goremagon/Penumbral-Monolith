import React from 'react';

const messages = [
  { speaker: 'SYS', content: 'Keryx uplink established.' },
  { speaker: 'OPR', content: 'Run secure channel handoff.' },
  { speaker: 'SYS', content: 'Awaiting directives…' }
];

const styles = {
  app: {
    minHeight: '100vh',
    background: '#0a0a0d',
    color: '#dfd4b7',
    fontFamily: '"IBM Plex Mono", monospace',
    display: 'grid',
    placeItems: 'center',
    padding: '1rem'
  },
  panel: {
    width: 'min(960px, 100%)',
    border: '1px solid rgba(201,162,65,0.35)',
    background: '#111118',
    padding: '1.25rem'
  },
  title: {
    margin: '0 0 1rem',
    color: '#f3d487'
  },
  log: {
    border: '1px solid rgba(201,162,65,0.25)',
    background: '#09090c',
    padding: '1rem',
    minHeight: '260px',
    marginBottom: '1rem'
  },
  row: {
    marginBottom: '0.8rem'
  },
  input: {
    width: '100%',
    padding: '0.85rem',
    background: '#0f0f14',
    color: '#e8ddb9',
    border: '1px solid rgba(201,162,65,0.4)'
  }
};

export default function App() {
  return (
    <main style={styles.app}>
      <section style={styles.panel}>
        <h1 style={styles.title}>KERYX // TERMINAL RELAY</h1>
        <div style={styles.log}>
          {messages.map((msg, idx) => (
            <div key={idx} style={styles.row}>
              <strong>[{msg.speaker}]</strong> {msg.content}
            </div>
          ))}
        </div>
        <input style={styles.input} placeholder="> Type command/message..." readOnly />
      </section>
    </main>
  );
}
