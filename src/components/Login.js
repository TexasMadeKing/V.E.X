import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:5000/login', {
        email: email,
        password: password,
      });

      // Assuming your API returns a token upon successful authentication
      const { token } = response.data;
      
      // Store the token in localStorage or context for later use
      localStorage.setItem('token', token);

      // Redirect to admin dashboard or another page upon successful login
      navigate("/admin-dashboard");
    } catch (error) {
      console.error("Login failed:", error.response || error);
      // Optionally, handle the error (e.g., show an error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
