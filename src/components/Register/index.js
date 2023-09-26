import { useState } from 'react'
import {Link} from 'react-router-dom'
import { supabase } from '../Client'

import './index.css'

const Register = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [reEnterPassword, setReEnterPassword] = useState('')

  const onSubmitRegister = async e => {
    e.preventDefault();

    try {
      const { data } = await supabase.auth.signUp({
        email: email,
        password: password,
        re_enter_password: reEnterPassword,
        options: {
        data: {
            full_name: fullName,
            }
          }
      })
        console.log(data)
    }
    catch (error){
      alert(error)
    }
        

    if (fullName !== '' && email !== '' && password !== '' && reEnterPassword !== '') {
      setFullName('')
      setEmail('')
      setPassword('')
      setReEnterPassword('')
      alert('Registered Successfully. Please check your email...')
    }
    else {
      if (fullName === '' && email === '' && password === '' && reEnterPassword === '') {
        alert('Please Provide the Details...')
      }
      else if (fullName === '') {
        alert('Please Enter your Full Name...')
      }
      else if (email === '') {
        alert('Please Enter your Email...')
      }
      else if (password === '') {
        alert('Please Enter your Password...')
      }
      else if (reEnterPassword === '') {
        alert('Please Enter your Re-Enter Password...')
      }
    }
  }

  const onChangeFullName = (e) => {
    setFullName(e.target.value)
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const onChangeReEnterPassword = (e) => {
    setReEnterPassword(e.target.value)
  }

  return (
    <div className='register-container'>
      <h1 className='register-heading'>Register</h1>
      <form className='register-form-container' onSubmit={onSubmitRegister}>
        <div className='register-input-container'>
          <label className='register-label' htmlFor='fullName'>FullName</label>
          <input 
            className='register-user-input' 
            id='fullName' 
            name='fullName' 
            type='text' 
            placeholder='Enter FullName'
            value={fullName}
            onChange={onChangeFullName}
          />
        </div>
        <div className='register-input-container'>
          <label className='register-label' htmlFor='email'>Email</label>
          <input 
            className='register-user-input' 
            id='email' 
            name='email' 
            type='email' 
            placeholder='example@gmail.com'
            value={email}
            onChange={onChangeEmail}
          />
        </div>
        <div className='register-input-container'>
          <label className='register-label' htmlFor='password'>Password</label>
          <input 
            className='register-user-input' 
            id='password' 
            name='password' 
            type='password' 
            placeholder='Enter Password'
            value={password}
            onChange={onChangePassword}
          />
        </div>
        <div className='register-input-container'>
          <label className='register-label' htmlFor=''>Re-Enter Password</label>
          <input 
            className='register-user-input' 
            id='reEnterPassword' 
            name='reEnterPassword' 
            type='password' 
            placeholder='Re-Enter Password'
            value={reEnterPassword}
            onChange={onChangeReEnterPassword}
          />
        </div>
        <button className='register-button' type='submit'>Register</button>
        <p className='login-text'>Already have an account? <Link to='/credit-card-control' className='login-link'>Login here</Link></p>
      </form>
    </div>
  )       
}

export default Register