import React from 'react';

const CaloricIntakeSlider = ({ value, setValue }) => (
  <div className="caloric-container p-4">
    <h2 className="text-xl font-bold mb-2">Caloric Intake</h2>
    <input
      type="range"
      min="0"
      max="5000"
      step="100"
      value={value}
      onChange={(e) => setValue(Number(e.target.value))}
      className="w-full"
    />
    <p className="mt-2 text-lg">Calories: <strong>{value}</strong> kcal</p>
  </div>
);

export default CaloricIntakeSlider;