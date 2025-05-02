import React, { useState } from 'react';

const SleepSlider = () => {
  const [hours, setHours] = useState(8);

  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setHours(value);
  };

  return (
    <div className="sleep-Container">
      <h2 className="sleep-Heading">How many hours did you sleep?</h2>
      <input
        type="range"
        min="1"
        max="13"
        value={hours}
        onChange={handleChange}
        className="sleep-slider"
      />
      <p className="sleep-label">Hours slept: <strong>{hours === 13 ? '12+' : hours}</strong></p>
    </div>
  );
};

export default SleepSlider;
