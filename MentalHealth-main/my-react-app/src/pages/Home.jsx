import NavBar from "../components/NavBar";
import SleepSlider from "../components/sleepslider";
import ActivityLevelSlider from "../components/activityslider";
import StressLevelSlider from "../components/stressslider";
import CaloricIntakeSlider from "../components/calorieslider";

export default function Home() {

  // get user name from local storage (for now), later change this to get it from database
  const loggedInUserEmail = JSON.parse(localStorage.getItem("authToken")).email;
  const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
  const user = storedUsers.find((u) => u.email === loggedInUserEmail);

  return (
    <>
      <NavBar />
      <h1>Welcome {user.name}</h1>

      <div className="dailyentry">
        <div className="dailyentry">
          <h2>Daily Entry</h2>
          <SleepSlider />
          <ActivityLevelSlider/>
          <StressLevelSlider />
          <CaloricIntakeSlider />


        </div>
      </div>
    </>
  );
}
