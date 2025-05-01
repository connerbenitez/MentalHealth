import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function CreateAccount() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");


  const verifyAndCreate = () => {
    if (!email || !password || !password2 || !name) {
      alert("All fields are required!");
      return;
    }

    if (password !== password2) {
      alert("Passwords do not match!");
      return;
    }

    // connect this to MongoDB for the Login API later 
    // for now it uses local storage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    existingUsers.push({ name, email, password });

    
    localStorage.setItem("users", JSON.stringify(existingUsers));
    
    console.log("Account created for:", email);
    alert("Account successfully created!");
    navigate("/"); // Redirect to login page
  };

  return (
    <>
      <h1>Create Your Account!</h1>

      <form className="login" onSubmit={(e) => { e.preventDefault(); verifyAndCreate(); }}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email..."
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label htmlFor="name">First Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your first name..."
          autoComplete="given-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
        <label htmlFor="password2">Re-enter password</label>
        <input
          type="password"
          id="password2"
          placeholder="Enter password..."
          autoComplete="current-password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        ></input>
        <button type="submit">
          Create Account
        </button>
      </form>
    </>
  );

  // todo: Maybe add a "Forgot Password"
}
