"use client"

import React from 'react';
import {signIn, signOut} from "next-auth/react";
import './button.css';

 

export const GoogleSignInButton = () => {
    
    return (
        <button onClick={() => signIn("google")} className='default'>Continue with Google</button>
  )
}

// export const GitHubSignInButton = () =>{
//     const handleClick = () => {
//         signIn("github")
//     }
//     return (
//         <button onClick={handleClick} className='default'>Continue with Github</button>
//   )
// }

export const LogoutButton  = () =>{
    return (
        <button onClick={() => signOut()} className='default'>Sign Out</button>
  )

}