import React from 'react';

const CaloricIntakeSlider = ({ value, setValue }) => (
  <div className="container p-4">
    <h2 className="heading">Caloric Intake</h2>
    <input
      type="range"
      min="0"
      max="5000"
      step="100"
      value={value}
      onChange={(e) => setValue(Number(e.target.value))}
      className="slider"
    />
    <p className="label">Calories: <strong>{value}</strong> kcal</p>
  </div>
);

export default CaloricIntakeSlider;