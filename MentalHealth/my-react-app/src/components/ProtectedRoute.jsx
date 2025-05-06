import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const authToken = JSON.parse(localStorage.getItem("authToken"));

  // Check if the user is logged in
  // authToken.loggedIn is a boolean True/False value
  // if there is no auth token, or the loggedIn is false, go to login page ("/")
  if (!authToken || !authToken.loggedIn) { 
    return <Navigate to="/" />;
  }

  return children;
}