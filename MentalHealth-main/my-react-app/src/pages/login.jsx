import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createAccount = () => {
    navigate("/create");
  };

  // hashes password, checks for match in database
  // (just uses local storage unencrypted for now)
  const verifyLogin = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // search for matching email
    const user = storedUsers.find((u) => u.email === email);

    // if there is no user with the email, or the password is wrong, send an alert
    if (!user || user.password !== password) {
      alert("Your email or password is incorrect");
      return;
    }

    // otherwise login

    // Set up a token to verify user is logged in
    localStorage.setItem(
      "authToken",
      JSON.stringify({ email: user.email, loggedIn: true })
    );

    navigate("/home");
  };

  return (
    <>
      <h1>Mental Health App</h1>

      <form
        className="login"
        onSubmit={(e) => {
          e.preventDefault();
          verifyLogin();
        }}
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email..."
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password..."
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Login</button>
      </form>

      <a onClick={createAccount}>Create Account</a>
    </>
  );

  // todo: Maybe add a "Forgot Password"
}
