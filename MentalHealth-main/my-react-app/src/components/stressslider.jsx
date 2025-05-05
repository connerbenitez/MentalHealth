import React from 'react';

const StressLevelSlider = ({ value, setValue }) => (
  <div className="container">
    <h2 className="heading">Stress Level (1–10)</h2>
    <input
      type="range"
      min="1"
      max="10"
      value={value}
      onChange={(e) => setValue(Number(e.target.value))}
      className="slider"
    />
    <p className="label">
      Stress level: <strong>{value}</strong>
    </p>
  </div>
);

export default StressLevelSlider;
