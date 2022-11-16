import React, { useState, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    navigate('/login');

    // cek
    // const content = await response.json();
    // console.log(content);
  };

  return (
    <form onSubmit={submit}>
      <h1 className="h3 mb-3 fw-normal">REGISTER</h1>
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label>Name</label>
      </div>
      <div className="form-floating">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Email address</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          placeholder="*****"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Password</label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Login
      </button>
    </form>
  );
};

export default Register;
