// src/components/UserForm.js
import React, { useState } from 'react';

const UserForm = ({ onUserSubmit }) => {
    const [name, setName] = useState('');
    const [street, setStreet]=useState('')
    const [city, setCity] = useState('');
    const [contact, setContact] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = { name, street, city,contact };
        onUserSubmit(userData); // Call the parent function to update the submitted users
        setName(''); // Clear the input fields after submission
        setStreet('');
        setCity('');
        setContact('')
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register User</h2>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>

            <div>
                <label>Street:</label>
                <input
                    type="text"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    required
                />
            </div>

            <div>
                <label>City:</label>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                />
            </div>

            <div>
                <label>Contact:</label>
                <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                />
            </div>


            <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm;
