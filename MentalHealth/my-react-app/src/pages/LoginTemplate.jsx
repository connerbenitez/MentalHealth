import React from 'react';
import './Login.css';

export default function Login() {

  return (
    <div className="gradient-form">
      <div className="card-container">
        <div className="login-left">
          <div className="logo-container">
            <img src="./images/logo.jpg" alt="logo" className="logo" />
            
          </div>
          <p>Login To Get Started</p>
          <input type="email" placeholder="Email address" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button className="btn btn-primary">Sign in</button>
          <a href="#!" className="forgot-password">Forgot password?</a>
          <div className="signup-container">
            <p>Don't have an account?</p>
            <button className="btn btn-danger">Sign up</button>
          </div>
        </div>

        <div className="login-right">
          <h4>Keep Track of Your Mental Health Progress</h4>
          <p>Monitor your mental health journey, set goals, and celebrate every victory along the way.</p>
        </div>
      </div>
    </div>
  );
}
