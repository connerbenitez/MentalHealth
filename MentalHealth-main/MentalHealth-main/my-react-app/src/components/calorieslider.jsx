import React, { useState } from 'react';

const CaloricIntakeSlider = () => {
  const [calories, setCalories] = useState(2000);

  return (
    <div className="calory-Container">
      <h2 className="calory-Heading">Caloric Intake</h2>
      <input
        type="range"
        min="1000"
        max="4000"
        step="100"
        value={calories}
        onChange={(e) => setCalories(Number(e.target.value))}
        className="calory-slider"
      />
      <p className="calory-label">Calories: <strong>{calories}</strong> kcal</p>
    </div>
  );
};

export default CaloricIntakeSlider;
