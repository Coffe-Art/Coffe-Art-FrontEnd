import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Login } from './components/Login';
import { Register } from './components/Register'; 
import { SignIn } from './components/SignIn'; 
import { Menu } from './components/Layouts/Menu';
import { Profile } from './components/Layouts/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;


