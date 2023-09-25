import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import NotFound from './components/NotFound'
import Home from './components/Home'

import './App.css';

const App = () => {
  const [token, setToken] = useState(false)

  if (token) {
    sessionStorage.setItem('token', JSON.stringify(token))
  }

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
  }, [])

  return (
    <div className='app-container'>
      <Routes>
        <Route exact path='/credit-card-control' element={<Login setToken={setToken} />} />
        <Route exact path='/register' element={<Register />} />
        {token ? <Route exact path='/' element={<Home token={token} />} /> : <Route exact path='/credit-card-control' element={<Login />} />}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App;