import { Navigate } from "react-router-dom";

export default function Logout() {
  //on logout: delete the auth token, then render the login page

  localStorage.removeItem("authToken");
  return <Navigate to="/" replace />;
}
