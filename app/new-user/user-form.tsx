"use client"
import React, {useState} from 'react'

const UserForm = () => {
  const [email, setEmail] = useState<string>('');
  const [teamId, setTeamId] = useState<number>(0);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          team_id: teamId,
        }),
      });

      if (response.ok) {
        // User creation was successful
        console.log('User created successfully!');
        setEmail('');
        setTeamId(0);
      } else {
        // Handle error
        console.error('Error creating user:', response.status);
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };
  return (
    <form onSubmit={handleFormSubmit}>
    <label>
      Email:
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </label>
    <label>
      Team Number:
      <input
        type="number"
        value={teamId}
        onChange={(e) => setTeamId(parseInt(e.target.value, 10))}
        required
      />
    </label>
    <button type="submit">Create User</button>
  </form>
  )
}

export default UserForm
