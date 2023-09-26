import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../Client'

import './index.css'

const Login = (props) => {
  const {setToken} = props
  let navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitLogin = async (e) => {
    e.preventDefault();

    try {
      const {data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })

      if (error) throw error
      setToken(data)
      navigate('/')

      if (email !== '' && password !== '') {
        setEmail('')
        setPassword('')
      }
      else {
        if (email === '' && password === '') {
          alert('Please Provide the Details...')
        }
        else if (email === '') {
          alert('Please Enter your Email...')
        }
        else if (password === '') {
          alert('Please Enter your Password...')
        }
      }
    }
    catch (error) {
      alert('Email or Password is incorrect')
    }   
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div className='login-container'>
      <h1 className='login-heading'>Login</h1>
      <form className='login-form-container' onSubmit={onSubmitLogin}>
        <div className='login-input-container'>
          <label htmlFor='email' className='login-label'>Email</label>
          <input 
            className='login-user-input'
            id='email'
            type='email'
            name='email'   
            placeholder='Enter your Email' 
            value={email} 
            onChange={onChangeEmail}
          />          
        </div>
        <div className='login-input-container'>
          <label htmlFor='password' className='login-label'>Password</label>
          <input 
            className='login-user-input' 
            id='password'
            type='password'
            name='password' 
            placeholder='Enter your Password' 
            value={password} 
            onChange={onChangePassword}
          />
        </div>
        <button className='login-button' type='submit'>Login</button>
        <p className='register-text'>Don't have an account? <Link to="/register" className='register-link'>Register here</Link></p>
      </form>   
    </div>
  )
}

export default Login