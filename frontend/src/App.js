// src/App.js
import React, { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm'; // Ensure this path is correct

function App() {
    const [submittedUsers, setSubmittedUsers] = useState([]);

    const handleUserSubmit = (user) => {
        setSubmittedUsers((prevUsers) => [...prevUsers, user]);
    };

    return (
        <div className="App">
            <h1>Welcome to SmokeTrees</h1>
            <UserForm onUserSubmit={handleUserSubmit} />
            <h2>Submitted Users</h2>
            <div className="submitted-users-container">
                {submittedUsers.map((user, index) => (
                    <div className="user-card" key={index}>
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Street:</strong> {user.street}</p>
                        <p><strong>City:</strong> {user.city}</p>
                        <p><strong>Contact:</strong> {user.contact}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
