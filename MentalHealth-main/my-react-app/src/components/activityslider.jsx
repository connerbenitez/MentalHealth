import React from 'react';

const ActivityLevelSlider = ({ value, setValue }) => {
  const activityLabels = ['Very Low', 'Low', 'Moderate', 'High', 'Very High'];

  return (
    <div className="container">
      <h2 className="heading">Activity Level (1–5)</h2>
      <input
        type="range"
        min="1"
        max="5"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="slider"
      />
      <p className="label">
        Activity level: <strong>{activityLabels[value - 1]}</strong>
      </p>
    </div>
  );
};

export default ActivityLevelSlider;

