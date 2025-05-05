import React, { useState } from "react";
import NavBar from "../components/NavBar";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import "./View.css";

// Line charts for other categories
function Chart({ title, data, dataKey }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h3>{title}</h3>
      <ResponsiveContainer width="95%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="date" tick={{ fill: "#FC9DA0", dy: 10 }} />
          <YAxis tick={{ fill: "#FC9DA0" }} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="#8884d8"
            strokeWidth={3}
            dot
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}


function convertMoodToNumeric(mood) {
  switch (mood) {
    case "happy":
      return 3;
    case "neutral":
      return 2;
    case "sad":
      return 1;
    default:
      return 0; 
  }
}

export default function View() {
  const loggedInUserEmail = JSON.parse(localStorage.getItem("authToken")).email;
  const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
  const user = storedUsers.find((u) => u.email === loggedInUserEmail);

  // Get today's date and format it
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];

  // note: entries are stored in this format: date1': {entry}, 'date2': {entry}
  const entries = user.entries;
  const todaysEntry = entries[formattedDate];

  // Keep track of which week is being displayed
  const [weekOffset, setWeekOffset] = useState(0);

  const getPastWeekDates = () => {
    return Array.from({ length: 7 }).map((_, i) => {
      const pastDate = new Date();
      pastDate.setDate(today.getDate() - i - weekOffset * 7); // Adjust for week offset
      return pastDate.toISOString().split("T")[0]; // Format date
    });
  };

  const pastWeekDates = getPastWeekDates();

  // Convert entries object to array sorted by date
  const entryArray = Object.values(entries).sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
  <>
    <NavBar/>
    <div className="Page">
    <h1>Welcome {user.name}</h1>

    {/* Entry for today */}
    <h2>Todays Entry</h2>
    <div className="todays-entry-container">
    <h3>{formattedDate}</h3>
    {todaysEntry ? (
      <>
        <p>Mood: {todaysEntry.mood}</p>
        <p>Activity Level: {todaysEntry.activityLevel}</p>
        <p>Caloric Intake: {todaysEntry.caloricIntake}</p>
        <p>Hours of Sleep: {todaysEntry.sleepHours}</p>
        <p>Stress Level: {todaysEntry.stressLevel}</p>
      </>
    ) : (
      <p>No entry found for today.</p>
    )}
    </div>

    {/* Entires for the past weeks */}
    <h2>Past Week's Entries</h2>
      <ul className="past-week-container">
        {pastWeekDates.map((formattedPastDate) => {
          const pastEntry = entries[formattedPastDate]; // Get entry for the date

          return (
            <li key={formattedPastDate} className="past-week-item">
              <h3>{formattedPastDate}</h3>
              {pastEntry ? (
                <>
                  <p>Mood: {pastEntry.mood}</p>
                  <p>Activity Level: {pastEntry.activityLevel}</p>
                  <p>Caloric Intake: {pastEntry.caloricIntake}</p>
                  <p>Hours of Sleep: {pastEntry.sleepHours}</p>
                  <p>Stress Level: {pastEntry.stressLevel}</p>
                </>
              ) : (
                <p>No entry for this day.</p>
              )}
            </li>
          );
        })}
      </ul>

    <button onClick={() => setWeekOffset(weekOffset + 1)}>Display Previous Week</button>
      {weekOffset > 0 && (
        <button onClick={() => setWeekOffset(weekOffset - 1)}>Display Next Week</button>
      )}
      
  {/* Code to display all entries in raw format (for debugging purposes)
  <h2>All Entries (Raw Data)</h2>
  <pre>{JSON.stringify(entries, null, 2)}</pre> */}

      <h2>Daily Tracking Charts</h2>

      {/* Mood BarChart */}
     
      
      {/* Other LineCharts */}
      <Chart title="Activity Level" data={entryArray} dataKey="activityLevel" />
      <Chart title="Caloric Intake" data={entryArray} dataKey="caloricIntake" />
      <Chart title="Hours of Sleep" data={entryArray} dataKey="sleepHours" />
      <Chart title="Stress Level" data={entryArray} dataKey="stressLevel" />
      
      </div>
    </>
  );
}