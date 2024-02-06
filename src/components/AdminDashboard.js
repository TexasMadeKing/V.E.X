import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import Login from './Login';
import Register from './Register';
import AdminDashboard from './AdminDashboard';
import { AuthProvider, useAuth } from '../AuthContext'; // Corrected the path

// Updated PrivateRoute component to work with React Router v6
function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin-dashboard" element={<PrivateRouteWrapper />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

// A wrapper component for the private route to correctly render the AdminDashboard within
function PrivateRouteWrapper() {
  const { currentUser } = useAuth();
  return currentUser ? <AdminDashboard /> : <Navigate to="/login" replace />;
}

export default App;
