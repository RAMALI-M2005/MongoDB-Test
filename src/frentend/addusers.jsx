import React, { useState } from 'react';

const Addusers = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');

  // Handle user creation (POST request to add a new user)
  const createUser = async (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    // Check if both fields are filled
    if (!username || !email) {
      alert('Please fill in both fields!');
      return;
    }

    const newUser = {
      username,
      email,
    };

    try {
      const response = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser), // Send the new user as a JSON string
      });

      if (!response.ok) {
        console.log('Error adding user');
        return;
      }

      // Clear the form inputs
      setUserName('');
      setEmail('');
      alert('User added successfully!');
      location.reload()
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  return (
    <div className="addusers">
      <h2>Add a New User</h2>
      <form onSubmit={createUser}>
        <div className="box">
          <label>Username:</label>
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            value={username}
            required
          />
        </div>
        <div className="box">
          <label>Email:</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default Addusers;
