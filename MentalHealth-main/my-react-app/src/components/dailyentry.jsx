import React, { useState } from "react";
import ActivityLevelSlider from "./activityslider";
import CaloricIntakeSlider from "./calorieslider";
import SleepSlider from "./sleepslider";
import StressLevelSlider from "./stressslider";
import "./dailyentry.css";
import { useLocation } from 'react-router-dom';

const DailyEntry = () => {
  // isSubmitted keeps track of first part of daily entry (Date, Mood)
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [activityLevel, setActivityLevel] = useState(3);
  const [caloricIntake, setCaloricIntake] = useState(2500);
  const [sleepHours, setSleepHours] = useState(7);
  const [stressLevel, setStressLevel] = useState(5);

  const location = useLocation();
  const isFromHome = location.state?.fromHome || false;

  const [formData, setFormData] = useState({
    date: isFromHome ? new Date().toISOString().split('T')[0] : '',
    mood: "neutral"
  });

  const [submittedData, setSubmittedData] = useState(null); 

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'date') {
      const today = new Date().toISOString().split('T')[0];
      try {
        const storedEntry = JSON.parse(localStorage.getItem('daily'));
        if (storedEntry && storedEntry.date === value) {
          alert('You have already submitted an entry for this date.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const handleInitialSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  const handleFinalSubmit = () => {
    const fullEntry = {
      ...formData,
      activityLevel,
      caloricIntake,
      sleepHours,
      stressLevel,
    };
    console.log("📝 Daily Entry:", fullEntry);
    setSubmittedData(fullEntry);
    alert("Data submitted!");
    console.log(submittedData);

    // find the user and already-saved entries
    const loggedInUserEmail = JSON.parse(localStorage.getItem("authToken")).email;
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const user = storedUsers.find((u) => u.email === loggedInUserEmail);
    
    const existingEntries = user.entries || {};

    // Use the date as the key and add a new entry
    existingEntries[formData.date] = fullEntry;
    
    // save the entries array back to the user
    user.entries = existingEntries;
    localStorage.setItem("users", JSON.stringify(storedUsers));

    // note: entries are stored in this format: 'entries': {'date1': {entry}, 'date2': {entry}}
  };

  return (
    <div className="daily-entry-container">
      {!isSubmitted ? (
        <div className="daily-entry-form">
          <h2 className="form-heading">Daily Entry</h2>
          <form onSubmit={handleInitialSubmit}>
            <label htmlFor="date" className="form-label">
              Date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="form-input"
              value={formData.date}
              onChange={handleFormChange}
              required
              max={new Date().toISOString().split("T")[0]} // Prevent future dates
            />
            <br />
            <label htmlFor="mood" className="form-label">
              Mood:
            </label>
            <select
              id="mood"
              name="mood"
              className="form-input"
              value={formData.mood}
              onChange={handleFormChange}
            >
              <option value="happy">Happy</option>
              <option value="neutral">Neutral</option>
              <option value="sad">Sad</option>
            </select>
            <br />
            <button type="submit" className="submit-btn">
              Next
            </button>
          </form>
        </div>
      ) : (
        <div className="sliders-container">
          <h2 className="sliders-heading">Your Daily Stats</h2>
          <ActivityLevelSlider
            value={activityLevel}
            setValue={setActivityLevel}
          />
          <CaloricIntakeSlider
            value={caloricIntake}
            setValue={setCaloricIntake}
          />
          <SleepSlider value={sleepHours} setValue={setSleepHours} />
          <StressLevelSlider value={stressLevel} setValue={setStressLevel} />
          <button onClick={handleFinalSubmit} className="submit-btn mt-4">
            Submit Full Entry
          </button>
          
        </div>
      )}
    </div>
  );
};

export default DailyEntry;