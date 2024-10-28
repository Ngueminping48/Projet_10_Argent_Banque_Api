import React from 'react';
import './index.css';
import Home from './pages/home/';
import Login from './pages/login/';
import Profile from './pages/profile/';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Nav from './components/nav/Nav.jsx';
import Footer from './components/footer/Footer.jsx';

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
