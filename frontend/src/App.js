import React from 'react';
import './index.css';
import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login.jsx';
import Profile from './pages/profile/Profile.jsx';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Nav from './componnents/nav/Nav.jsx';
import Footer from './componnents/footer/Footer.jsx';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/profile' element={<Profile />} /> 
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>

  );
}

export default App;
