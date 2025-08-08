// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import AuthForm from './components/AuthForm';
// import Dashboard from './components/Dashboard';
// import MySessions from './components/MySessions';
// import SessionEditor from './components/SessionEditor';
// import Navbar from './components/Navbar';

// const PrivateRoute = ({ children }) => {
//   const token = localStorage.getItem('token');
//   return token ? children : <Navigate to="/login" />;
// };

// export default function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/login" element={<AuthForm />} />
//         <Route path="/register" element={<AuthForm isRegister />} />
//         <Route
//           path="/"
//           element={
//             <PrivateRoute>
//               <Dashboard />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/my-sessions"
//           element={
//             <PrivateRoute>
//               <MySessions />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/my-sessions/:id"
//           element={
//             <PrivateRoute>
//               <SessionEditor />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/new-session"
//           element={
//             <PrivateRoute>
//               <SessionEditor />
//             </PrivateRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';      // Separate login component
import RegisterForm from './components/RegisterForm'; // Separate register component
import Dashboard from './components/Dashboard';
import MySessions from './components/MySessions';
import SessionEditor from './components/SessionEditor';
import Navbar from './components/Navbar';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />

        {/* Protected routes */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/my-sessions"
          element={
            <PrivateRoute>
              <MySessions />
            </PrivateRoute>
          }
        />
        <Route
          path="/my-sessions/:id"
          element={
            <PrivateRoute>
              <SessionEditor />
            </PrivateRoute>
          }
        />
        <Route
          path="/new-session"
          element={
            <PrivateRoute>
              <SessionEditor />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}
