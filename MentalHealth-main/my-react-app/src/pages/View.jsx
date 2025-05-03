import React, { useState } from "react";
import NavBar from "../components/NavBar";

export default function View() {
  // get user name from local storage
  const loggedInUserEmail = JSON.parse(localStorage.getItem("authToken")).email;
  const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
  const user = storedUsers.find((u) => u.email === loggedInUserEmail);

  // Get today's date and format it
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0];
  
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


  return (
  <>
    <NavBar/>
    <h1>Welcome {user.name}</h1>

    {/* Entry for today */}
    <h1>Todays Entry</h1>
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

    {/* Entires for the past weeks */}
    <h2>Past Week's Entries</h2>
      <ul>
        {pastWeekDates.map((formattedPastDate) => {
          const pastEntry = entries[formattedPastDate]; // Get entry for the date

          return (
            <li key={formattedPastDate}>
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

  <h2>All Entries (Raw Data)</h2>
  <pre>{JSON.stringify(entries, null, 2)}</pre>

  </>
  );
}
