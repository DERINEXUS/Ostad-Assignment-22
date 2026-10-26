import { useParams, Link } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>User Details Page</h2>
      <p>Displaying details for User ID: <strong>{id}</strong></p>
      <Link to="/users" className="btn">Back to Users</Link>
    </div>
  );
};

export default UserDetails;