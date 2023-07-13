'use client'

import React from 'react'
import Button from '../atom/button'
import './verticalNavBar.css'
import { GoogleSignInButton, GitHubSignInButton, RegisterButton } from '../atom/authButtons'
import RegisterForm from '../molecule/registerForm';
import LoginForm from '../molecule/loginForm';

const VerticalNavBar = () => {
  return (
    <div className='container'>
        <GoogleSignInButton />
        <GitHubSignInButton />
        <p>Or</p>
        <RegisterForm />

        <h3>Already have an account?</h3>
        <LoginForm />
    </div>
  )
}

export default VerticalNavBar