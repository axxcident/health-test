"use client"
import React, {useState} from 'react'

const TeamForm = () => {
  const [teamName, setTeamName] = useState('');

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/teams', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Team_name: teamName }),
      });

      if (response.ok) {
        // Team creation was successful
        console.log('Team created successfully!');
      } else {
        // Handle error
        console.error('Error creating team:', response.status);
      }
    } catch (error) {
      console.error('Error creating team:', error);
    }
  };
  return (
    <form onSubmit={handleFormSubmit}>
    <label>
      Team Name:
      <input
        type="text"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
        required
      />
    </label>
    <button type="submit">Create Team</button>
  </form>
  )
}

export default TeamForm
