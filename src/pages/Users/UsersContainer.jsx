import React, { useCallback, useEffect, useState } from "react";
import { Users } from "./Users";
// import Plot from 'react-plotly.js';

export const UsersContainer = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleNameFilterChange = useCallback(
    (value) => {
      setFilteredUsers(() =>
        users.filter((user) =>
          user.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    },
    [setFilteredUsers, users]
  );

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
        setFilteredUsers(users);
      });
  }, [setUsers, setFilteredUsers]);

  return (
    <Users users={filteredUsers} onNameFilterChange={handleNameFilterChange} />
  );
};
