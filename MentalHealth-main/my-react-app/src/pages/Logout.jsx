import { Navigate, useNavigate } from "react-router-dom";
import Login from "./Login";


export default function Logout() {

  //on logout: delete the auth token, then render the login page

  localStorage.removeItem('authToken'); 
  return <Login/>
}