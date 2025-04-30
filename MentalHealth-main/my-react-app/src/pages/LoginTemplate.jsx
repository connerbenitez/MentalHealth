<<<<<<< HEAD:MentalHealth-main/MentalHealth-main/my-react-app/src/pages/LoginTemplate.jsx
<<<<<<<< HEAD:MentalHealth-main/MentalHealth-main/my-react-app/src/pages/LoginTemplate.jsx
=======
>>>>>>> 726a559d22a63a243f5af9f21620f1a9f5963be8:my-react-app/src/pages/LoginTemplate.jsx
import React from 'react';
import './Login.css';

export default function Login() {
<<<<<<< HEAD:MentalHealth-main/MentalHealth-main/my-react-app/src/pages/LoginTemplate.jsx
========
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const goToHomepage = () => {
    navigate("/home");
  };

  //todo: import the API stuff and verify login before the navigate("/home") command
>>>>>>>> 726a559d22a63a243f5af9f21620f1a9f5963be8:my-react-app/src/pages/login.jsx

  return (
    <>
      <h1>Mental Health App</h1>

      <form className="login">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email..."
          autoComplete="email"
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password..."
          autoComplete="current-password"
        ></input>
        <button type="submit" onClick={goToHomepage}>
          Login
        </button>
      </form>
    </>
  );
<<<<<<<< HEAD:MentalHealth-main/MentalHealth-main/my-react-app/src/pages/LoginTemplate.jsx
========

  // todo: handle creating accounts
  // also todo: Maybe add a "Forgot Password"
>>>>>>>> 726a559d22a63a243f5af9f21620f1a9f5963be8:my-react-app/src/pages/login.jsx
=======

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
>>>>>>> 726a559d22a63a243f5af9f21620f1a9f5963be8:my-react-app/src/pages/LoginTemplate.jsx
}
