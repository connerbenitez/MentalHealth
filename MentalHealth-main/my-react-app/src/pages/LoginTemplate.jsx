import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const goToHomepage = () => {
    navigate("/home");
  };

  //todo: import the API stuff and verify login before the navigate("/home") command

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

  // todo: handle creating accounts
  // also todo: Maybe add a "Forgot Password"
}
