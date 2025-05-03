import NavBar from "../components/NavBar";
import CheckDaily from "../components/check.daily";


export default function Home() {
  // get user name from local storage (for now), later change this to get it from database
  const loggedInUserEmail = JSON.parse(localStorage.getItem("authToken")).email;
  const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
  const user = storedUsers.find((u) => u.email === loggedInUserEmail);
 return (
    <>
      <NavBar />
      <h1>Welcome {user.name}</h1>
      <h1>Mental Health Tracker</h1>
      <CheckDaily />

      


      
  </>
  );
}
