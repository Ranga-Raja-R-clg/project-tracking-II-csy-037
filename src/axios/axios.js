import React, { useState, useEffect } from "react";
import { fetchUsers } from "./api";
const UsersComponent = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        const response = await fetchUsers();
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch users");
        setLoading(false);
      }
    };
    loadUsers();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};
export default UsersComponent;
