import NavBar from "../components/NavBar";
import DailyEntry from "../components/dailyentry";

export default function Add() {
  return (
    <>
      <div className="Page">
        <NavBar />
        <h1>Add an entry</h1>
        <div className="dailyentry">
          <div className="dailyentry">
            <DailyEntry />
          </div>
        </div>
      </div>
    </>
  );
}
