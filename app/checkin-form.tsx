"use client";
import React, { useState } from 'react';

const CheckinForm = () => {
  const [happiness, setHappiness] = useState(3); // Assume a default value of 3 for each question
  const [productivity, setProductivity] = useState(3);
  const [stress, setStress] = useState(3);

  const handleFormSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/checkin-entries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          happiness: happiness,
          productivity: productivity,
          stress: stress,
        }),
      });

      if (response.ok) {
        // Check-in entry was successfully submitted
        console.log('Check-in submitted successfully!');
      } else {
        // Handle error
        console.error('Error submitting check-in:', response.status);
      }
    } catch (error) {
      console.error('Error submitting check-in:', error);
    }
  };

  return (
    <div>
      <h1>Team Health Check-in</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Happiness:
          <input
            type="number"
            value={happiness}
            onChange={(e) => setHappiness(parseInt(e.target.value))}
            min="1"
            max="5"
            required
          />
        </label>
        <br />

        <label>
          Productivity:
          <input
            type="number"
            value={productivity}
            onChange={(e) => setProductivity(parseInt(e.target.value))}
            min="1"
            max="5"
            required
          />
        </label>
        <br />

        <label>
          Stress:
          <input
            type="number"
            value={stress}
            onChange={(e) => setStress(parseInt(e.target.value))}
            min="1"
            max="5"
            required
          />
        </label>
        <br />

        <button type="submit">Submit Check-in</button>
      </form>
    </div>
  );
};

export default CheckinForm;
