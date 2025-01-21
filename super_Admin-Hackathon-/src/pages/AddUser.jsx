import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddUser.css';

const GET_API_URL = 'https://run.mocky.io/v3/86777caa-f556-45eb-94cd-6355bfa37eb9'; 
const POST_API_URL = 'https://run.mocky.io/v3/86777caa-f556-45eb-94cd-6355bfa37eb9'; 

function AddUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [superAdmins, setSuperAdmins] = useState([]);

  useEffect(() => {
    const fetchSuperAdmins = async () => {
      try {
        const response = await axios.get(GET_API_URL);
        setSuperAdmins(response.data); 
      } catch (error) {
        console.error('Error fetching super admins:', error);
      }
    };

    fetchSuperAdmins();
  }, []); 

  const handleAddSuperAdmin = async () => {
    const newSuperAdmin = { name, email, password };

    try {
      const response = await axios.post(POST_API_URL, newSuperAdmin, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        setSuperAdmins((prevAdmins) => [...prevAdmins, response.data]);
        
        setName('');
        setEmail('');
        setPassword('');
      } else {
        console.error('Failed to add super admin');
      }
    } catch (error) {
      console.error('Error adding super admin:', error);
    }
  };

  return (
    <>
      <div className="Add-user-main-body">
        <div className="user-add-box">
          <h1>Share Super Admin</h1>
          <div className="inputes">
            <input 
              type="text" 
              placeholder="Enter Name...." 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required />
            <input 
              type="email" 
              placeholder="Enter Email...." 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
           required />
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required/>
          </div>
          <button className="btn" onClick={handleAddSuperAdmin}>
            Add as Super Admin
          </button>
        </div>
        <div className="user-add-box">
          <h1 style={{ marginBottom: '20px' }}>List of Super Admins</h1>
          {superAdmins.map((admin, index) => (
            <div className="user-details" key={index}>
              <ol>
                <li>
                  <strong>Name:</strong> {admin.name} <br />
                  <strong>Email:</strong> {admin.email} <br />
                  <strong>Added at:</strong> {new Date(admin.createdAt).toLocaleString()}
                </li>
              </ol>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AddUser;
