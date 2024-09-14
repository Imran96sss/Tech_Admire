
import React, { useState } from 'react';
import '../../src/css/signup.css'; 
import API_URLS from '../constants/apiUrls'; 
import welcomeImage from '../../src/assets/tech.png';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make a backend call with form data
    try {
      const response = await fetch(API_URLS.LOGIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.text(); // Use `.text()` instead of `.json()`
      console.log('Response:', result);
      if(result == "true"){
        alert("Create Applications and Enroll in Courses");
        navigate('/profile');

      }else{
        alert("Logged in Failed. Invalid Username/Password");
      }
      
  
    } catch (error) {
      console.error('Error:', error);
      alert("Email/Password is incorrect");
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="form-container">

    <img  src={welcomeImage} alt="Welcome" className="welcome-image"  style={{ display: 'block', margin: '0 auto' }}  />

      <h2>Login With Your Registered Email</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
