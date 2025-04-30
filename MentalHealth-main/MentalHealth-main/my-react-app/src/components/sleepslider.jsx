import React, { useState } from 'react';

const SleepSlider = () => {
  const [hours, setHours] = useState(8);

  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setHours(value);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">How many hours did you sleep?</h2>
      <input
        type="range"
        min="1"
        max="13"
        value={hours}
        onChange={handleChange}
        className="w-full"
      />
      <p className="mt-2 text-lg">Hours slept: <strong>{hours === 13 ? '12+' : hours}</strong></p>
    </div>
  );
};

export default SleepSlider;
