import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();
  
    const handleNavigate = (path) => {
      navigate(path);
    };
  
    return (
      <div>
        <h1>Welcome to the Home Page</h1>
        <button onClick={() => handleNavigate('/login')}>Login</button>
        <button onClick={() => handleNavigate('/register')}>Register</button>
      </div>
    );
  }
  
  export default HomePage;
  