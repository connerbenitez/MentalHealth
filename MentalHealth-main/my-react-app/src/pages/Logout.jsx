import { Navigate, useNavigate } from "react-router-dom";
import Login from "./Login";


export default function Logout() {

  //on logout: delete the session id token, then render the login page

  return <Login/>
}