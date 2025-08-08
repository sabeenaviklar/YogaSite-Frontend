import React, { useEffect, useState } from 'react';
import api from '../services/api';

export default function Dashboard() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/sessions')
      .then(res => setSessions(res.data))
      .catch(() => alert('Failed to load sessions'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="dashboard">
      <h2>Published Wellness Sessions</h2>
      {loading ? (
        <p>Loading...</p>
      ) : sessions.length === 0 ? (
        <p>No published sessions found.</p>
      ) : (
        <ul>
          {sessions.map(session => (
            <li key={session._id}>
              <h3>{session.title}</h3>
              <p><strong>Tags:</strong> {session.tags.join(', ')}</p>
              {session.json_file_url && (
                <a href={session.json_file_url} target="_blank" rel="noreferrer">
                  View JSON File
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
