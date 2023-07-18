"use client"

import React from 'react';
import {signIn, signOut} from "next-auth/react";
import './button.css';
import './authButtons.css'
import { BsGithub, BsGoogle } from 'react-icons/bs'
 

export const GoogleSignInButton = () => {
    
    return (
        <button onClick={() => signIn("google")} className='login-provider-btn' > <BsGoogle/></button>
  )
}

// export const GitHubSignInButton = () =>{
//     const handleClick = () => {
//         signIn("github")
//     }
//     return (
//         <button onClick={handleClick} className='desfault'>Continue with Github</button>
//   )
// }

export const LogoutButton  = () =>{
    return (
        <button onClick={() => signOut()} className='default'>Sign Out</button>
  )

}