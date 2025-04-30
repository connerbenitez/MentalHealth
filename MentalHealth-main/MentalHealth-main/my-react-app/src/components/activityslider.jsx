import React, { useState } from 'react';


const ActivityLevelSlider = () => {
  const [activity, setActivity] = useState(3);
  const activityLabels = ['Very Low', 'Low', 'Moderate', 'High', 'Very High'];

  return (
    <div className="activity-container">
      <h2 className="activity-heading">Activity Level (1–5)</h2>
      <input
        type="range"
        min="1"
        max="5"
        value={activity}
        onChange={(e) => setActivity(Number(e.target.value))}
        className="activity-slider"
      />
      <p className="activity-label">
        Activity level: <strong>{activityLabels[activity - 1]}</strong>
      </p>
    </div>
  );
};

export default ActivityLevelSlider;
