
import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <form className="form-container">
      <input type="email" placeholder="Email Address" className="form-field" />
      <button type="submit" className="form-button">Contact Me</button>
    </form>
  );
};

export default Form;
