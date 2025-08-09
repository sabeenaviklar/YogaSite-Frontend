Wellness Sessions Platform
A modern full-stack MERN (MongoDB, Express, React, Node.js) web application for managing personal and published wellness sessions (yoga, meditation, etc.) with beautiful UI, user authentication, session management, and a stylish dashboard.

🚀 Features
* Authentication: Login, Register with JWT-based auth
* Session Management: Create, draft, publish, edit, delete sessions
* Dashboard: Browse all published sessions, filter by tag, view JSON
* My Sessions: List user’s sessions (drafts and published), quick edit/delete
* Session Editor: Auto-save draft, manual Save & Publish, JSON URL support
* Modern UI: Split-panel Auth, themed Navbar, card lists, illustrations
* Responsive Design: Works on desktop & mobile
* Backend API: Node.js + Express
* Frontend: React (Create React App)
* Database: MongoDB Atlas (cloud)

📁 Folder Structure
text
root/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── index.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── HomePage.js
│   │   │   ├── Dashboard.js
│   │   │   ├── LoginForm.js
│   │   │   ├── RegisterForm.js
│   │   │   ├── Navbar.js
│   │   │   ├── SessionEditor.js
│   │   │   └── MySessions.js
│   │   ├── App.js
│   │   ├── styles.css
│   │   └── index.js
│   ├── .env
│   └── package.json
│
└── README.md

🔧 Setup & Installation
1. Clone the repository
bash
git clone https://github.com/yourusername/wellness-sessions-platform.git
cd wellness-sessions-platform
2. Install backend dependencies
bash
cd backend
npm install
3. Configure backend environment
Create backend/.env:
text
PORT=5000
MONGO_URI=your-mongo-atlas-uri
JWT_SECRET=your-jwt-secret
4. Run backend locally
bash
npm start
Runs backend on http://localhost:2000
5. Install frontend dependencies
bash
cd ../frontend
npm install
6. Configure frontend environment
Create frontend/.env:
text
REACT_APP_API_URL=http://localhost:2000
7. Run frontend locally
bash
npm start
Runs frontend on http://localhost:3000

🌐 Deployment (Render.com example)
* Backend: Deploy as “Web Service” with build/start commands and env vars
* Frontend: Deploy as “Static Site” with build command (npm run build) and publish directory (build)
* Frontend API URL: Must point to your backend Render domain
See “How to deploy on Render.com” steps in previous answers for details!

🧑💻 Main Components (Frontend)
* HomePage.js — Landing page (welcome, CTA, yoga illustration)
* LoginForm.js / RegisterForm.js — Auth UI with themed layout
* Navbar.js — Responsive top bar with routes, logout, theme colors
* Dashboard.js — Published sessions browser, tags, JSON links, illustrations
* MySessions.js — User’s drafts and published sessions, edit/delete buttons
* SessionEditor.js — Create/edit/draft/publish session, auto-save, actions

🔒 API Endpoints (Backend)
* POST /register — Create user
* POST /login — Authenticate user
* GET /sessions — Get all published sessions
* GET /my-sessions — Get user’s sessions (drafts + published)
* GET /my-sessions/:id — Get session by ID (for editing)
* POST /my-sessions/save-draft — Create or update session draft
* POST /my-sessions/publish — Publish session
* DELETE /my-sessions/:id — Delete session

🎨 Styling
* Split-panel layouts for login/register and auth pages
* Purple & yellow primary colors (#784dff, #fbb040)
* Card-based session lists with tags and action buttons
* Yoga/meditation illustrations from royalty-free sources
* Custom responsive design (see styles.css)
* Smooth transitions and modern fonts

⚡ Quick Start (for Development)
bash
cd backend && npm start
cd frontend && npm start
* Visit http://localhost:3000 in your browser


