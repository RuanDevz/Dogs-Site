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
          <Route path='/login' element={<Login />}></Route>
        </Routes>
        <Main />
        <Footer />
      </Router>
    </div>
  )
}

export default App
