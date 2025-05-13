import React, { useState } from 'react';

const BrowserHistory = () => {
  const [url, setUrl] = useState('');
  const [history, setHistory] = useState([]);
  const [historyLimit, setHistoryLimit] = useState(5);

  const visitPage = () => {
    const timestamp = new Date().toLocaleString();
    setHistory(prev => {
      const filtered = prev.filter(entry => entry.url !== url);
      const newHistory = [{ url, timestamp }, ...filtered];
      return newHistory.slice(0, historyLimit);
    });
    setUrl('');
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Browser History UI Simulation</h2>

      <input
        type="text"
        value={url}
        onChange={e => setUrl(e.target.value)}
        placeholder="Enter URL"
      />
      <button onClick={visitPage}>Visit Page</button>

      <br /><br />

      <label>History Size: </label>
      <input
        type="number"
        value={historyLimit}
        onChange={e => setHistoryLimit(Number(e.target.value))}
        min="1"
      />
      <button onClick={clearHistory}>Clear History</button>

      <h3>Recent History</h3>
      <ul>
        {history.map((entry, index) => (
          <li key={index}>
            <strong>{entry.url}</strong> - <em>{entry.timestamp}</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowserHistory;