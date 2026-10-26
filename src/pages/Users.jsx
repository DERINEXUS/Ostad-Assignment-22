import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <h2>Loading users...</h2>;

  return (
    <div>
      <h2>Task 6 & 7: Users List</h2>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <Link to={`/users/${user.id}`} className="btn">View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;