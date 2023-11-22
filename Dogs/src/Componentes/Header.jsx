import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Dogs } from '../Assets/Dogs.svg'
import '../Estilos/App.css'

const Header = () => {
  return (
    <header className='container'>
      <Link to='/'>
        <Dogs />
      </Link>
      <Link to='/login'>Login / Criar</Link>
    </header>
  )
}

export default Header
