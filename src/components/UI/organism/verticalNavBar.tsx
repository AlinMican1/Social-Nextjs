'use client'

import React from 'react'
import Button from '../atom/button'
import './verticalNavBar.css'
import { GoogleSignInButton } from '../atom/authButtons'
import RegisterForm from '../molecule/registerForm';
import LoginForm from './loginForm';

const VerticalNavBar = () => {
  return (
    
    <div className='container'>
        <LoginForm />
        {/* <p className='custom-p'>Or</p>
        
        <GoogleSignInButton />
        
        
        <RegisterForm />

        <h3>Already have an account?</h3> */}
        
    </div>
  )
}

export default VerticalNavBar