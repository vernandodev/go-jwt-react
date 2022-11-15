import React from 'react';
import logo from './logo.svg';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            GO-JWT-REACT
          </a>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" href="/login">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/register">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="form-signin">
        <Login />
      </main>
    </div>
  );
}

export default App;
