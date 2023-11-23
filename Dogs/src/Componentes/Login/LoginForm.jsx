import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Forms/Button';

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
      <label htmlFor="usulogin">Usuário</label>
      <input
      id='usulogin'
        type='text'
        value={username}
        placeholder='Insira seu nome'
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <p>Erro</p>
      <label htmlFor="senhalogin">Senha</label>
      <input
      id='senhalogin'
        type='password'
        value={password}
        placeholder='Insira sua senha'
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <p>Erro</p>
      <button onClick={Submit}>Entrar</button>
      <div>
        <Link to='perdeu'>Perdeu a Senha?</Link>
      </div>
      <div>
        <h1>Cadastre-se</h1>
        <p>Ainda não possui uma conta ? Cadastre-se no site.</p>
        <Link to='/criar'>
        <Button children='Cadastro' />
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
