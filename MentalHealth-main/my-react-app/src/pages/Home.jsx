import NavBar from "../components/NavBar";
import CheckDaily from "../components/check.daily";
import "./Home.css";

export default function Home() {
  // get user name from local storage
  const loggedInUserEmail = JSON.parse(localStorage.getItem("authToken")).email;
  const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
  const user = storedUsers.find((u) => u.email === loggedInUserEmail);
  return (
    <>
      <NavBar />
      <div className="Page">
        <div className="home-header">
        <h1>Welcome {user.name}</h1>
        <h2>Mental Health Tracker</h2>
       
          <p>
            Your personal dashboard for mental and physical well-being
          </p>
        </div>

        <div className = "home-intro">
          
          <p>
            Stay consistent with tracking your <strong>calories</strong>, <strong>mood</strong>, <strong>activity</strong>, <strong>stress</strong>, and <strong>sleep</strong>.
          </p>
          <p >
            View your progress over time with easy-to-read charts and detailed history logs to help you reflect, improve, and stay on track.
          </p>
        </div>

        <CheckDaily />
      </div>
    </>
  );
}