import React, { useState } from 'react';

const StressLevelSlider = () => {
  const [stress, setStress] = useState(5);

  return (
    <div className="Stress">
      <h2 className="StessH2">Stress Level (1–10)</h2>
      <input
        type="range"
        min="1"
        max="10"
        value={stress}
        onChange={(e) => setStress(Number(e.target.value))}
        className="slider"
      />
      <p className="StessP">Stress level: <strong>{stress}</strong></p>
    </div>
  );
};

export default StressLevelSlider;
