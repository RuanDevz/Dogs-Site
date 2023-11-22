import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';  // Import FaRegUser from the react-icons/fa library
import '../Estilos/Header.css';
import DogsImage from '../Assets/vector.jpg';
import '../Estilos/App.css';

const Header = () => {
  return (
    <header className='container'>
      <nav className='header'>
        <Link to='/'>
          <img className='logo' aria-label='Dogs - Home' src={DogsImage} alt="Dogs Logo" />
        </Link>
        <Link className='login' to='/login'>
          Login / Criar
          <FaRegUser />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
