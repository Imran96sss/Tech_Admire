// src/pages/Page3.js
import React, { useState } from 'react';
import '../../src/css/signup.css'; 
import API_URLS from '../constants/apiUrls'; // Import API URLs

function Application() {

  const [formData, setFormData] = useState({
    studentName: '',
    universityName: '',
    courseName: '',
    email: 'xyz@gmail.com' // Hard-coded email
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make a backend call with form data
    try {
      const response = await fetch(API_URLS.CREATE_APPLICATION, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.text();
      console.log('Response:', result);
      alert("Application Created Successfully");
    } catch (error) {
      console.error('Error:', error);
  
    }
  };

  return (
    <div className="form-container">
      <h2>Submit Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="studentName">Student Name</label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="universityName">University Name</label>
          <input
            type="text"
            id="universityName"
            name="universityName"
            value={formData.universityName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="courseName">Course Name</label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Application;
