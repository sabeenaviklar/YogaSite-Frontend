

import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import "../styles.css"; // Make sure this is imported!

export default function MySessions() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchSessions = () => {
    api.get('/my-sessions')
      .then(res => setSessions(res.data))
      .catch(() => alert('Failed to load your sessions'))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  // Delete session handler
  const handleDelete = id => {
    if (!window.confirm('Are you sure you want to delete this session?')) return;
    api.delete(`/my-sessions/${id}`)
      .then(() => {
        fetchSessions();
      })
      .catch(() => alert('Failed to delete session.'));
  };

  return (
    <div className="mysessions-container">
      <div className="mysessions-header">
        <h2>My Wellness Sessions</h2>
        <button
          className="mysessions-new-btn"
          onClick={() => navigate('/new-session')}
        >
          + New Session
        </button>
      </div>
      {loading ? (
        <div className="mysessions-loading"><div className="spinner"></div> Loading...</div>
      ) : sessions.length === 0 ? (
        <div className="mysessions-empty">
          <p>You have no sessions yet.</p>
          <button className="mysessions-new-btn" onClick={() => navigate('/new-session')}>+ Create One</button>
        </div>
      ) : (
        <ul className="mysession-list">
          {sessions.map(session => (
            <li key={session._id} className="mysession-card">
              <div>
                <span className="mysession-title">{session.title}</span>
                <span className={`mysession-status ${session.status}`}>
                  {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
                </span>
                <div className="mysession-tags">
                  {session.tags && session.tags.length > 0 && (
                    session.tags.map(tag => <span key={tag} className="mysession-tag">{tag}</span>)
                  )}
                </div>
                {session.json_file_url &&
                  <a className="mysession-json-link" href={session.json_file_url} target="_blank" rel="noopener noreferrer">
                    View JSON
                  </a>
                }
              </div>
              <div className="mysession-actions">
                <button
                  className="mysession-btn edit-btn"
                  onClick={() => navigate(`/my-sessions/${session._id}`)}
                >
                  Edit
                </button>
                <button
                  className="mysession-btn delete-btn"
                  onClick={() => handleDelete(session._id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
