


import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';
import "../styles.css";

export default function SessionEditor() {
  const { id } = useParams(); // Get session id from URL if editing
  const navigate = useNavigate();

  // Form state
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [jsonUrl, setJsonUrl] = useState('');
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState('');
  const [sessionDbId, setSessionDbId] = useState(id || null);
  const debounceRef = useRef();

  // Load existing session data when editing
  useEffect(() => {
    if (sessionDbId) {
      api.get(`/my-sessions/${sessionDbId}`)
        .then(res => {
          setTitle(res.data.title);
          setTags(res.data.tags.join(', '));
          setJsonUrl(res.data.json_file_url);
        })
        .catch(() => alert('Failed to load session'));
    }
  }, [sessionDbId]);

  // Auto-save draft after 5 seconds of inactivity
  useEffect(() => {
    if (!title.trim()) return; // don't save if no title
    if (debounceRef.current) clearTimeout(debounceRef.current);
    setSaveMsg('Auto-saving...');
    debounceRef.current = setTimeout(() => {
      handleSaveDraft(true);
    }, 5000);

    return () => clearTimeout(debounceRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, tags, jsonUrl]);

  // Save as draft function, isAuto distinguishes auto save vs manual save
  const handleSaveDraft = async (isAuto = false) => {
    setSaving(true);
    try {
      const res = await api.post('/my-sessions/save-draft', {
        id: sessionDbId,
        title: title.trim(),
        tags: tags.split(',').map(tag => tag.trim()).filter(Boolean),
        json_file_url: jsonUrl.trim(),
      });
      setSessionDbId(res.data._id);
      setSaving(false);

      if (isAuto) {
        setSaveMsg('All changes auto-saved.');
      } else {
        setSaveMsg('Draft saved! Redirecting...');
        setTimeout(() => {
          navigate('/my-sessions');
        }, 800);
      }
    } catch {
      setSaving(false);
      setSaveMsg('Failed to save draft.');
    }
  };

  // Publish session and redirect to my sessions
  const handlePublish = async () => {
    if (!sessionDbId) {
      setSaveMsg('Please save your draft first!');
      return;
    }
    setSaving(true);
    try {
      await api.post('/my-sessions/publish', { id: sessionDbId });
      setSaving(false);
      setSaveMsg('Session published! Redirecting...');
      setTimeout(() => {
        navigate('/my-sessions');
      }, 800);
    } catch {
      setSaving(false);
      setSaveMsg('Failed to publish session');
    }
  };

  // Delete session and redirect to my sessions
  const handleDelete = async () => {
    if (!sessionDbId) return alert('No session selected to delete.');
    if (!window.confirm('Are you sure you want to delete this session?')) return;
    try {
      await api.delete(`/my-sessions/${sessionDbId}`);
      alert('Session deleted successfully.');
      navigate('/my-sessions');
    } catch {
      alert('Failed to delete session.');
    }
  };

  return (
    <div className="session-editor-box">
      <h2 className="editor-title">{sessionDbId ? 'Edit Session' : 'New Session'}</h2>
      <form className="session-editor-form" onSubmit={e => e.preventDefault()}>
        <label>
          Title:
          <input
            type="text"
            required
            placeholder="Enter session title..."
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="editor-input"
          />
        </label>

        <label>
          Tags (comma separated):
          <input
            type="text"
            placeholder="e.g. yoga, morning, relax"
            value={tags}
            onChange={e => setTags(e.target.value)}
            className="editor-input"
          />
        </label>

        <label>
          JSON File URL:
          <input
            type="text"
            required
            placeholder="http://example.com/data.json"
            value={jsonUrl}
            onChange={e => setJsonUrl(e.target.value)}
            className="editor-input"
          />
        </label>

        <div className="editor-actions">
          <button
            type="button"
            className="editor-btn draft-btn"
            onClick={() => handleSaveDraft(false)}
            disabled={!title.trim() || saving}
          >
            Save as Draft
          </button>
          <button
            type="button"
            className="editor-btn publish-btn"
            onClick={handlePublish}
            disabled={!title.trim() || saving}
          >
            Publish
          </button>
          <button
            type="button"
            className="editor-btn delete-btn"
            onClick={handleDelete}
            disabled={saving}
          >
            Delete
          </button>
        </div>

        <div className="autosave-msg">
          {saving ? 'Saving...' : saveMsg}
        </div>
      </form>
    </div>
  );
}
