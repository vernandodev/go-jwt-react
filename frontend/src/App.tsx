import React from 'react';
import logo from './logo.svg';
import Login from './pages/Login';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <main className="form-signin">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
