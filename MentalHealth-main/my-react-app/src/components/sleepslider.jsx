import React from 'react';

const SleepSlider = ({ value, setValue }) => (
  <div className="sleep-container">
    <h2 className="sleep-heading">How many hours did you sleep?</h2>
    <input
      type="range"
      min="0"
      max="14"
      value={value}
      onChange={(e) => setValue(Number(e.target.value))}
      className="w-full"
    />
    <p className="sleep-label">
      Hours slept: <strong>{value === 14 ? '13+' : value}</strong>
    </p>
  </div>
);

export default SleepSlider;
