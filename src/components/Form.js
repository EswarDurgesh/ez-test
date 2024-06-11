// src/components/Form.js

import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

const Form = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    if (!email) {
      setError('Email is required.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Invalid email format.');
      return;
    }

    try {
      const response = await axios.post('http://34.225.132.160:8002/api', { email });
      if (response.status === 200) {
        setSuccess('Form Submitted');
      }
    } catch (err) {
      if (err.response && err.response.status === 422) {
        setError('Emails ending with @ez.works are not allowed.');
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-field"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        required
      />
      <button type="submit" className="form-button">Contact Me</button>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
    </form>
  );
};

export default Form;
