import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'
import Home from './Componentes/Home'
import Login from './Componentes/Login/Login'

const App = () => {
  return (
    <div>
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
