import React from 'react'
import Navbar from '../../components/Navbar'
import LoginImg from '../../assets/login-img.jpg'
import './Login.css'

const Login = () => {
  return (
    <div className='login'>
      <Navbar/>
      <div className='formcontainer'>
        <img className='form-img' src={LoginImg}>
        </img>
          
        <div className='formgroup'>
          <h3 className='login-head'>Login Here!</h3>
          <label htmlFor='email'>email</label>
          <input type='email' id='email'></input>
        </div>
        
      </div>
    </div>
  )
}

export default Login
