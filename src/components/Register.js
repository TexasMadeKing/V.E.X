import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <form>
      <h1>Register</h1>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Register</button>
      <Link to="/login">Already have an account? Login</Link>
    </form>
  );
}

export default Register;