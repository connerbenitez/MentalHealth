import React from 'react';

const SleepSlider = ({ value, setValue }) => (
  <div className="container">
    <h2 className="heading">How many hours did you sleep?</h2>
    <input
      type="range"
      min="1"
      max="13"
      value={value}
      onChange={(e) => setValue(Number(e.target.value))}
      className="slider"
    />
    <p className="label">
      Hours slept: <strong>{value === 13 ? '12+' : value}</strong>
    </p>
  </div>
);

export default SleepSlider;
