import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/criar' element={<LoginCreate />} />
        <Route path='/perdeu' element={<LoginPasswordLost />} />
        <Route path='/resetar' element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
}

export default Login;
