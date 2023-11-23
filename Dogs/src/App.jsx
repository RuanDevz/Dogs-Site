import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'
import Login from './Componentes/Login/Login'
import Main from './Componentes/Main'

const App = () => {
  return (
    <div>
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/login/:id' element={<Login />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
