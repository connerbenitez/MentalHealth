import React, { useState } from 'react';
import ActivityLevelSlider from './activityslider';
import CaloricIntakeSlider from './calorieslider';
import SleepSlider from './sleepslider';
import StressLevelSlider from './stressslider';

const DailyEntry = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activityLevel, setActivityLevel] = useState(3);
  const [caloricIntake, setCaloricIntake] = useState(2500);
  const [sleepHours, setSleepHours] = useState(7);
  const [stressLevel, setStressLevel] = useState(5);

  const [formData, setFormData] = useState({
    date: '',
    mood: 'happy',
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
    console.log('Daily Entry:', fullEntry);
    setSubmittedData(fullEntry); 
    localStorage.setItem('daily', JSON.stringify(fullEntry)); 
    alert('Data submitted! Check console for details.');
  };

  return (
    <div className="daily-entry-container">
      {!isSubmitted ? (
        <div className="daily-entry-form">
          <h2 className="form-heading">Daily Entry</h2>
          <form onSubmit={handleInitialSubmit}>
            <label htmlFor="date" className="form-label">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              className="form-input"
              value={formData.date}
              onChange={handleFormChange}
              required
            />
            <br />
            <label htmlFor="mood" className="form-label">Mood:</label>
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
            <button type="submit" className="submit-btn">Next</button>
          </form>
        </div>
      ) : (
        <div className="sliders-container">
          <h2 className="sliders-heading">Your Daily Stats</h2>
          <ActivityLevelSlider value={activityLevel} setValue={setActivityLevel} />
          <CaloricIntakeSlider value={caloricIntake} setValue={setCaloricIntake} />
          <SleepSlider value={sleepHours} setValue={setSleepHours} />
          <StressLevelSlider value={stressLevel} setValue={setStressLevel} />
          <button onClick={handleFinalSubmit} className="submit-btn mt-4">Submit Full Entry</button>
          <p>
            data: {submittedData ? JSON.stringify(submittedData, null, 2) : 'No data submitted yet.'}
          </p>
        </div>
      )}
    </div>
  );
};

export default DailyEntry;
