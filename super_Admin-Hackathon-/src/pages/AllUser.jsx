import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AllUser.css';

function AllUser() {
  const [users, setUsers] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  

 
  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://run.mocky.io/v3/4f1cc341-b589-4446-a32b-6d3e6a88b2a4'); 

      if (Array.isArray(response.data)) {
        setUsers(response.data);  
      } else {
        
        setUsers([response.data]);  
      }
      setLoading(false);  
    } catch (err) {
      setError(err.message);  
      setLoading(false); 
    }
  };

 
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="main-body-all-user">
      <div className="all-users">
        <div className="user-text">
          <h1>All Users</h1>
        </div>

        {users.length === 0 ? (
          <div>No users found.</div>  
        ) : (
          users.map((user, index) => (
            <div key={index} className="user-details">
              <ol>
                <li>Email    : {user.email}</li>
                <li>Name     : {user.name}</li>
                <li>Category : {user.category}</li>
              </ol>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AllUser;
