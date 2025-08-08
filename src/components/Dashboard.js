// import React, { useEffect, useState } from 'react';
// import api from '../services/api';

// export default function Dashboard() {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     api.get('/sessions')
//       .then(res => setSessions(res.data))
//       .catch(() => alert('Failed to load sessions'))
//       .finally(() => setLoading(false));
//   }, []);

//   return (
//     <div className="dashboard">
//       <h2>Published Wellness Sessions</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : sessions.length === 0 ? (
//         <p>No published sessions found.</p>
//       ) : (
//         <ul>
//           {sessions.map(session => (
//             <li key={session._id}>
//               <h3>{session.title}</h3>
//               <p><strong>Tags:</strong> {session.tags.join(', ')}</p>
//               {session.json_file_url && (
//                 <a href={session.json_file_url} target="_blank" rel="noreferrer">
//                   View JSON File
//                 </a>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import api from '../services/api';
import "../styles.css"; // Make sure this is imported!

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
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div>
          <h2>Published Wellness Sessions</h2>
          <p className="dashboard-subtitle">
            Explore guided yoga, meditation, and relaxation flows from the community.
          </p>
        </div>
        <div className="dashboard-illustration">
          {/* Yoga Illustration: royalty-free image */}
          <img
            src="https://img.freepik.com/free-vector/organic-flat-people-meditating-illustration_23-2148906556.jpg"
            alt="Yoga Pose"
            className="dashboard-yoga-img"
          />
        </div>
      </div>
      {loading ? (
        <div className="dashboard-loading"><div className="spinner"></div> Loading...</div>
      ) : sessions.length === 0 ? (
        <div className="dashboard-empty">
          <p>No published sessions found. Start your wellness journey today!</p>
        </div>
      ) : (
        <ul className="dashboard-session-list">
          {sessions.map(session => (
            <li key={session._id} className="dashboard-session-card">
              <div>
                <span className="dashboard-session-title">{session.title}</span>
                <div className="dashboard-session-tags">
                  {session.tags && session.tags.length > 0 &&
                    session.tags.map(tag => (
                      <span key={tag} className="dashboard-tag">{tag}</span>
                    ))
                  }
                </div>
                {session.json_file_url &&
                  <a
                    className="dashboard-json-link"
                    href={session.json_file_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View JSON File
                  </a>
                }
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
