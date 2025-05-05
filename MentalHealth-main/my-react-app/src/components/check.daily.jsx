import React from 'react';
import { useNavigate } from 'react-router-dom';

const CheckDaily = () => {
  const navigate = useNavigate();
  const storedEntry = JSON.parse(localStorage.getItem('daily'));
  const today = new Date().toISOString().split('T')[0];

  if (!storedEntry || storedEntry.date !== today) {
    return (
      <div>
        <h3>Enter Your Daily Entry Here:</h3>
        <button
          type="button"
          className="submit-btn"
          onClick={() => navigate('/add', { state: { fromHome: true } })}
        >
          Go to Daily Entry
        </button>
      </div>
    );
  }
  

  return (
    <div>
      <h3>You have already submitted your daily entry for today!</h3>
    </div>
  );
};

export default CheckDaily;