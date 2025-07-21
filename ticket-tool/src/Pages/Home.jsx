// // src/Home.js
// import { Link } from 'react-router-dom';

// export default function Home() {
//   return (
//     <div className="home">
//       <h1>Welcome to Our Application</h1>
//       <div className="auth-links">
//         <Link to="/login" className="btn btn-primary">Login</Link>
//         <Link to="/signup" className="btn btn-secondary">Sign Up</Link>
//       </div>
//     </div>
//   );
// }




import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../Styles/HomePage.css';

export default function Home() {
  return (
    <div className="homepage text-white">
      <div className="container text-center py-5">
        <div className="mb-4">
          <i className="bi bi-robot display-3 text-purple"></i>
        </div>
        <h1 className="display-4 fw-bold">
          <span className="text-gradient-purple">Resolve</span> Smarter.<br />
          <span className="text-gradient-blue">Track</span> Faster.<br />
          <span className="text-gradient-red">Serve</span> Better.
        </h1>
        <p className="lead mt-3 text-light">
          Experience the future of service management with AI-powered
          automation, real-time tracking, and <span className="text-warning">intelligent</span> insights.
        </p>
        <div className="mt-4">
          <Link to="/signup" className="btn btn-primary btn-lg me-3">Sign Up</Link>
          <Link to="/login" className="btn btn-outline-light btn-lg">Login</Link>
        </div>
        <div className="row mt-5 text-light">
          <div className="col-md-3">
            <h4>1M+</h4>
            <p>Tickets Resolved</p>
          </div>
          <div className="col-md-3">
            <h4>50K+</h4>
            <p>Active Users</p>
          </div>
          <div className="col-md-3">
            <h4>99.9%</h4>
            <p>Uptime</p>
          </div>
          <div className="col-md-3">
            <h4>4.9★</h4>
            <p>User Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
}
