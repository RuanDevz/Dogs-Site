import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function Submit(event) {
    event.preventDefault();

    fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password }),
    })
      .then(resp => {
        console.log(resp);
        return resp.json();
      })
      .then((json) => {
        console.log(json);
      });
  }

  return (
    <div className='loginform'>
      <h1>Login</h1>
      <input
        type='text'
        value={username}
        placeholder='Insira seu nome'
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <input
        type='password'
        value={password}
        placeholder='Insira sua senha'
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={Submit}>Entrar</button>
    </div>
  );
};

export default LoginForm;
