// // import React, { useState } from 'react';
// // import { useNavigate, useLocation } from 'react-router-dom';
// // import api from '../services/api';

// // export default function AuthForm({ isRegister }) {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   const handleSubmit = async e => {
// //     e.preventDefault();
// //     setError('');
// //     const endpoint = isRegister ? '/register' : '/login';
// //     try {
// //       const res = await api.post(endpoint, { email, password });
// //       if (!isRegister) {
// //         localStorage.setItem('token', res.data.token);
// //         navigate('/');
// //       } else {
// //         alert('Registration successful! Please login.');
// //         navigate('/login');
// //       }
// //     } catch (err) {
// //       setError(err.response?.data?.message || 'Error occurred');
// //     }
// //   };

// //   const mode = (() => {
// //     if (typeof isRegister === 'boolean') return isRegister ? 'Sign Up' : 'Sign In';
// //     if (location.pathname.includes('register')) return 'Sign Up';
// //     return 'Sign In';
// //   })();

// //   return (
// //     <div className="auth-split-container">
// //       {/* Left panel: Form */}
// //       <div className="auth-left-panel">
// //         <h1>Holla, <br />Welcome Back</h1>
// //         <p className="welcome-desc">Hey, welcome back to your special place</p>
// //         <form onSubmit={handleSubmit} className="auth-form">
// //           <input
// //             type="email"
// //             required
// //             placeholder="Email"
// //             value={email}
// //             onChange={e => setEmail(e.target.value.toLowerCase())}
// //           />
// //           <input
// //             type="password"
// //             required
// //             placeholder="Password"
// //             value={password}
// //             onChange={e => setPassword(e.target.value)}
// //           />
// //           <div className="remember-row">
// //             <label>
// //               <input type="checkbox" style={{ marginRight: 6 }} /> Remember me
// //             </label>
// //             <a href="#" style={{ float: 'right', fontSize: '0.97rem' }}>Forgot Password?</a>
// //           </div>
// //           {error && <p className="error-msg">{error}</p>}
// //           <button type="submit">{mode}</button>
// //         </form>
// //         <div className="signup-row">
// //           Don’t have an account? <a href="/register">Sign Up</a>
// //         </div>
// //       </div>
// //       {/* Right panel: Illustration and icon */}
// //       <div className="auth-right-panel">
// //         {/* You can use any SVG or static image that matches the illustration, like below: */}
// //         {/* For demo, use a placeholder */}
// //         <div className="illus-box">
// //           <img
// //             src="https://cdn-icons-png.flaticon.com/512/599/599305.png"
// //             alt="Illustration"
// //             className="login-illus"
// //           />
// //           <div className="illus-lock"></div>
// //         </div>
// //         <div className="illus-checkmark">✓</div>
// //       </div>
// //     </div>
// //   );
// // }


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import api from '../services/api';

// export default function AuthForm({ isRegister }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   // If you want full name/username, add useState for those and fields in the form
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async e => {
//     e.preventDefault();
//     setError('');
//     const endpoint = '/register';
//     try {
//       await api.post(endpoint, { email, password });
//       alert('Registration successful! Please login.');
//       navigate('/login');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Error occurred');
//     }
//   };

//   return (
//     <div className="auth-split-container">
//       {/* Left panel: Registration Form */}
//       <div className="auth-left-panel">
//         <h1>Create<br />Your Account</h1>
//         <p className="welcome-desc">Begin your wellness journey with us!</p>
//         <form onSubmit={handleSubmit} className="auth-form">
//           <input
//             type="email"
//             required
//             placeholder="Email"
//             value={email}
//             onChange={e => setEmail(e.target.value.toLowerCase())}
//           />
//           <input
//             type="password"
//             required
//             placeholder="Password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//           />
//           {/* If you have more fields (name, etc.), add them here! */}
//           <div className="remember-row">
//             <label>
//               <input type="checkbox" required style={{ marginRight: 6 }} /> I agree to the Terms and Privacy Policy
//             </label>
//           </div>
//           {error && <p className="error-msg">{error}</p>}
//           <button type="submit">Sign Up</button>
//         </form>
//         <div className="signup-row">
//           Already have an account? <a href="/login">Sign In</a>
//         </div>
//       </div>
//       {/* Right panel: Illustration and icon */}
//       <div className="auth-right-panel">
//         <div className="illus-box">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/599/599305.png"
//             alt="Illustration"
//             className="login-illus"
//           />
//           <div className="illus-lock"></div>
//         </div>
//         <div className="illus-checkmark">✓</div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function AuthForm({ isRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // If you want full name/username, add useState for those and fields in the form
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    const endpoint = '/register';
    try {
      await api.post(endpoint, { email, password });
      alert('Registration successful! Please login.');
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Error occurred');
    }
  };

  return (
    <div className="auth-split-container">
      {/* Left panel: Registration Form */}
      <div className="auth-left-panel">
        <h1>Create<br />Your Account</h1>
        <p className="welcome-desc">Begin your wellness journey with us!</p>
        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value.toLowerCase())}
          />
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {/* If you have more fields (name, etc.), add them here! */}
          <div className="remember-row">
            <label>
              <input type="checkbox" required style={{ marginRight: 6 }} /> I agree to the Terms and Privacy Policy
            </label>
          </div>
          {error && <p className="error-msg">{error}</p>}
          <button type="submit">Sign Up</button>
        </form>
        <div className="signup-row">
          Already have an account? <a href="/login">Sign In</a>
        </div>
      </div>
      {/* Right panel: Illustration and icon */}
      <div className="auth-right-panel">
        <div className="illus-box">
          <img
            src="https://cdn-icons-png.flaticon.com/512/599/599305.png"
            alt="Illustration"
            className="login-illus"
          />
          <div className="illus-lock"></div>
        </div>
        <div className="illus-checkmark">✓</div>
      </div>
    </div>
  );
}
