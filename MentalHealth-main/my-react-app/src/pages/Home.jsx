import NavBar from "../components/NavBar";
import SleepSlider from "../components/sleepslider";
import ActivityLevelSlider from "../components/activityslider";
import StressLevelSlider from "../components/stressslider";
import CaloricIntakeSlider from "../components/calorieslider";
import DailyEntry from "../components/dailyentry";
export default function Home() {

  // get user name from local storage: Find the email of the logged-in user, find the 'users' entry for that email, then get the name
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
          <DailyEntry />
          {/* <SleepSlider />
          <ActivityLevelSlider/>
          <StressLevelSlider />
          <CaloricIntakeSlider /> */}


        </div>
      </div>
    </>
  );
}
