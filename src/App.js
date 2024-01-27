// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update import statement
import Navbar from './components/Navbar';
import Home from './components/Home';

const Seller = () => <div>Seller Content</div>;
const Buyer = () => <div>Buyer Content</div>;
const About = () => <div>About Us Content</div>;
const Login = () => <div>Login Content</div>;
const Signup = () => <div>Signup Content</div>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/buyer" element={<Buyer />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
