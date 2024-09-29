import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users with addresses from the backend
    axios.get('https://your-backend-url.herokuapp.com/api/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div>
      <h2>Users and Addresses</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Street</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              user.Addresses.map((address) => (
                <tr key={address.id}>
                  <td>{user.name}</td>
                  <td>{address.street}</td>
                  <td>{address.city}</td>
                </tr>
              ))
            ))
          ) : (
            <tr>
              <td colSpan="3">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
