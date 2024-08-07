import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Login } from './components/Login';
import { Register } from './components/Register'; 
import { SignIn } from './components/SignIn'; 
import { Menu } from './components/Layouts/Menu';
import { Profile } from './components/Layouts/Profile';
import { Product } from './components/Layouts/Product';
import { Help } from './components/Layouts/Help';
import { Craft } from './components/Layouts/Craft';
import { Cart } from './components/Layouts/Cart';
import { History } from './components/Layouts/History';
import { Companies } from './components/Layouts/Companies';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/Craft" element={<Craft cart={cart} setCart={setCart} />} />
        <Route path="/Cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/History" element={<History />} />
        <Route path="/Companies" element={<Companies />} />
      </Routes>
    </Router>
  );
}

export default App;



