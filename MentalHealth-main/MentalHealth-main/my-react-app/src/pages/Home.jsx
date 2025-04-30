import NavBar from "../components/NavBar";
import SleepSlider from "../components/sleepslider";
import ActivityLevelSlider from "../components/activityslider";
import StressLevelSlider from "../components/stressslider";
import CaloricIntakeSlider from "../components/calorieslider";

export default function Home() {
  return (
    <>
      <NavBar />
      <h1>Welcome (Insert Username)</h1>

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
