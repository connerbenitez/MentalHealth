import React, { useState } from 'react';

const CaloricIntakeSlider = () => {
  const [calories, setCalories] = useState(2000);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Caloric Intake</h2>
      <input
        type="range"
        min="1000"
        max="4000"
        step="100"
        value={calories}
        onChange={(e) => setCalories(Number(e.target.value))}
        className="w-full"
      />
      <p className="mt-2 text-lg">Calories: <strong>{calories}</strong> kcal</p>
    </div>
  );
};

export default CaloricIntakeSlider;
