// src/UserList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    // Fetch data from JSONPlaceholder API
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []); // Empty dependency array to run the effect once

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {listOfUsers.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.username}) - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
