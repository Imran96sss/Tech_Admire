
import React, { useState } from 'react';
import '../../src/css/signup.css'; 
import API_URLS from '../constants/apiUrls';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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
      const response = await fetch(API_URLS.SIGNUP, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      console.log('Response:', result);
      alert('User' +  JSON.stringify(result.firstName) + 'Successfully signed up on portal' );
      alert('Try Logging into the sytem with your email id : ' +  JSON.stringify(result.email) );
      navigate('/');
 
    } catch (error) {
      console.error('Error:', error);
      alert('An Error occured. Please try again' );

    }
  };

  return (
    <div className="form-container">

      <h2>Please fill the form for Registration</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
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
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpPage;
