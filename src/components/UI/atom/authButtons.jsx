"use client"

import React from 'react';
import {signIn} from "next-auth/react";
import './button.css';
import Link from 'next/link'
 

export const GoogleSignInButton = () => {
    const handleClick = () => {
        signIn("google");
    }
    return (
        <button onClick={handleClick} className='default'>Continue with Google</button>
  )
}

export const GitHubSignInButton = () =>{
    const handleClick = () => {
        signIn("github")
    }
    return (
        <button onClick={handleClick} className='default'>Continue with Github</button>
  )
}

export const RegisterButton = () =>{
    const handleClick = () => {
        <Link href="/register"></Link>
    }
    return (
        <button onClick={handleClick} className='default'>Register</button>
  )
}