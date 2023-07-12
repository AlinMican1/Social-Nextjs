'use client'

import React from 'react'
import Button from '../atom/button'
import './verticalNavBar.css'
import { GoogleSignInButton, GitHubSignInButton, RegisterButton } from '../atom/authButtons'

const VerticalNavBar = () => {
  const handleClick = () => {
    <Link href="/register"></Link>
}
  return (
    <div className='container'>
        <GoogleSignInButton />
        <GitHubSignInButton />
        <p>Or</p>
        <Button btnText={'Register'} btnVariant={'default'} onClick={handleClick} />

        <h3>Already have an account?</h3>
        <Button btnText={'Sign in'} btnVariant={'default'} />
    </div>
  )
}

export default VerticalNavBar